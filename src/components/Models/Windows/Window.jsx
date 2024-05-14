import { COMPONENT_NAMES } from "@/utils/2D/library";
import WhiteSecurity from "./WhiteSecurity";
import White from "./White";

export default function Window({ onBoundingBoxChange, component }) {
  switch (component.name) {
    case COMPONENT_NAMES.WINDOW_WHITE_SECURITY:
      return <WhiteSecurity component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    case COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY:
      return <White component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    default:
      return null;
  }
}