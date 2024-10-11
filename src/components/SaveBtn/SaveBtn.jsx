/* eslint-disable @next/next/no-img-element */
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react';
import style from './saveBtn.module.css';
import {
  getUniqueElevationObjects,
  checkDistance,
  generateImgSrc,
} from '../../utils/2D/containers/utils';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const SaveBtn = ({ selectedComponents, orderTotal }) => {
  const [open, setOpen] = useState(false);
  const { selectedContainer, scaleFactor, supplier } = useContext(ContainerDataContext);
  const uniqueElevationNames = getUniqueElevationObjects(selectedComponents);
  const tax = 1000;

  const Section = ({ elevation }) => {
    const componentsForElevation = selectedComponents.filter((component) =>
      component.elevation.some((i) => i.name === elevation.name)
    );

    return (
      <div className={style.section}>
        <div className={style.elevationName}>{elevation.name}</div>
        <ul style={{ listStyleType: 'none', margin: '0', padding: '0' }}>
          {componentsForElevation.map((component) => {
            const distance = checkDistance({
              component: component,
              selectedElevation: elevation,
              DIMENSIONS,
              selectedContainer,
              scaleFactor,
            });

            return (
              <li key={component.id} className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  <img
                    src={generateImgSrc(supplier, component.imgName)}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  />
                </div>
                <div className={style.description}>
                  <div className={style.partNumber}>{component.partNumber}</div>
                  <div className={style.desc}>{component.desc}</div>
                  <div className={style.distance}>
                    {distance.left}&quot; from left, {distance.right}&quot; from
                    right
                  </div>
                </div>
                <div className={style.price}>${component.price}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  const Total = ({ text, value }) => {
    return (
      <div className={style.total}>
        <div>{text}</div>
        <div>{value}</div>
      </div>
    );
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={style.trigger}>Save Order</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={style.overlay}>
          <Dialog.Content className={style.content}>
            <Dialog.Title className={style.title}>Order Summary</Dialog.Title>
            {uniqueElevationNames.map((elevation, index) => (
              <Section key={index} elevation={elevation} />
            ))}
            <Total text='Sub Total' value={`$${orderTotal.toLocaleString()}`} />
            <Total text='Tax' value={`$${tax.toLocaleString()}`} />
            <Total
              text='Total'
              value={`$${(orderTotal + tax).toLocaleString()}`}
            />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Dialog.Close className={style.confirm}>
                Confirm Order
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default SaveBtn;
