import { useContext } from 'react';
import style from '../priceTotal.module.scss'
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

export const PriceTotal = () => {
  const { orderTotal, setDialogOpen, supplier } = useContext(ContainerDataContext);

  if (supplier === SUPPLIER_SLUGS.AT_AND_S) return null;

  return (
    <button className={style.container} onClick={setDialogOpen}>
      <div className={style.price}>${orderTotal.toLocaleString()}</div>
      <div className={style.text}>&nbsp;CAD</div>
    </button>
  );
};
