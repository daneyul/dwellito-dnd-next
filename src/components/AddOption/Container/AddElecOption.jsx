/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from '../addElecOption.module.scss';
import {
  CONTAINER_SIZE_10,
  SUPPLIER_SLUGS,
} from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import {
  generateImgSrc,
  getComponentPrice,
  handleAddComponent,
} from '@/utils/2D/containers/utils';
import * as HoverCard from '@radix-ui/react-hover-card';

const AddElecOption = ({ options }) => {
  const {
    slug,
    setSelectedComponents,
    floorPlan,
    isFloorPlanView,
    setShow3d,
    selectedElevation,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
    selectedComponents,
    interiorFinish,
    supplier,
  } = useContext(ContainerDataContext);

  const filteredOptions = options.filter((item) => {
    if (slug === CONTAINER_SIZE_10 && item.isCanLight) {
      return false;
    }
    return true;
  });

  return filteredOptions.map((item) => {
    const imgSrc = !!item.sidebarImg ? item.sidebarImg : item.floorPlanImg;
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );
    const itemPrice =
      supplier === SUPPLIER_SLUGS.AT_AND_S
        ? item.price
        : getComponentPrice(item, interiorFinish, true);

    const Price = () => {
      if (supplier !== SUPPLIER_SLUGS.AT_AND_S) {
        return (
          <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
            +${itemPrice.toLocaleString()}
          </div>
        );
      }
    };

    if (isFloorPlanView && item.fixed) {
      return (
        <div
          className={
            alreadySelected
              ? style.objImgContainerSelected
              : style.objImgContainer
          }
          onClick={() => {
            if (
              supplier === SUPPLIER_SLUGS.CUSTOM_CUBES ||
              item.ceilingOnly ||
              item.moveableInFloorPlan
            ) {
              setShow3d(false);
              setSelectedElevation(mappedElevations[3]);
              setSelectedElevationIndex(3);
              handleAddComponent({
                item,
                selectedComponents,
                setSelectedComponents,
                selectedElevation: mappedElevations[3],
                floorPlan,
              });
            } else {
              setShow3d(false);
              handleAddComponent({
                item,
                setSelectedComponents,
                selectedElevation,
                floorPlan,
              });
            }
          }}
        >
          <img
            src={generateImgSrc(supplier, imgSrc)}
            alt={item.name}
            className={style.fixedObjImg}
          />
          <div className={style.objDesc}>
            {item.name}
            <Price />
          </div>
        </div>
      );
    } else if (isFloorPlanView && !item.fixed && !item.moveableInFloorPlan) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <div className={style.objImgContainer} style={{ opacity: '0.25' }}>
              <img
                style={{ opacity: '0.25' }}
                src={generateImgSrc(supplier, imgSrc)}
                alt={item.name}
                className={style.objImg}
              />
              <div className={style.objDesc}>
                {item.name}
                <Price />
              </div>
            </div>
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className={style.tooltipText} side='top'>
              Select a container side to place this item
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      );
    } else {
      return (
        <div
          className={
            alreadySelected
              ? style.objImgContainerSelected
              : style.objImgContainer
          }
          onClick={() => {
            if (
              supplier === SUPPLIER_SLUGS.CUSTOM_CUBES ||
              item.ceilingOnly ||
              item.moveableInFloorPlan
            ) {
              setShow3d(false);
              setSelectedElevation(mappedElevations[3]);
              setSelectedElevationIndex(3);
              handleAddComponent({
                item,
                selectedComponents,
                setSelectedComponents,
                selectedElevation: mappedElevations[3],
                floorPlan,
              });
            } else {
              setShow3d(false);
              handleAddComponent({
                item,
                setSelectedComponents,
                selectedElevation,
                floorPlan,
              });
            }
          }}
        >
          <img
            src={generateImgSrc(supplier, imgSrc)}
            alt={item.name}
            className={style.fixedObjImg}
          />
          <div className={style.objDesc}>
            {item.name}
            <Price />
          </div>
        </div>
      );
    }
  });
};

export default AddElecOption;
