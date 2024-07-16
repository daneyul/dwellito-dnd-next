import style from './saveOrder.module.scss';
import { useContext } from 'react';
import { PageDataContext } from '../Content/Content';

const SaveOrder = () => {
  const { setDialogOpen } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <button className={style.button} onClick={setDialogOpen}>Continue</button>
    </div>
  );
};

export default SaveOrder;
