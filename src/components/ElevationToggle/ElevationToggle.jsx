import { useContext } from "react";
import style from "./elevationToggle.module.css";
import { PageDataContext } from "../Content/Content";

const ElevationToggle = ({ selectedElevation, setSelectedElevation }) => {
  const { mappedElevations } = useContext(PageDataContext);
  return (
    <div className={style.container}>
      {
        mappedElevations.map((elevation) => {
          return (
            <button
              key={elevation.id}
              className={`${style.toggle} ${selectedElevation === elevation ? style.toggleSelected : ""}`}
              onClick={() => setSelectedElevation(elevation)}
            >
              {elevation.name}
            </button>
          )
        })
      }
    </div>
  )
}

export default ElevationToggle;