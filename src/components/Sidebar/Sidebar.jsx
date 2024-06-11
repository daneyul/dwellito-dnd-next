"use client";
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
import Layouts from "../Layouts/Layouts";
import Subtitle from "../Subtitle/Subtitle";
import { CONTAINER_HIGH, CONTAINER_STANDARD } from "@/utils/constants";

const Sidebar = () => {
  const { showYourOrder, selectedContainerHeight, setSelectedContainerHeight } = useContext(PageDataContext);
  const { EXTERIOR, INTERIOR, FLOORING } = useContext(Library3dDataContext);
  const supplierName = "Custom Cubes";
  const containerIsStandard = selectedContainerHeight === CONTAINER_STANDARD;
  const containerIsHigh = selectedContainerHeight === CONTAINER_HIGH;

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
        <Layouts />
        <div className={style.containerHeights}>
          <Subtitle text="Select the height" />
          <Subtitle
            text="Start with your ideal number of bedrooms."
            css={{ fontWeight: 400, marginBottom: "1rem" }}
          />
          <div className={style.containerHeightSelectWrapper}>
            <button
              onClick={setSelectedContainerHeight(CONTAINER_STANDARD)}
              className={
                containerIsStandard
                  ? style.containerButtonSelected
                  : style.containerButton
              }
            >
              <span style={{ fontWeight: 700, marginRight: "0.25rem" }}>
                Standard
              </span>
              <span>8' 5"</span>
            </button>
            <button
            onClick={setSelectedContainerHeight(CONTAINER_HIGH)}
              className={
                containerIsHigh
                  ? style.containerButtonSelected
                  : style.containerButton
              }
            >
              <span style={{ fontWeight: 700, marginRight: "0.25rem" }}>
                High Container
              </span>
              <span>9' 6"</span>
            </button>
          </div>
        </div>
        <div className={style.selectionTagName} style={{ marginTop: "2rem" }}>
          Choose Exterior Paint
        </div>
        <Subtitle
          text="Select your desired material color"
          css={{ fontWeight: 400, marginBottom: "1rem" }}
        />
        <SingleSelect type={EXTERIOR} />
        <Selector />
        <div className={style.selectionTagName}>Select your wall finish</div>
        <SingleSelect type={INTERIOR} />
        <div className={style.selectionTagName}>Select your flooring</div>
        <SingleSelect type={FLOORING} />
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
