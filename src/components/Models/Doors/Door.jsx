import Rhr from "./Rhr";
import Lhr from "./Lhr";
import French from "./French";
import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import Sliding5 from "./Sliding5";
import Sliding6 from "./Sliding6";
import Rollup6 from "./Rollup6";
import Rollup8 from "./Rollup8";
import Rollup10 from "./Rollup10";
import Rollup12 from "./Rollup12";
import Rollup15 from "./Rollup15";

export default function Door({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_DOOR_LHR:
      return <Lhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.PERSONNEL_DOOR_RHR:
      return <Rhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR_5:
      return <Sliding5 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR_6:
      return <Sliding6 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.FRENCH_DOOR:
      return <French component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR_6:
      return <Rollup6 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR_8:
      return <Rollup8 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR_10:
      return <Rollup10 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR_12:
      return <Rollup12 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR_15:
      return <Rollup15 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    default:
      return null;
  }
}
