import AddOption from "../AddOption/AddOption";
import style from "./selector.module.css";
import { componentData, COMPONENT_TYPES } from "../../utils/2D/library";
import { useRef, useState, useEffect } from "react";

const Selector = ({
  setSelectedComponents,
  selectedElevation,
  setHasCollisions,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const doors = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.DOOR
  );
  const windows = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.WINDOW
  );
  const vents = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.VENT
  );

  const contentClass = `${style.content} ${
    isExpanded ? style.expandedContent : ""
  }`;
  const titleTopClass = isExpanded ? style.expandedTitleTop : style.titleTop;
  const plusMinus = isExpanded ? "-" : "+";

  return (
    <div className={style.container} ref={containerRef}>
      <div className={titleTopClass} onClick={toggleExpand}>
        {plusMinus} Add component
      </div>
      <div className={contentClass}>
        <div className={style.title}>Doors</div>
        <div className={style.objectContainer}>
          <AddOption
            options={doors}
            setSelectedComponents={setSelectedComponents}
            selectedElevation={selectedElevation}
            setHasCollisions={setHasCollisions}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div className={style.title}>Windows</div>
        <div className={style.objectContainer}>
          <AddOption
            options={windows}
            setSelectedComponents={setSelectedComponents}
            selectedElevation={selectedElevation}
            setHasCollisions={setHasCollisions}
            setIsExpanded={setIsExpanded}
          />
        </div>
        <div className={style.title}>Vents</div>
        <div className={style.objectContainer}>
          <AddOption
            options={vents}
            setSelectedComponents={setSelectedComponents}
            selectedElevation={selectedElevation}
            setHasCollisions={setHasCollisions}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </div>
    </div>
  );
};

export default Selector;
