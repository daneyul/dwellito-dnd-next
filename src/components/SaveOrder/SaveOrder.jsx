import style from './saveOrder.module.scss';
import { useContext } from 'react';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const SaveOrder = () => {
  const { setDialogOpen } = useContext(ContainerDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <button className={style.button} onClick={setDialogOpen}>Continue</button>
    </div>
  );
};

export default SaveOrder;
