import { useContext } from 'react';
import style from './priceTotal.module.scss';
import { PageDataContext } from '@/components/Content/Content';

const PriceTotal = () => {
  const { orderTotal } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.price}>${orderTotal.toLocaleString()}</div>
      <div className={style.text}>&nbsp;USD</div>
    </div>
  );
};

export default PriceTotal;
