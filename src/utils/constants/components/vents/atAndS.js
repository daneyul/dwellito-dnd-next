import { DIMENSIONS } from "../../dimensions/dimensions";
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from "../../names/names";

export const atAndS = [
  {
    name: COMPONENT_NAMES.LOUVER_VENT,
    position: {
      x: DIMENSIONS.VENT.LOUVER_VENT.POSITION.x,
      y: DIMENSIONS.VENT.LOUVER_VENT.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/louver-vent.svg`,
    desc: '',
    objWidth: DIMENSIONS.VENT.LOUVER_VENT.WIDTH,
    objHeight: DIMENSIONS.VENT.LOUVER_VENT.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.LOUVER_VENT.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: 'louver-vent',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/louver-vent.svg`,
  },
  {
    name: COMPONENT_NAMES.ALUMINUM_EXHAUST_SHUTTER,
    position: {
      x: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.POSITION.x,
      y: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/exhaust-shutter.svg`,
    desc: '',
    objWidth: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.WIDTH,
    objHeight: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.ALUMINUM_EXHAUST_SHUTTER.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: 'exhaust-shutter',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/exhaust-shutter.svg`,
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));