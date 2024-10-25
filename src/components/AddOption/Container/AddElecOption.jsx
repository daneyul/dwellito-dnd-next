/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from '../addElecOption.module.scss';
import { CONTAINER_SIZE_10, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { generateImgSrc, getComponentPrice, handleAddComponent } from '@/utils/2D/containers/utils';

const AddElecOption = ({ options }) => {
  const {
    slug,
    setSelectedComponents,
    setTempSelectedComponents,
    floorPlan,
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
    }

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
              setTempSelectedComponents,
              selectedElevation: mappedElevations[3],
              floorPlan,
            });
          } else {
            setShow3d(false);
            handleAddComponent({
              item,
              selectedComponents,
              setSelectedComponents,
              setTempSelectedComponents,
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
  });
};

export default AddElecOption;
