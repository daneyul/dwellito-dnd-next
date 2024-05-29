import { useContext } from "react";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { French, Lhr, Rhr, Rollup10, Rollup12, Rollup15, Rollup6, Rollup8, Sliding5, Sliding6 } from "./SpecificDoors";

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
