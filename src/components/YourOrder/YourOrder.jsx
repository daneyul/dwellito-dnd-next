import { useContext } from "react";
import EditDesignBtn from "../EditDesignBtn/EditDesignBtn";
import style from "./yourOrder.module.scss";
import { PageDataContext } from "@/app/page";

const YourOrder = () => {
  const { setShowYourOrder } = useContext(PageDataContext);
  return (
    <>
      <EditDesignBtn setShowYourOrder={setShowYourOrder} />
      <div className={style.title}>Your Order</div>
      <div className={style.subtitle}>Estimated Delivery: October 2024</div>
    </>
  );
};

export default YourOrder;
