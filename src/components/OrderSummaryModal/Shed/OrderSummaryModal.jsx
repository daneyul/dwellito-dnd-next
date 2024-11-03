/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from 'react';
import style from '../orderSummaryModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import {
  checkDistance,
  generateImgSrc,
} from '@/utils/2D/sheds/utils';
import {
  ELEVATION_NAMES,
  SUPPLIER_SLUGS,
} from '@/utils/constants/names/names';
import * as Form from '@radix-ui/react-form';
import useSaveSelections from '@/utils/hooks/sheds/useSaveSelections';
import Toast from '../../Toast/Toast';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

export const OrderSummaryModal = () => {
  const {
    selectedComponents,
    scaleFactor,
    exteriorFinish,
    slug,
    dialogOpen,
    setDialogOpen,
    supplier,
  } = useContext(ShedDataContext);
  const { convertedSelections } = useSaveSelections({
    selectedComponents,
    exteriorFinish,
  });
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
          scaleFactor,
        });
        return {
          name: i.name,
          position: `${distance.left}' from left & ${distance.right}' from right`,
          surface: elevationName,
        };
      });

    return components.length > 0 ? components : null;
  };

  const triggerZapier = async ({ data }) => {
    const surfaceData = {
      front: prepareSurfaceData(ELEVATION_NAMES.FRONT),
      back: prepareSurfaceData(ELEVATION_NAMES.BACK),
      left: prepareSurfaceData(ELEVATION_NAMES.LEFT),
      right: prepareSurfaceData(ELEVATION_NAMES.RIGHT),
    };

    // Remove null values from surface data
    Object.keys(surfaceData).forEach((key) => {
      if (!surfaceData[key]) {
        delete surfaceData[key];
      }
    });

    const responseData = {
      containerType: slug,
      supplier: supplier,
      exteriorPaint: exteriorFinish.name,
      customerEmail: data.email,
      customerName: `${data.fname} ${data.lname}`,
      address: data.address,
      zipCode: zipCode,
      url: `https://custom.configure.so/${supplier}/${slug}/?data=${convertedSelections}`,
      exteriorFinish: {
        name: exteriorFinish.name,
      },
      surface: surfaceData,
      mobileVisitor: false,
      currency: supplier === SUPPLIER_SLUGS.CUSTOM_CUBES ? 'CAD' : 'USD',
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
      setOpenToast(true);
      setDialogOpen(false);
    } catch (error) {
      console.error('Error sending Zapier request:', error);
      throw error;
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

  const ExteriorSection = () => (
    <div className={style.section}>
      <div className={style.elevationName}>Exterior Finish</div>
      <div style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
        <div className={style.lineItem}>
          <div className={style.thumbnailContainer}>
            <img
              src={generateImgSrc(
                supplier,
                `exterior-finishes/${exteriorFinish.img}`
              )}
              alt={exteriorFinish.name}
              className={style.thumbnailImg}
            />
          </div>
          <div className={style.description}>{exteriorFinish.name}</div>
          <div className={style.price} />
        </div>
      </div>
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
              <ExteriorSection />
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
