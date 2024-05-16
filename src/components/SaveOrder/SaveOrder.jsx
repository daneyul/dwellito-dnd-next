
import { useContext, useEffect } from "react";
import style from "./saveOrder.module.scss";
import { PageDataContext } from "@/components/Content/Content";

const SaveOrder = () => {
  const { toggleOrder } = useContext(PageDataContext);
  return (
    <div className={style.container}>
      <div className={style.heading}>Save Your Order</div>
      <div className={style.subheading}>
        Est Delivery: October 2024
      </div>
      <div
        className={style.button}
        onClick={toggleOrder}
      >
        Continue
      </div>
    </div>
  );
};

export default SaveOrder;
