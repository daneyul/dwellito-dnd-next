/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from 'react';
import style from './orderSummaryModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { PageDataContext } from '@/components/Content/Content';
import {
  checkDistance,
  generateImgSrc,
  getComponentPrice,
  getUniqueElevationObjects,
} from '@/utils/2D/utils';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_HIGH,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  CONTAINER_STANDARD,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import * as Form from '@radix-ui/react-form';
import useSaveSelections from '@/utils/hooks/useSaveSelections';
import Toast from '../Toast/Toast';

const OrderSummaryModal = () => {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const {
    containerHeightIsStandard,
    orderTotal,
    selectedComponents,
    selectedContainer,
    scaleFactor,
    interiorFinish,
    interiorFinishPrice,
    exteriorFinish,
    flooring,
    slug,
    dialogOpen,
    setDialogOpen,
    supplier,
    containerSizeStr
  } = useContext(PageDataContext);
  const uniqueElevationNames = getUniqueElevationObjects(selectedComponents);
  const [zipCode, setZipCode] = useState('');
  const [openToast, setOpenToast] = useState(false);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const storedData = sessionStorage.getItem('formData');
    const formData = storedData ? JSON.parse(storedData) : {};
    formData[name] = value;
    sessionStorage.setItem('formData', JSON.stringify(formData));
  };

  useEffect(() => {
    if (dialogOpen) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`;
      script.async = true;
      script.onload = () => {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            componentRestrictions: { country: ['us', 'ca'] },
            types: ['address'],
          }
        );

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          const addressComponents = place.address_components;

          const findComponent = (type) => {
            return addressComponents.find((component) =>
              component.types.includes(type)
            )?.long_name;
          };

          const postalCode = findComponent('postal_code');
          const localCity =
            findComponent('locality') || findComponent('sublocality');
          const state = findComponent('administrative_area_level_1');

          if (postalCode) setZipCode(postalCode);

          const storedData = sessionStorage.getItem('formData');
          const formData = storedData ? JSON.parse(storedData) : {};
          formData['address'] = place.formatted_address;
          formData['zipCode'] = postalCode;
          formData['city'] = localCity;
          formData['state'] = state;
          sessionStorage.setItem('formData', JSON.stringify(formData));
        });
      };

      document.head.appendChild(script);

      // Clean up the script when the dialog is closed
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [dialogOpen]);

  useEffect(() => {
    // Disable Radix ui dialog pointer events lockout
    setTimeout(() => (document.body.style.pointerEvents = ''), 0);
  });

  const prepareSurfaceData = (elevationName) => {
    const components = selectedComponents
      .filter((component) => component.elevation[0].name === elevationName)
      .map((i) => {
        const distance = checkDistance({
          component: i,
          selectedElevation: i.elevation[0],
          DIMENSIONS,
          selectedContainer,
          scaleFactor,
        });
        return {
          name: i.name,
          position: `${distance.left}' from left & ${distance.right}' from right`,
          sku: i.desc,
          price: i.price,
          surface: elevationName,
        };
      });

    return components.length > 0 ? components : null;
  };

  const prepareFloorPlanData = () => {
    const components = selectedComponents
      .filter(
        (component) =>
          component.elevation[0].name === ELEVATION_NAMES.FLOOR_PLAN
      )
      .map((i) => {
        const distance = checkDistance({
          component: i,
          selectedElevation: i.elevation[0],
          DIMENSIONS,
          selectedContainer,
          scaleFactor,
        });
        return {
          name: i.name,
          position: `${distance.left}' from left & ${distance.top}' from top (on floor plan view)`,
          sku: i.desc,
          price: getComponentPrice(i, interiorFinish),
          surface: ELEVATION_NAMES.FLOOR_PLAN,
        };
      });

    return components.length > 0 ? components : null;
  };

  const triggerZapier = async ({ data }) => {
    const { convertedSelections } = useSaveSelections({
      selectedComponents,
      interiorFinish,
      exteriorFinish,
      flooring,
    });
    const surfaceData = {
      front: prepareSurfaceData(ELEVATION_NAMES.FRONT),
      back: prepareSurfaceData(ELEVATION_NAMES.BACK),
      left: prepareSurfaceData(ELEVATION_NAMES.LEFT),
      right: prepareSurfaceData(ELEVATION_NAMES.RIGHT),
      floorPlan: prepareFloorPlanData(),
    };

    // Remove null values from surface data
    Object.keys(surfaceData).forEach((key) => {
      if (!surfaceData[key]) {
        delete surfaceData[key];
      }
    });

    const responseData = {
      containerType: slug,
      containerHeight: containerHeightIsStandard
        ? CONTAINER_STANDARD
        : CONTAINER_HIGH,
      containerPaint: exteriorFinish.name,
      containerFlooring: flooring.name,
      containerInterior: interiorFinish.name,
      priceTotal: orderTotal,
      customerEmail: data.email,
      customerName: `${data.fname} ${data.lname}`,
      address: data.address,
      zipCode: zipCode,
      url: `https://custom.configure.so/custom-cubes/${slug}/?data=${convertedSelections}`,
      interiorFinish: {
        name: interiorFinish.name,
        price: interiorFinishPrice,
      },
      exteriorFinish: {
        name: exteriorFinish.name,
        price: exteriorFinish.price,
      },
      surface: surfaceData,
    };

    const JSONdata = JSON.stringify(responseData);
    const endpoint = 'https://hooks.zapier.com/hooks/catch/18577479/2yjklei/';

    try {
      const options = {
        method: 'POST',
        body: JSONdata,
        mode: 'no-cors',
      };
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        throw new Error('Failed to send Zapier request');
      }
      console.log('Zapier request sent successfully');
      setOpenToast(true);
      setDialogOpen(false);
    } catch (error) {
      console.error('Error sending Zapier request:', error);
      throw error; // Propagate error to handleSubmit for error handling
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      await triggerZapier({ data });
      console.log('Zapier request attempted');
      setDialogOpen(false);
    } catch (error) {
      console.error('Error triggering Zapier:', error);
      setDialogOpen(false);
      setOpenToast(true);
    }
  };

  const flooringPrice = () => {
    if (slug === CONTAINER_SIZE_10) {
      return flooring.price10;
    } else if (slug === CONTAINER_SIZE_20) {
      return flooring.price20;
    } else if (slug === CONTAINER_SIZE_40) {
      return flooring.price40;
    }
  };

  const ExteriorSection = () => (
    <div className={style.section}>
      <div className={style.elevationName}>Exterior Finish</div>
      <div style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        <div className={style.lineItem}>
          <div className={style.thumbnailContainer}>
            <img
              src={generateImgSrc(supplier, `exterior-finishes/${exteriorFinish.img}`)}
              alt={exteriorFinish.name}
              className={style.thumbnailImg}
            />
          </div>
          <div className={style.description}>{exteriorFinish.name}</div>
          <div className={style.price}>
            ${exteriorFinish.price.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );

  const InteriorSection = () => (
    <div className={style.section}>
      <div className={style.elevationName}>Interior Finish</div>
      <div style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        <div className={style.lineItem}>
          <div className={style.thumbnailContainer}>
            <img
              src={generateImgSrc(supplier, `interior-finishes/${interiorFinish.img}`)}
              alt={interiorFinish.name}
              className={style.thumbnailImg}
            />
          </div>
          <div className={style.description}>{interiorFinish.name}</div>
          <div className={style.price}>
            ${interiorFinishPrice.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );

  const FlooringSection = () => (
    <div className={style.section}>
      <div className={style.elevationName}>Flooring</div>
      <div style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        <div className={style.lineItem}>
          <div className={style.thumbnailContainer}>
            <img
              src={generateImgSrc(supplier, `flooring/${flooring.img}`)}
              alt={flooring.name}
              className={style.thumbnailImg}
            />
          </div>
          <div className={style.description}>{flooring.name}</div>
          <div className={style.price}>${flooringPrice().toLocaleString()}</div>
        </div>
      </div>
    </div>
  );

  const Section = ({ elevation }) => {
    const componentsForElevation = selectedComponents.filter((component) =>
      component.elevation.some((i) => i.name === elevation.name)
    );

    const isElectrical = elevation.name === ELEVATION_NAMES.FLOOR_PLAN && componentsForElevation[0].objType === COMPONENT_TYPES.ELECTRICAL;
    const isPartition = componentsForElevation[0].objType === COMPONENT_TYPES.PARTITION;
    const elevationName = () => {
      if (isElectrical) {
        return 'Electrical';
      } else if (isPartition) {
        return 'Partition Walls';
      } else {
        return `${elevation.name} Wall`;
      }
    }

    return (
      <div className={style.section}>
        <div className={style.elevationName}>{elevationName()}</div>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
          {componentsForElevation.map((component) => {
            const distance = checkDistance({
              component: component,
              selectedElevation: elevation,
              DIMENSIONS,
              selectedContainer,
              scaleFactor,
            });

            const imgSrc = () => {
              if (isElectrical) {
                if (component.name === COMPONENT_NAMES.WRAP_LIGHT) {
                  return component.floorPlanImg[containerSizeStr()]
                }
                return component.floorPlanImg
              } else {
                return component.frontImg || component.imgName
              }
            }

            const itemPrice = getComponentPrice(component, interiorFinish);

            return (
              <li key={component.id} className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  <img
                    src={generateImgSrc(supplier, imgSrc())}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  />
                </div>
                <div className={style.description}>
                  <div className={style.partNumber}>{component.desc}</div>
                  <div className={style.desc}>{component.name}</div>
                  {!isElectrical && (
                    <div className={style.distance}>
                      {distance.left}&quot; from left, {distance.right}&quot;
                      from right
                    </div>
                  )}
                  {isElectrical && (
                    <div className={style.distance}>
                      {distance.left}&quot; from left, {distance.top}&quot; from
                      top (on floor plan view)
                    </div>
                  )}
                </div>
                <div className={style.price}>${itemPrice.toLocaleString()}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Total = ({ text, value }) => (
    <div className={style.total}>
      <div>{text}</div>
      <div>{value}</div>
    </div>
  );

  return (
    <>
      <Toast
        isOpen={openToast}
        setIsOpen={setOpenToast}
        text='Reservation placed!'
      />
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={style.overlay}>
            <Dialog.Content
              className={style.content}
              onInteractOutside={(e) => {
                const classes = [];
                e.composedPath().forEach((el) => {
                  if (el.classList) {
                    classes.push(Array.from(el.classList));
                  }
                });
                if (classes.join('-').includes('pac-container')) {
                  e.preventDefault();
                }
              }}
            >
              <Dialog.Title className={style.title}>Order Summary</Dialog.Title>
              {uniqueElevationNames.map((elevation, index) => (
                <Section key={index} elevation={elevation} />
              ))}
              <ExteriorSection />
              <InteriorSection />
              <FlooringSection />
              <Total
                text='Sub Total'
                value={`$${orderTotal.toLocaleString()}`}
              />
              <Total
                text='Total'
                value={`$${parseInt(orderTotal).toLocaleString()}`}
              />
              <Form.Root onSubmit={(e) => handleSubmit(e)}>
              <div className={style.formTitle}>Project Details</div>
                <div className={style.addressWrapper}>
                  <Form.Field className='FormField' name='address'>
                    <div className={style.messageWrapper}>
                      <Form.Message
                        className={style.message}
                        match='valueMissing'
                      >
                        Please enter your address
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        ref={inputRef}
                        className={style.input}
                        type='address'
                        required
                        placeholder='Property Address'
                        onChange={handleInputChange}
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
                <div className={style.nameWrapper}>
                  <Form.Field className={style.formField} name='fname'>
                    <Form.Control asChild>
                      <input
                        className={style.input}
                        type='text'
                        required
                        placeholder='First Name'
                      />
                    </Form.Control>
                  </Form.Field>
                  <Form.Field className={style.formField} name='lname'>
                    <Form.Control asChild>
                      <input
                        className={style.input}
                        type='text'
                        required
                        placeholder='Last Name'
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
                <div className={style.addressWrapper}>
                  <Form.Field className={style.formField} name='email'>
                    <div>
                      <Form.Message
                        className={style.message}
                        match='valueMissing'
                      >
                        Please enter your email
                      </Form.Message>
                      <Form.Message
                        className={style.message}
                        match='typeMismatch'
                      >
                        Please provide a valid email
                      </Form.Message>
                    </div>
                    <Form.Control asChild>
                      <input
                        className={style.input}
                        type='email'
                        required
                        placeholder='Email'
                      />
                    </Form.Control>
                  </Form.Field>
                </div>
                <Form.Submit asChild>
                  <button className={style.button}>Submit</button>
                </Form.Submit>
              </Form.Root>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default OrderSummaryModal;
