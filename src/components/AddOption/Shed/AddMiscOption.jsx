/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from '../addElecOption.module.scss';
import {
  generateImgSrc,
  handleAddComponent,
} from '@/utils/2D/sheds/utils';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { SHED_12x24, SHED_12x32, SHED_16x24, SHED_20x24 } from '@/utils/constants/names/names';

const AddMiscOption = ({ options }) => {
  const {
    setSelectedComponents,
    selectedComponents,
    supplier,
    selectedShed
  } = useContext(ShedDataContext);

  return options.map((item) => {
    const imgSrc = item.thumbnail;
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );
    const itemPrice = () => {
      if (selectedShed.size === SHED_12x24) {
        return item.price12x24;
      } else if (selectedShed.size === SHED_12x32) {
        return item.price12x32;
      } else if (selectedShed.size === SHED_16x24) {
        return item.price16x24;
      } else if (selectedShed.size === SHED_20x24) {
        return item.price20x24;
      }
    }

    const Price = () => {
      return (
        <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
          {itemPrice() < 0 ? `-$${Math.abs(itemPrice()).toLocaleString()}` : `+$${itemPrice().toLocaleString()}`}
        </div>
      );
    };

    return (
      <div
        key={item.id}
        className={
          alreadySelected
            ? style.objImgContainerSelected
            : style.objImgContainer
        }
        onClick={() => {
          handleAddComponent({
            item,
            setSelectedComponents
          });
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

export default AddMiscOption;
