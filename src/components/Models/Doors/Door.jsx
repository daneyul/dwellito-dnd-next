import Rhr from "./Rhr";
import Lhr from "./Lhr";
import French from "./French";
import Rollup from "./Rollup";
import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import Sliding5 from "./Sliding5";
import Sliding6 from "./Sliding6";

export default function Door({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_DOOR_LHR:
    case COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_LHR:
      return <Lhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.PERSONNEL_DOOR_RHR:
    case COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_RHR:
      return <Rhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR_5:
      return <Sliding5 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR_6:
      return <Sliding6 component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.FRENCH_DOOR:
      return <French component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR:
      return <Rollup component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    default:
      return null;
  }
}
