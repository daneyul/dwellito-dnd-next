import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import style from './saveOrder.module.scss';
import { useContext } from 'react';

const ContainerSaveOrder = () => {
  const { setDialogOpen } = useContext(ContainerDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <button className={style.button} onClick={setDialogOpen}>Continue</button>
    </div>
  );
};

export default ContainerSaveOrder;
