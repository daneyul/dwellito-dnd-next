import { useContext } from 'react';
import style from '../priceTotal.module.scss'
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

export const PriceTotal = () => {
  const { orderTotal, setDialogOpen } = useContext(ShedDataContext);

  return (
    <button className={style.container} onClick={setDialogOpen}>
      <div className={style.price}>${orderTotal.toLocaleString()}</div>
      <div className={style.text}>&nbsp;USD</div>
    </button>
  );
};
