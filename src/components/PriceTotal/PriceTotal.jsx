import { useContext } from 'react';
import style from './priceTotal.module.scss';
import { PageDataContext } from '@/components/Content/Content';

const PriceTotal = () => {
  const { orderTotal, setDialogOpen } = useContext(PageDataContext);

  return (
    <button className={style.container} onClick={setDialogOpen}>
      <div className={style.price}>${orderTotal.toLocaleString()}</div>
      <div className={style.text}>&nbsp;CAD</div>
    </button>
  );
};

export default PriceTotal;
