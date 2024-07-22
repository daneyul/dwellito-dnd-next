/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import { PageDataContext } from '../Content/Content';

const AddFixedElecOption = ({ options }) => {
  const {
    setSelectedComponents,
    floorPlan,
    setShow3d,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
    selectedComponents,
  } = useContext(PageDataContext);

  return options.map((item) => {
    const imgSrc = !!item.sidebarImg ? item.sidebarImg : item.floorPlanImg;
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );
    console.log(selectedComponents)

    return (
      <div
        className={alreadySelected ? style.objImgContainerSelected : style.objImgContainer}
        onClick={() => {
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
        }}
      >
        <img
          src={generateImgSrc(imgSrc)}
          alt={item.name}
          className={style.fixedObjImg}
        />
        <div className={style.objDesc}>
          {item.name}
          <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
            +${item.price.toLocaleString()}
          </div>
        </div>
      </div>
    );
  });
};

export default AddFixedElecOption;
