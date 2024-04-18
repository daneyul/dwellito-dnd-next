import { elevationData } from "../../utils/2D/library";
import style from "./elevationToggle.module.css";

const ElevationToggle = ({ selectedElevation, setSelectedElevation }) => {
  return (
    <div className={style.container}>
      {
        elevationData.map((elevation) => {
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