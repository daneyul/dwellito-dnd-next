
import { useContext } from "react";
import style from "./saveOrder.module.scss";
import { PageDataContext } from "@/app/page";

const SaveOrder = () => {
  const { setShowYourOrder } = useContext(PageDataContext);
  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <div className={style.subheading}>
        Est Delivery: October 2024
      </div>
      <div
        className={style.button}
        onClick={() => {
          setShowYourOrder(true);
        }}
      >
        Continue
      </div>
    </div>
  );
};

export default SaveOrder;
