import { useEffect, useRef, useState } from 'react';
import style from '../mobileForm.module.scss';
import * as Form from '@radix-ui/react-form';
import * as RadixToast from '@radix-ui/react-toast';
import CheckCircled from '../../svgs/CheckCircled';

export const MobileForm = ({ supplier }) => {
  const [openToast, setOpenToast] = useState(false);
  const inputRef = useRef(null);
  const [zipCode, setZipCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const storedData = sessionStorage.getItem('formData');
    const formData = storedData ? JSON.parse(storedData) : {};
    formData[name] = value;
    sessionStorage.setItem('formData', JSON.stringify(formData));
  };

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    // Disable Radix ui dialog pointer events lockout
    setTimeout(() => (document.body.style.pointerEvents = ''), 0);
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    // console.log(data);

    triggerZapier({ data });
  };

  const triggerZapier = async ({ data }) => {
    const responseData = {
      siteName: 'Configure',
      customerEmail: data.email,
      mobileVisitor: true,
      supplier: supplier,
      zipCode: zipCode,
      phoneNumber: data.phone,
      address: data.address,
    };
    const JSONdata = JSON.stringify(responseData);
    const endpoint = 'https://hooks.zapier.com/hooks/catch/18577479/2yjklei/';

    try {
      const options = {
        method: 'POST',
        body: JSONdata,
        mode: 'no-cors',
      };
      await fetch(endpoint, options);
      setOpenToast(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <RadixToast.Provider>
        <RadixToast.Root
          className={style.toastRoot}
          open={openToast}
          onOpenChange={setOpenToast}
        >
          <RadixToast.Title className={style.toastTitle}>
            Email being sent!
          </RadixToast.Title>
          <RadixToast.Description className={style.toastDescription} asChild>
            Email being sent!
          </RadixToast.Description>
          <CheckCircled />
        </RadixToast.Root>
        <RadixToast.Viewport className={style.toastViewport} />
      </RadixToast.Provider>
      <Form.Root onSubmit={(e) => handleSubmit(e)}>
        <div
          style={{
            fontFamily: 'Linotype',
            fontSize: '24px',
            fontWeight: '400',
            color: 'black',
            textAlign: 'center',
            marginTop: '1.5rem',
            marginBottom: '1rem',
          }}
        >
          Project Details
        </div>
        <div className={style.addressWrapper}>
          <Form.Field className='FormField' name='address'>
            <div className={style.messageWrapper}>
              <Form.Message className={style.message} match='valueMissing'>
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
              <Form.Message className={style.message} match='valueMissing'>
                Please enter your email
              </Form.Message>
              <Form.Message className={style.message} match='typeMismatch'>
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
        <div className={style.addressWrapper}>
          <Form.Field className={style.formField} name='phone'>
            <div>
              <Form.Message className={style.message} match='valueMissing'>
                Please enter your phone number
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                className={style.input}
                type='phone'
                required
                placeholder='Phone Number'
              />
            </Form.Control>
          </Form.Field>
        </div>
        <Form.Submit asChild>
          <button className={style.button}>Submit</button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};
