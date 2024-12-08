import { COMPONENT_NAMES } from "@/utils/constants/names/names";
import specificDoors from "../SpecificDoors";

const CompactCottages = {
  [COMPONENT_NAMES.EXTERIOR_DOOR_1]: specificDoors.ExteriorDoor1,
    [COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_12]: specificDoors.ExteriorDoorPorch12,
    [COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_16]: specificDoors.ExteriorDoorPorch16
};

export default CompactCottages;