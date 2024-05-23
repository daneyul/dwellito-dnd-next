import { useContext } from "react";
import Badges from "../Badges/Badges";
import BasePriceDesc from "../BasePriceDesc/BasePriceDesc";
import Selector from "../Selector/Selector";
import style from "./sidebar.module.scss";
import { PageDataContext } from "@/components/Content/Content";
import SaveOrder from "../SaveOrder/SaveOrder";
import YourOrder from "../YourOrder/YourOrder";
import SingleSelect from "../SingleSelect/SingleSelect";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

const Sidebar = () => {
  const { showYourOrder } = useContext(PageDataContext);
  const { EXTERIOR, INTERIOR } = useContext(Library3dDataContext);
  // const supplierName = supplierData["Name"];
  const supplierName = "Custom Cubes";

  const NotYourOrder = () => {
    return (
      <>
        <div className={style.header}>{supplierName}</div>
        <div className={style.supplier}>By {supplierName}</div>
        <div className={style.description}>
          {supplierName} offers shipping containers for sale and modifications.
          Whether its for storage purposes or mobile office space we got it!
        </div>
        <Badges />
        <BasePriceDesc />
        <Selector />
        <div className={style.selectionTagName}>
          Exterior Siding
        </div>
        <SingleSelect type={EXTERIOR} />
        <div className={style.selectionTagName}>
          Interior
        </div>
        <SingleSelect type={INTERIOR} />
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
