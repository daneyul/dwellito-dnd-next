/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { roofData } from '@/utils/constants/components/roofs/roofData';

const Layout = ({ name, imgSrc, isSelected, price }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
      <div style={{ width: "100%" }}>
        <div style={{ fontWeight: '700' }}>{name}</div>
        <div className={style.price}>${price.toLocaleString()}</div>
      </div>
    </div>
  );
};

const RoofOptions = () => {
  const { supplier, selectedComponents } =
    useContext(ShedDataContext);

  return (
    <div className={style.container}>
      {roofData.map((roof) => {
        const thumbnail = roof.thumbnail;
        const roofName = roof.name;
        const roofImage = `/images/${supplier}/${thumbnail}`;
        const isSelected = selectedComponents.includes((roof))
        const roofPrice = roof.price

        return (
          <Layout
              name={roofName}
              imgSrc={roofImage}
              isSelected={isSelected}
              price={roofPrice}
              supplier={supplier}
            />
        );
      })}
    </div>
  );
};

export default RoofOptions;
