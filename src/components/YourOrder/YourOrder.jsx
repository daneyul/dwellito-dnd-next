import { useContext } from "react";
import EditDesignBtn from "../EditDesignBtn/EditDesignBtn";
import style from "./yourOrder.module.scss";
import { PageDataContext } from "@/app/page";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import CostEstimate from "../CostEstimate/CostEstimate";

const YourOrder = () => {
  return (
    <>
      <EditDesignBtn />
      <div className={style.title}>Your Order</div>
      <div className={style.subtitle}>Estimated Delivery: October 2024</div>
      <CostEstimate />
      <ProjectDetails />
    </>
  );
};

export default YourOrder;
