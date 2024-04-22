import { useContext } from "react";
import style from "./costEstimate.module.scss";
import { PageDataContext } from "@/app/page";

const CostEstimate = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Cost Breakdown</div>
      <div className={style.lineItem}>
        <div>Base Unit</div>
        <div>$100</div>
      </div>
      <div className={style.lineItem}>
        <div>Upgrades</div>
        <div>$100</div>
      </div>
      <div className={style.total}>
        <div>Total</div>
        <div>$100</div>
      </div>
    </div>
  );
};

export default CostEstimate;
