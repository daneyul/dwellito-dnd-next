import Rhr from "./Rhr";
import Lhr from "./Lhr";
import Sliding from "./Sliding";
import French from "./French";
import Rollup from "./Rollup";
import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

export default function Door({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_DOOR_LHR:
    case COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_LHR:
      return <Lhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.PERSONNEL_DOOR_RHR:
    case COMPONENT_NAMES.PERSONNEL_DOOR_WO_SECURITY_RHR:
      return <Rhr component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR:
      return <Sliding component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.FRENCH_DOOR:
      return <French component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    case COMPONENT_NAMES.ROLL_UP_DOOR:
      return <Rollup component={component} onBoundingBoxChange={onBoundingBoxChange} />;
    default:
      return null;
  }
}
