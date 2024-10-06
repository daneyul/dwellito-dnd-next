import style from './saveOrder.module.scss';
import { useContext } from 'react';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedSaveOrder = () => {
  const { setDialogOpen } = useContext(ShedDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <button className={style.button} onClick={setDialogOpen}>Continue</button>
    </div>
  );
};

export default ShedSaveOrder;
