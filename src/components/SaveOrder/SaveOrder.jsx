import { useContext } from 'react';
import style from './saveOrder.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';

const SaveOrder = () => {
  const { dialogOpen, setDialogOpen } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <div className={style.subheading}>Est Delivery: October 2024</div>
      <OrderSummaryModal
        trigger={<div className={style.button}>Continue</div>}
      />
    </div>
  );
};

export default SaveOrder;
