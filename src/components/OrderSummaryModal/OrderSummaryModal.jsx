/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './orderSummaryModal.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { PageDataContext } from '@/components/Content/Content';
import {
  base64ToJson,
  checkDistance,
  generateImgSrc,
  getUniqueElevationObjects,
} from '@/utils/2D/utils';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import {
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import * as Form from '@radix-ui/react-form';
import useSaveSelections from '@/utils/hooks/useSaveSelections';

const OrderSummaryModal = () => {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const {
    orderTotal,
    selectedComponents,
    selectedContainer,
    scaleFactor,
    interiorFinish,
    exteriorFinish,
    flooring,
    slug,
    dialogOpen,
    setDialogOpen
  } = useContext(PageDataContext);
  const uniqueElevationNames = getUniqueElevationObjects(selectedComponents);
  const tax = 1000;

  const flooringPrice = () => {
    if (slug === CONTAINER_10_SLUG) {
      return flooring.price10;
    } else if (slug === CONTAINER_20_SLUG) {
      return flooring.price20;
    } else if (slug === CONTAINER_40_SLUG) {
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
              src={generateImgSrc(`exterior-finishes/${exteriorFinish.img}`)}
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
              src={generateImgSrc(`interior-finishes/${interiorFinish.img}`)}
              alt={interiorFinish.name}
              className={style.thumbnailImg}
            />
          </div>
          <div className={style.description}>{interiorFinish.name}</div>
          <div className={style.price}>
            ${interiorFinish.price.toLocaleString()}
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
              src={generateImgSrc(`flooring/${flooring.img}`)}
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

  const triggerZapier = async (email) => {
    const responseData = {
      // siteName: 'Container Configurator',
      // 'data__Detail Order': jsonToBase64(detailOrder),
      // data__Email: email,
      // data__eventType: 'Save Design',
      // data__Exterior: selectedExteriors,
      // data__Interior: selectedInteriors,
      // data__Services: selectedServices,
      // data__Layout: selectedLayout,
      // data__model: modelData['Name'],
      // data__Supplier: supplierData['Name'],
      // data__currency: supplierData['Currency'],
      // 'data__Estimated Shipping': shippingCost,
      // scrollDepth: scrollDepth,
      // sessionLength: sessionLength,
    };
    const JSONdata = JSON.stringify(responseData);
    const endpoint = 'https://hooks.zapier.com/hooks/catch/5485468/2yjklei/';

    try {
      const options = {
        method: 'POST',
        body: JSONdata,
        mode: 'no-cors',
      };
      const response = await fetch(endpoint, options);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior if not already handled

    const { convertedSelections } = useSaveSelections({
      selectedComponents,
      interiorFinish,
      exteriorFinish,
      flooring,
    });

    try {
      // const saveURL = `?data=${convertedSelections}`;
      // await triggerZapier({ data });
      // console.log('Zapier request attempted');
    } catch (error) {
      // console.error('Error triggering Zapier:', error);
    }
  };

  const Section = ({ elevation }) => {
    const componentsForElevation = selectedComponents.filter((component) =>
      component.elevation.some((i) => i.name === elevation.name)
    );

    const isElectrical = elevation.name === ELEVATION_NAMES.FLOOR_PLAN;
    const elevationName = isElectrical
      ? 'Electrical'
      : `${elevation.name} Wall`;

    return (
      <div className={style.section}>
        <div className={style.elevationName}>{elevationName}</div>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
          {componentsForElevation.map((component) => {
            const distance = checkDistance({
              component: component,
              selectedElevation: elevation,
              DIMENSIONS,
              selectedContainer,
              scaleFactor,
            });

            console.log(distance)

            const imgSrc = isElectrical
              ? component.floorPlanImg
              : component.frontImg || component.imgName;

            return (
              <li key={component.id} className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  <img
                    src={generateImgSrc(imgSrc)}
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
                </div>
                <div className={style.price}>${component.price}</div>
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
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay}>
          <Dialog.Content className={style.content}>
            <Dialog.Title className={style.title}>Order Summary</Dialog.Title>
            {uniqueElevationNames.map((elevation, index) => (
              <Section key={index} elevation={elevation} />
            ))}
            <ExteriorSection />
            <InteriorSection />
            <FlooringSection />
            <Total text='Sub Total' value={`$${orderTotal.toLocaleString()}`} />
            <Total text='Tax' value={`$${tax.toLocaleString()}`} />
            <Total
              text='Total'
              value={`$${(
                parseInt(orderTotal) + parseInt(tax)
              ).toLocaleString()}`}
            />
            <Form.Root onSubmit={(e) => handleSubmit(e)}>
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
  );
};

export default OrderSummaryModal;
