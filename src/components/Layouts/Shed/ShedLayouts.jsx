/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from '../layout.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { shedData } from '@/utils/constants/shedData';

const Layout = ({ name, imgSrc, isSelected, price, supplier, shed }) => {
  return (
    <a
      href={`/${supplier}/${shed.slug}`}
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
      <div style={{ width: "100%" }}>
        <div style={{ fontWeight: '700' }}>{name}</div>
        <div className={style.price}>${price.toLocaleString()}</div>
      </div>
    </a>
  );
};

const ShedLayouts = () => {
  const { shedId, supplier } =
    useContext(ShedDataContext);

  return (
    <div className={style.container}>
      {shedData.map((shed, index) => {
        const thumbnail = shed.thumbnail;
        const shedName = shed.name;
        const shedImage = `/images/sheds/${thumbnail}`;
        const isSelected = shed.id === shedId;
        const shedPrice = shed.price;

        return (
          <Layout
            name={shedName}
            imgSrc={shedImage}
            isSelected={isSelected}
            price={shedPrice}
            supplier={supplier}
            shed={shed}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ShedLayouts;
