/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from './layout.module.scss';
import { PageDataContext } from '../Content/Content';
import { containerData } from '@/utils/constants/containerData';
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';

const Layout = ({ name, imgSrc, isSelected, price, supplier, container }) => {
  return (
    <a
      href={`/${supplier}/${container.slug}`}
      className={
        isSelected ? style.layoutContainerSelected : style.layoutContainer
      }
    >
      <img src={imgSrc} alt='layout' className={style.layoutImg} />
      <div style={{ width: "100%" }}>
        <div style={{ fontWeight: '700' }}>{name}</div>
        {supplier === SUPPLIER_SLUGS.AT_AND_S ? null : (
          <div className={style.price}>${price.toLocaleString()}</div>
        )}
      </div>
    </a>
  );
};

const Layouts = () => {
  const { containerId, containerHeightIsStandard, supplier } =
    useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.title}>Start with a Design</div>
      {containerData.map((container, index) => {
        const thumbnail = container.thumbnail;
        const containerName = container.name;
        const containerImage = `/images/containers/thumbnails/sizes/${thumbnail}`;
        const isSelected = container.id === containerId;
        const containerPrice = containerHeightIsStandard
          ? container.priceSc
          : container.priceHc;

        return (
          <Layout
            name={containerName}
            imgSrc={containerImage}
            isSelected={isSelected}
            price={containerPrice}
            supplier={supplier}
            container={container}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Layouts;
