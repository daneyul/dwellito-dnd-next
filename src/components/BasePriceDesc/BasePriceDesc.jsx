import Subtitle from "../Subtitle/Subtitle";
import style from "./basePriceDesc.module.scss"

const BasePriceDesc = () => {
  return (
    <div className={style.container}>
      <Subtitle text="Base Price" />
      <div className={style.value}>$74,000</div>
    </div>
  );
};

export default BasePriceDesc;