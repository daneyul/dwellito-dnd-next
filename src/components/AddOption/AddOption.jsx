import { generateImgSrc, handleAddComponent } from "../../utils/2D/utils";
import style from "./addOption.module.css";

const AddOption = ({
  options,
  setSelectedComponents,
  selectedElevation,
  setHasCollisions,
  setIsExpanded,
}) => {
  return options.map((item, index) => {
    return (
      <div className={style.tooltipContainer} key={index}>
        <img
          key={item.id}
          src={generateImgSrc(item.imgName)}
          alt={item.name}
          onClick={() =>
            handleAddComponent(
              item,
              setSelectedComponents,
              selectedElevation,
              setHasCollisions,
              setIsExpanded
            )
          }
          className={style.objImg}
        />
        <div className={style.tooltipText}>{item.name}</div>
      </div>
    );
  });
};

export default AddOption;
