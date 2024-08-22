import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.GLIDING_PATIO,
    position: {
      x: DIMENSIONS.DOOR.GLIDING_PATIO.POSITION.x,
      y: DIMENSIONS.DOOR.GLIDING_PATIO.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/gliding-patio.svg`,
    desc: COMPONENT_NAMES.GLIDING_PATIO,
    objWidth: DIMENSIONS.DOOR.GLIDING_PATIO.WIDTH,
    objHeight: DIMENSIONS.DOOR.GLIDING_PATIO.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'gliding-patio-door',
    isRollUp: false,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.STEEL_DOOR,
    position: {
      x: DIMENSIONS.DOOR.STEEL_DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.STEEL_DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/steel-door.svg`,
    desc: COMPONENT_NAMES.STEEL_DOOR,
    objWidth: DIMENSIONS.DOOR.STEEL_DOOR.WIDTH,
    objHeight: DIMENSIONS.DOOR.STEEL_DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'steel-door',
    isRollUp: false,
    isHeavyDuty: false,
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/steel-door.svg`,
  },
  {
    name: COMPONENT_NAMES.VISION_LITE,
    position: {
      x: DIMENSIONS.DOOR.VISION_LITE.POSITION.x,
      y: DIMENSIONS.DOOR.VISION_LITE.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/vision-lite.svg`,
    desc: COMPONENT_NAMES.VISION_LITE,
    objWidth: DIMENSIONS.DOOR.VISION_LITE.WIDTH,
    objHeight: DIMENSIONS.DOOR.VISION_LITE.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'vision-lite',
    isRollUp: false,
    isHeavyDuty: false,
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/vision-lite.svg`,
  },
  {
    name: COMPONENT_NAMES.ROLLUP_DOOR_WHITE,
    position: {
      x: DIMENSIONS.DOOR.ROLLUP_DOOR_WHITE.POSITION.x,
      y: DIMENSIONS.DOOR.ROLLUP_DOOR_WHITE.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rollup-door.svg`,
    desc: COMPONENT_NAMES.ROLLUP_DOOR_WHITE,
    objWidth: DIMENSIONS.DOOR.ROLLUP_DOOR_WHITE.WIDTH,
    objHeight: DIMENSIONS.DOOR.ROLLUP_DOOR_WHITE.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'rollup-door',
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.GLASS_GARAGE_DOOR,
    position: {
      x: DIMENSIONS.DOOR.GLASS_GARAGE_DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.GLASS_GARAGE_DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/glass-garage.svg`,
    desc: COMPONENT_NAMES.GLASS_GARAGE_DOOR,
    objWidth: DIMENSIONS.DOOR.GLASS_GARAGE_DOOR.WIDTH,
    objHeight: DIMENSIONS.DOOR.GLASS_GARAGE_DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'glass-garage',
    isRollUp: true,
    isHeavyDuty: false,
    highContainerOnly: true
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
