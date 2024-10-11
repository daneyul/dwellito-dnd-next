import { COMPONENT_NAMES } from "@/utils/constants/names/names";
import specificWindows from "../SpecificWindows";

const CompactCottages = {
  [COMPONENT_NAMES.WINDOW_24_24]: specificWindows.Window24x24,
  [COMPONENT_NAMES.WINDOW_30_36]: specificWindows.Window30x36,
  [COMPONENT_NAMES.WINDOW_48_24]: specificWindows.Window48x24,
  [COMPONENT_NAMES.WINDOW_48_48]: specificWindows.Window48x48,
  [COMPONENT_NAMES.WINDOW_48_60]: specificWindows.Window48x60,
  [COMPONENT_NAMES.WINDOW_60_48]: specificWindows.Window60x48,
}

export default CompactCottages;