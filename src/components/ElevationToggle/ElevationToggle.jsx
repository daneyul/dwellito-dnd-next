import { useContext } from "react";
import style from "./elevationToggle.module.css";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

const ElevationToggle = ({ selectedElevation, setSelectedElevation }) => {
  const { elevationData } = useContext(Library2dDataContext);
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