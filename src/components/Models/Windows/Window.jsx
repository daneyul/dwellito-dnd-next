import WhiteSecurity from "./WhiteSecurity";
import White from "./White";
import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

export default function Window({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.WINDOW_WHITE_SECURITY:
      return <WhiteSecurity component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    case COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY:
      return <White component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    default:
      return null;
  }
}