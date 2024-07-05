import { useContext } from 'react';
import style from './priceTotal.module.scss';
import { PageDataContext } from '@/components/Content/Content';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';
import * as Dialog from '@radix-ui/react-dialog';

const PriceTotal = () => {
  const { orderTotal, dialogOpen, setDialogOpen } = useContext(PageDataContext);

  return (
    <>
      <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
        <Dialog.Trigger asChild>
          <div className={style.container}>
            <div className={style.price}>${orderTotal.toLocaleString()}</div>
            <div className={style.text}>&nbsp;USD</div>
          </div>
        </Dialog.Trigger>
        <OrderSummaryModal />
      </Dialog.Root>
    </>
  );
};

export default PriceTotal;
