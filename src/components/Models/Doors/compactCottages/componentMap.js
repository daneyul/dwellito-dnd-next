import { COMPONENT_NAMES } from "@/utils/constants/names/names";
import specificDoors from "../SpecificDoors";

const CompactCottages = {
  [COMPONENT_NAMES.EXTERIOR_DOOR_1]: specificDoors.ExteriorDoor1,
    [COMPONENT_NAMES.EXTERIOR_DOOR_2]: specificDoors.ExteriorDoor2,
    [COMPONENT_NAMES.EXTERIOR_DOOR_3]: specificDoors.ExteriorDoor3,
};

export default CompactCottages;