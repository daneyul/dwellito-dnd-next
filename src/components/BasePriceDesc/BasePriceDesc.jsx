import Subtitle from '../Subtitle/Subtitle';
import style from './basePriceDesc.module.scss';

const BasePriceDesc = ({ price }) => {
  return (
    <div className={style.container}>
      <Subtitle text='Base Price' />
      <div className={style.value}>${price.toLocaleString()}</div>
    </div>
  );
};

export default BasePriceDesc;
