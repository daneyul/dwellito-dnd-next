import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import AddOption from "../AddOption/AddOption";
import style from "./selector.module.scss";
import { useContext } from "react";

const Selector = () => {
  const { COMPONENT_TYPES, componentData } = useContext(Library2dDataContext);

  const doors = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.DOOR
  );
  const windows = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.WINDOW
  );
  const vents = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.VENT
  );

  return (
    <div className={style.container}>
      <div className={style.titleTop}>Add component</div>
      <p style={{ marginBottom: "1rem" }}>Place Doors, Windows, and other add-ons to your unit</p>
      <div className={style.expandedContent}>
        <div className={style.subTitle}>Doors</div>
        <div className={style.objectContainer}>
          <AddOption
            options={doors}
          />
        </div>
        <div className={style.subTitle}>Windows</div>
        <div className={style.objectContainer}>
          <AddOption
            options={windows}
          />
        </div>
        <div className={style.subTitle}>Vents</div>
        <div className={style.objectContainer}>
          <AddOption
            options={vents}
          />
        </div>
      </div>
    </div>
  );
};

export default Selector;
