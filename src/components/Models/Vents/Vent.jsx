import { useContext } from "react";
import Vent12 from "./Vent12";
import Vent20 from "./Vent20";
import Vent24 from "./Vent24";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

export default function Vent({ onBoundingBoxChange, component }) {
  const { COMPONENT_NAMES } = useContext(Library2dDataContext);

  switch (component.name) {
    case COMPONENT_NAMES.VENT_12:
      return <Vent12 component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    case COMPONENT_NAMES.VENT_20:
      return <Vent20 component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    case COMPONENT_NAMES.VENT_24:
      return <Vent24 component={component} onBoundingBoxChange={onBoundingBoxChange}/>;
    default:
      return null;
  }
}