import { COMPONENT_NAMES } from "@/utils/2D/library";
import Rhr from "./Rhr";
import Lhr from "./Lhr";
import Sliding from "./Sliding";
import French from "./French";
import Rollup from "./Rollup";

export default function Door({ onBoundingBoxChange, component }) {
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