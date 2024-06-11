import { Vent12, Vent20, Vent24 } from "./SpecificVents";
import { COMPONENT_NAMES } from "@/utils/constants";

export default function Vent({ onBoundingBoxChange, component }) {
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