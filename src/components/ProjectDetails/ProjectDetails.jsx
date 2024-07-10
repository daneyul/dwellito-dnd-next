'use client';
import { useContext, useState } from 'react';
import style from './projectDetails.module.scss';
import * as Form from '@radix-ui/react-form';
import { useRouter } from 'next/navigation';
import NewLink from '../NewLink';
import { usePlacesWidget } from 'react-google-autocomplete';
import { PageDataContext } from '@/components/Content/Content';

const ProjectDetails = () => {
  const router = useRouter();
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    onPlaceSelected: (place) => {
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
      if (localCity) setCity(localCity);
      if (state) setState(state);
    },
    options: {
      componentRestrictions: { country: 'us' },
      types: ['address'],
    },
  });

  const handleSubmit = (event) => {
    console.log('do something');
  };

  return (
    <div className={style.container}>
      <div className={style.title}>Project Details</div>
      <Form.Root onSubmit={(e) => handleSubmit(e)}>
        <div className={style.addressWrapper}>
          <Form.Field className='FormField' name='address'>
            <div className={style.messageWrapper}>
              <Form.Message className={style.message} match='valueMissing'>
                Please enter your address
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input
                ref={ref}
                className={style.input}
                type='address'
                required
                placeholder='Property Address'
              />
            </Form.Control>
          </Form.Field>
        </div>
        <div className={style.nameWrapper}>
          <Form.Field className={style.formField} name='fname'>
            <div className={style.messageWrapper}>
              <Form.Message className={style.message} match='valueMissing'>
                Please enter your name
              </Form.Message>
            </div>
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
            <div className={style.messageWrapper}>
              <Form.Message className={style.message} match='valueMissing'>
                Please enter your name
              </Form.Message>
            </div>
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
        <Form.Field className='FormField' name='email'>
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
        <div className={style.textContainer}>
          <div className={style.saveWrapper}>
            <NewLink />
            <div onClick={() => sharePage()} className={style.save}>
              Save Your Design
            </div>
          </div>
          <div className={style.dueText}>Due Today</div>
          <div className={style.duePrice}>$250</div>
          <div className={style.refundable}> Refundable Order Fee</div>
        </div>
        <Form.Submit asChild>
          <button className={style.button}>Place Reservation</button>
        </Form.Submit>
      </Form.Root>
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        Hold your spot in production for your model by making your deposit
        today!
      </div>
    </div>
  );
};

export default ProjectDetails;
