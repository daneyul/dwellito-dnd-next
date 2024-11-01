/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { handleAddComponent } from '@/utils/2D/sheds/utils';
import { componentData } from '@/utils/constants/componentData';
import { COMPONENT_TYPES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';

const Layout = ({ name, imgSrc, isSelected, handleAdd }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
      onClick={handleAdd}
    >
      <img src={imgSrc} alt='layout' className={style.layoutImg} style={{ maxHeight: '100px' }}/>
      <div style={{ width: '100%' }}>
        <div style={{ fontWeight: '700' }}>{name}</div>
      </div>
    </div>
  );
};

const FrontOptions = () => {
  const {
    supplier,
    selectedElevation,
    selectedComponents,
    setSelectedComponents,
    floorPlan,
    setShowExterior,
    setCameraReady,
    showExterior
  } = useContext(ShedDataContext);

  const doors = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.DOOR && item.supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES
  );

  return (
    <div className={style.container}>
      {doors.map((door) => {
        const thumbnail = door.imgName;
        const doorName = door.name;
        const doorImage = `/images/${supplier}/${thumbnail}`;
        const isSelected = selectedComponents.some(
          (component) => component.name === door.name
        );

        return (
          <Layout
            name={doorName}
            imgSrc={doorImage}
            isSelected={isSelected}
            price={0}
            supplier={supplier}
            handleAdd={() => {
              if (!showExterior) {
                setShowExterior(true);
                setCameraReady(false);
              }
              handleAddComponent({
                item: door,
                setSelectedComponents,
                selectedElevation,
                floorPlan,
              });
            }}
          />
        );
      })}
    </div>
  );
};

export default FrontOptions;
