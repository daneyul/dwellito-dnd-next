import { useState } from 'react';
import style from './mobileForm.module.scss';
import * as Form from '@radix-ui/react-form';
import * as RadixToast from '@radix-ui/react-toast';
import CheckCircled from '../svgs/CheckCircled';

const MobileForm = () => {
  const [openToast, setOpenToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data);

    triggerZapier({ data });
  };

  const triggerZapier = async ({ data }) => {
    const responseData = {
      siteName: 'Configure',
      data__Email: data.email,
      mobileVisitor: true,
    };
    const JSONdata = JSON.stringify(responseData);
    const endpoint = 'https://hooks.zapier.com/hooks/catch/18577479/3n5hb9h/';

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
          <RadixToast.Title className={style.toastTitle}>Email being sent!</RadixToast.Title>
          <RadixToast.Description className={style.toastDescription} asChild>
          Email being sent!
          </RadixToast.Description>
          <CheckCircled />
        </RadixToast.Root>
        <RadixToast.Viewport className={style.toastViewport} />
      </RadixToast.Provider>
      <Form.Root className={style.root} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.title}>
          Switch to your computer for the full experience
        </div>
        <div className={style.sendText}>
          For full features, type your email below. We’ll send you a desktop
          link.
        </div>
        <Form.Field name='email'>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}
          >
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
              id='name'
              placeholder='Email'
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button className={style.button} style={{ marginTop: 10 }}>
            Send to Email
          </button>
        </Form.Submit>
      </Form.Root>
    </>
  );
};

export default MobileForm;
