/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { handleAddComponent } from '@/utils/2D/sheds/utils';
import { componentData } from '@/utils/constants/componentData';
import { COMPONENT_TYPES } from '@/utils/constants/names/names';

const Layout = ({ name, imgSrc, isSelected, price, handleAdd }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
      onClick={handleAdd}
    >
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
      <div style={{ width: '100%' }}>
        <div style={{ fontWeight: '700' }}>{name}</div>
        <div className={style.price}>${price.toLocaleString()}</div>
      </div>
    </div>
  );
};

const RoofOptions = () => {
  const {
    supplier,
    selectedElevation,
    selectedComponents,
    setSelectedComponents,
    selectedShed,
    floorPlan,
    setShowExterior,
    setCameraReady
  } = useContext(ShedDataContext);

  const roofs = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.ROOF
  );

  return (
    <div className={style.container}>
      {roofs.map((roof) => {
        const thumbnail = roof.thumbnail;
        const roofName = roof.name;
        const roofImage = `/images/${supplier}/roof/${selectedShed.height}/${thumbnail}`;
        const isSelected = selectedComponents.some(
          (component) => component.id === roof.id
        );
        const roofPrice = roof.price;

        return (
          <Layout
            name={roofName}
            imgSrc={roofImage}
            isSelected={isSelected}
            price={roofPrice}
            supplier={supplier}
            handleAdd={() => {
              setShowExterior(true);
              setCameraReady(false);
              handleAddComponent({
                item: roof,
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

export default RoofOptions;
