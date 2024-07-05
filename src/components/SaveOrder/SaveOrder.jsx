import { useContext } from 'react';
import style from './saveOrder.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';
import * as Dialog from '@radix-ui/react-dialog';

const SaveOrder = () => {
  const { dialogOpen, setDialogOpen } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <div className={style.subheading}>Est Delivery: October 2024</div>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Trigger asChild>
          <div className={style.button}>Continue</div>
        </Dialog.Trigger>
        <OrderSummaryModal />
      </Dialog.Root>
    </div>
  );
};

export default SaveOrder;
