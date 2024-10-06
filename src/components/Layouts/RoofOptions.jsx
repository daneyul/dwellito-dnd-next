/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { shedData } from '@/utils/constants/shedData';

const Layout = ({ name, imgSrc, isSelected, price, supplier }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <div>
        <div style={{ fontWeight: '700' }}>{name}</div>
        {supplier === SUPPLIER_SLUGS.AT_AND_S ? null : <div className={style.price}>${price.toLocaleString()}</div>}
      </div>
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
    </div>
  );
};

const RoofOptions = () => {
  const { shedId, supplier } =
    useContext(ShedDataContext);

  return (
    <div className={style.container}>
      {shedData.map((shed, index) => {
        const thumbnail = shed.thumbnail;
        const shedName = shed.name;
        const shedImage = `/images/${supplier}/elevation/${thumbnail}`;
        const isSelected = shed.id === shedId;
        const shedPrice = shed.price

        return (
          <a href={`/${supplier}/${shed.slug}`} key={index}>
            <Layout
              name={shedName}
              imgSrc={shedImage}
              isSelected={isSelected}
              price={shedPrice}
              supplier={supplier}
            />
          </a>
        );
      })}
    </div>
  );
};

export default RoofOptions;
