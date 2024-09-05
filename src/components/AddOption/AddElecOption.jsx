/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import {
  generateImgSrc,
  getComponentPrice,
  handleAddComponent,
} from '../../utils/2D/utils';
import style from './addOption.module.css';
import { PageDataContext } from '../Content/Content';
import { COMPONENT_NAMES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';

const AddElecOption = ({ options }) => {
  const {
    setSelectedComponents,
    floorPlan,
    setShow3d,
    selectedElevation,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
    selectedComponents,
    interiorFinish,
    supplier,
  } = useContext(PageDataContext);

  return options.map((item) => {
    const imgSrc = !!item.sidebarImg ? item.sidebarImg : item.floorPlanImg;
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );
    const itemPrice =
      supplier === SUPPLIER_SLUGS.AT_AND_S
        ? item.price
        : getComponentPrice(item, interiorFinish, true);

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
            item.name === COMPONENT_NAMES.OUTLET ||
            item.name === COMPONENT_NAMES.INDOOR_OUTDOOR_FAN
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
          } else if (item.name === COMPONENT_NAMES.BUTYL_TAPE) {
            setShow3d(false);
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
          <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
            +${itemPrice.toLocaleString()}
          </div>
        </div>
      </div>
    );
  });
};

export default AddElecOption;
