import style from "./priceSummary.module.css";

const PriceSummary = ({ orderTotal }) => {
  return (
    <div className={style.container}>
      <span className={style.orderSummary}>Order Summary</span>
      <span className={style.orderTotal}>${orderTotal.toLocaleString()}</span>
    </div>
  )
}

export default PriceSummary;