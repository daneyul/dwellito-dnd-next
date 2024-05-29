import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { WSecurity, WoSecurity } from "./SpecificWindows";

export default function Window({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.WINDOW_WHITE_SECURITY:
      return <WSecurity component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    case COMPONENT_NAMES.WINDOW_WHITE_WO_SECURITY:
      return <WoSecurity component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    default:
      return null;
  }
}