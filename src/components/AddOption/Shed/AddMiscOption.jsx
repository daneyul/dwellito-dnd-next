/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import style from '../addElecOption.module.scss';
import {
  generateImgSrc,
  handleAddComponent,
} from '@/utils/2D/sheds/utils';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const AddMiscOption = ({ options }) => {
  const {
    setSelectedComponents,
    selectedComponents,
    supplier,
  } = useContext(ShedDataContext);

  return options.map((item) => {
    const imgSrc = item.thumbnail;
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );
    const itemPrice = item.price;

    const Price = () => {
      return (
        <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
          {itemPrice < 0 ? `-$${Math.abs(itemPrice).toLocaleString()}` : `+$${itemPrice.toLocaleString()}`}
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
