import { useContext, useEffect } from "react";
import style from "./elevationToggle.module.scss";
import { PageDataContext } from "../Content/Content";

const ElevationToggle = () => {
  const { mappedElevations, selectedElevation, setSelectedElevation, show3d, setSelectedElevationIndex } =
    useContext(PageDataContext);

  if (!show3d) {
    return (
      <div className={style.container}>
        {mappedElevations.map((elevation, index) => {
          return (
            <button
              key={elevation.id}
              className={`${style.toggle} ${
                selectedElevation === elevation ? style.toggleSelected : ""
              }`}
              onClick={() => {
                setSelectedElevation(elevation)
                setSelectedElevationIndex(index)
              }}
            >
              {elevation.name}
            </button>
          );
        })}
      </div>
    );
  }
};

export default ElevationToggle;
