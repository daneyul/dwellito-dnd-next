import AddOption from "../AddOption/AddOption";
import style from "./selector.module.css";
import { componentData, COMPONENT_TYPES } from "../../utils/2D/library";

const Selector = () => {
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
