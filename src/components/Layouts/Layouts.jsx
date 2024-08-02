/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { PageDataContext } from '../Content/Content';
import { containerData } from '@/utils/constants/containerData';

const Layout = ({ name, imgSrc, isSelected, price }) => {
  return (
    <div
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <div>
        <div style={{ fontWeight: '700' }}>{name}</div>
        <div className={style.price}>${price.toLocaleString()}</div>
      </div>
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
    </div>
  );
};

const Layouts = () => {
  const { containerId, containerHeightIsStandard, supplier } =
    useContext(PageDataContext);

  return (
    <div className={style.container}>
      {containerData.map((container, index) => {
        const thumbnail = containerHeightIsStandard
          ? container.scThumbnail
          : container.hcThumbnail;
        const containerName = container.name;
        const containerImage = `/images/${supplier}/elevation/${thumbnail}`;
        const isSelected = container.id === containerId;
        const containerPrice = containerHeightIsStandard
          ? container.priceSc
          : container.priceHc;

        return (
          <a href={`/${supplier}/${container.slug}`} key={index}>
            <Layout
              name={containerName}
              imgSrc={containerImage}
              isSelected={isSelected}
              price={containerPrice}
            />
          </a>
        );
      })}
    </div>
  );
};

export default Layouts;
