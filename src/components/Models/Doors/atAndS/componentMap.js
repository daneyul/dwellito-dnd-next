import { COMPONENT_NAMES } from "@/utils/constants/names/names";
import specificDoors from "../SpecificDoors";

const AtAndS = {
  [COMPONENT_NAMES.STEEL_DOOR]: specificDoors.SteelDoor,
  [COMPONENT_NAMES.VISION_LITE]: specificDoors.VisionLite,
  [COMPONENT_NAMES.ROLLUP_DOOR_7]: specificDoors.Rollup7,
  [COMPONENT_NAMES.ROLLUP_DOOR_8]: specificDoors.Rollup8,
  [COMPONENT_NAMES.GLASS_GARAGE_DOOR]: specificDoors.GlassGarage,
};

export default AtAndS;
