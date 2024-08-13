import { DIMENSIONS } from "../../dimensions/dimensions";
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from "../../names/names";

export const atAndS = [
  {
    name: COMPONENT_NAMES.LOUVER_VENT,
    position: {
      x: DIMENSIONS.VENT.SQ_12.POSITION.x,
      y: DIMENSIONS.VENT.SQ_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/louver-vent.svg`,
    desc: '',
    objWidth: DIMENSIONS.VENT.SQ_12.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_12.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.SQ_12.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: 'louver-vent',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/louver-vent.svg`,
  },
  {
    name: COMPONENT_NAMES.ALUMINUM_EXHAUST_SHUTTER,
    position: {
      x: DIMENSIONS.VENT.SQ_24.POSITION.x,
      y: DIMENSIONS.VENT.SQ_24.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/24X24.svg`,
    desc: '',
    objWidth: DIMENSIONS.VENT.SQ_24.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_24.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.SQ_24.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 0,
    model: '',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/24X24.svg`,
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));