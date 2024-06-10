/* eslint-disable @next/next/no-img-element */
import { useContext, useState } from "react";
import style from "./priceTotal.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import { PageDataContext } from "@/components/Content/Content";
import {
  checkDistance,
  generateImgSrc,
  getUniqueElevationObjects,
} from "@/utils/2D/utils";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

const PriceTotal = () => {
  const { orderTotal, selectedComponents, selectedContainer, scaleFactor, interiorFinish, exteriorFinish, flooring } =
    useContext(PageDataContext);
  const { ELEVATION_NAMES, DIMENSIONS } = useContext(Library2dDataContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const uniqueElevationNames = getUniqueElevationObjects(selectedComponents);
  const tax = 1000;

  const ExteriorSection = () => {
    return (
      <div className={style.section}>
        <div className={style.elevationName}>Exterior Finish</div>
        <div style={{ listStyleType: "none", margin: "0", padding: "0" }}>
          <div className={style.lineItem}>
            <div className={style.thumbnailContainer}>
              {/* <img
                src={generateImgSrc(component.imgName)}
                alt={component.desc}
                className={style.thumbnailImg}
              /> */}
            </div>
            <div className={style.description}>
              {exteriorFinish.name}
            </div>
            <div className={style.price}>${exteriorFinish.price.toLocaleString()}</div>
          </div>
        </div>
      </div>
    )
  }

  const InteriorSection = () => {
    return (
      <div className={style.section}>
        <div className={style.elevationName}>Interior Finish</div>
        <div style={{ listStyleType: "none", margin: "0", padding: "0" }}>
              <div className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  {/* <img
                    src={generateImgSrc(component.imgName)}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  /> */}
                </div>
                <div className={style.description}>
                {interiorFinish.name}
                </div>
                <div className={style.price}>${interiorFinish.price.toLocaleString()}</div>
              </div>
        </div>
      </div>
    )
  }

  const FlooringSection = () => {
    return (
      <div className={style.section}>
        <div className={style.elevationName}>Flooring</div>
        <div style={{ listStyleType: "none", margin: "0", padding: "0" }}>
              <div className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  {/* <img
                    src={generateImgSrc(component.imgName)}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  /> */}
                </div>
                <div className={style.description}>
                {flooring.name}
                </div>
                <div className={style.price}>${flooring.price.toLocaleString()}</div>
              </div>
        </div>
      </div>
    )
  }

  const Section = ({ elevation }) => {
    const componentsForElevation = selectedComponents.filter((component) =>
      component.elevation.some((i) => i.name === elevation.name)
    );

    return (
      <div className={style.section}>
        <div className={style.elevationName}>{elevation.name} Wall</div>
        <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
          {componentsForElevation.map((component) => {
            const distance = checkDistance({
              component: component,
              selectedElevation: elevation,
              DIMENSIONS,
              ELEVATION_NAMES,
              selectedContainer,
              scaleFactor,
            });

            return (
              <li key={component.id} className={style.lineItem}>
                <div className={style.thumbnailContainer}>
                  <img
                    src={generateImgSrc(component.imgName)}
                    alt={component.desc}
                    className={style.thumbnailImg}
                  />
                </div>
                <div className={style.description}>
                  <div className={style.partNumber}>{component.desc}</div>
                  <div className={style.desc}>{component.name}</div>
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
    <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
      <Dialog.Trigger asChild>
        <div className={style.container}>
          <div className={style.price}>${orderTotal.toLocaleString()}</div>
          <div className={style.text}>&nbsp;USD</div>
        </div>
      </Dialog.Trigger>
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
            <Total text="Sub Total" value={`$${orderTotal.toLocaleString()}`} />
            <Total text="Tax" value={`$${tax.toLocaleString()}`} />
            <Total
              text="Total"
              value={`$${(parseInt(orderTotal) + parseInt(tax)).toLocaleString()}`}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
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

export default PriceTotal;
