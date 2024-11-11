/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect, useRef, useState } from 'react';
import style from '../orderSummaryModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { generateImgSrc } from '@/utils/2D/sheds/utils';
import * as Form from '@radix-ui/react-form';
import useSaveSelections from '@/utils/hooks/sheds/useSaveSelections';
import Toast from '../../Toast/Toast';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { COMPONENT_TYPES } from '@/utils/constants/names/names';

export const OrderSummaryModal = () => {
  const {
    selectedComponents,
    exteriorFinish,
    slug,
    dialogOpen,
    setDialogOpen,
    supplier,
    orderTotal
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

  const triggerZapier = async ({ data }) => {
    const responseData = {
      shedType: slug,
      supplier: supplier,
      exteriorPaint: exteriorFinish.name,
      customerEmail: data.email,
      customerName: `${data.fname} ${data.lname}`,
      address: data.address,
      zipCode: zipCode,
      url: `https://custom.configure.so/${supplier}/${slug}/?data=${convertedSelections}`,
      mobileVisitor: false,
      currency: 'USD',
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
          <div className={style.price}>
            {`$${exteriorFinish.price.toLocaleString()}`}
          </div>
        </div>
      </div>
    </div>
  );

  const MiscSection = () => {
    const components = selectedComponents.filter(
      (component) => component.objType === COMPONENT_TYPES.MISC
    );

    if (components.length === 0) return null;

    return (
      <div className={style.section}>
        <div className={style.elevationName}>Misc</div>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
          {components.map((component) => {
            const imgSrc = component.thumbnail;

            const itemPrice = component.price;

            return (
              <li key={component.id} className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  <img
                    src={generateImgSrc(supplier, imgSrc)}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  />
                </div>
                <div className={style.description}>
                  <div className={style.partNumber}>{component.desc}</div>
                  <div className={style.desc}>{component.name}</div>
                </div>
                <div className={style.price}>
                  {itemPrice < 0
                    ? `-$${Math.abs(itemPrice).toLocaleString()}`
                    : `+$${itemPrice.toLocaleString()}`}
                </div>
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
              <ExteriorSection />
              <MiscSection />
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
