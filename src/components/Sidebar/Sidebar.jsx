import { useContext } from "react";
import Badges from "../Badges/Badges";
import BasePriceDesc from "../BasePriceDesc/BasePriceDesc";
import Selector from "../Selector/Selector";
import style from "./sidebar.module.css";
import { PageDataContext } from "@/app/page";
import SaveOrder from "../SaveOrder/SaveOrder";
import YourOrder from "../YourOrder/YourOrder";

const Sidebar = () => {
  const { showYourOrder } = useContext(PageDataContext);

  const NotYourOrder = () => {
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
        <SaveOrder />
      </>
    );
  };

  return (
    <div className={style.container}>
      {showYourOrder ? <YourOrder /> : <NotYourOrder />}
    </div>
  );
};

export default Sidebar;
