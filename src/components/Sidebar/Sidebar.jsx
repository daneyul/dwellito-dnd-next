import { useContext } from "react";
import Badges from "../Badges/Badges";
import BasePriceDesc from "../BasePriceDesc/BasePriceDesc";
import Selector from "../Selector/Selector";
import style from "./sidebar.module.css";
import { PageDataContext } from "@/app/page";
import PriceSummary from "../PriceSummary/PriceSummary";
import SaveBtn from "../SaveBtn/SaveBtn";

const NotYourOrder = ({ orderTotal, selectedComponents }) => {
  return (
    <>
      <div className={style.header}>20&apos; Custom Cube</div>
      <div className={style.supplier}>By Custom Cubes</div>
      <div className={style.description}>
        Custom Cubes offers shipping containers for sale and modifications.
        Whether its for storage purposes or mobile office space we got it!
      </div>
      <Badges />
      <BasePriceDesc />
      <Selector />
      <div className={style.order}>
        <PriceSummary orderTotal={orderTotal} />
        <SaveBtn
          selectedComponents={selectedComponents}
          orderTotal={orderTotal}
        />
      </div>
      {/* <SaveOrder /> */}
    </>
  );
};

const Sidebar = () => {
  const { showYourOrder, orderTotal, selectedComponents } = useContext(PageDataContext);
  return (
    <div className={style.container}>
      <NotYourOrder
        orderTotal={orderTotal}
        selectedComponents={selectedComponents}
      />
    </div>
  );
};

export default Sidebar;
