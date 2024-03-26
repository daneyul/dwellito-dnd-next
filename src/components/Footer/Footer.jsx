import ElevationToggle from "../ElevationToggle/ElevationToggle";
import PriceSummary from "../PriceSummary/PriceSummary";
import SaveBtn from "../SaveBtn/SaveBtn";
import style from "./footer.module.css";

const Footer = ({ orderTotal, selectedElevation, setSelectedElevation, selectedComponents }) => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.empty}></div>
        <ElevationToggle
          selectedElevation={selectedElevation}
          setSelectedElevation={setSelectedElevation}
        />
        <div className={style.content}>
          <PriceSummary orderTotal={orderTotal} />
          <SaveBtn selectedComponents={selectedComponents} orderTotal={orderTotal} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
