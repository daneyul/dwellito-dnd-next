import { DIMENSIONS } from "../../dimensions/dimensions";
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from "../../names/names";

export const atAndS = [
  {
    name: COMPONENT_NAMES.LOUVER_VENT,
    position: {
      x: DIMENSIONS.VENT.LOUVER_VENT.POSITION.x,
      y: DIMENSIONS.VENT.LOUVER_VENT.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/front-view/louver-vent.svg`,
    sidebarImg: `${COMPONENT_TYPES.VENT}/sidebar/louver-vent.webp`,
    desc: '',
    objWidth: DIMENSIONS.VENT.LOUVER_VENT.WIDTH,
    objHeight: DIMENSIONS.VENT.LOUVER_VENT.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.LOUVER_VENT.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: 'louver-vent',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/louver-vent.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.VENT}/floor-plan/left/louver-vent.svg`,
  },
  {
    name: COMPONENT_NAMES.ALUMINUM_EXHAUST_SHUTTER,
    position: {
      x: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.POSITION.x,
      y: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/front-view/exhaust-shutter.svg`,
    sidebarImg: `${COMPONENT_TYPES.VENT}/sidebar/exhaust-shutter.webp`,
    desc: '',
    objWidth: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.WIDTH,
    objHeight: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: 'exhaust-shutter',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/exhaust-shutter.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.VENT}/floor-plan/left/exhaust-shutter.svg`,
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));