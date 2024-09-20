import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';

export const atAndS = [
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
    name: COMPONENT_NAMES.ROLLUP_DOOR_7,
    position: {
      x: DIMENSIONS.DOOR.ROLLUP_DOOR_7.POSITION.x,
      y: DIMENSIONS.DOOR.ROLLUP_DOOR_7.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rollup-door-7.svg`,
    desc: COMPONENT_NAMES.ROLLUP_DOOR_7,
    objWidth: DIMENSIONS.DOOR.ROLLUP_DOOR_7.WIDTH,
    objHeight: DIMENSIONS.DOOR.ROLLUP_DOOR_7.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'rollup-door-7',
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.ROLLUP_DOOR_8,
    position: {
      x: DIMENSIONS.DOOR.ROLLUP_DOOR_8.POSITION.x,
      y: DIMENSIONS.DOOR.ROLLUP_DOOR_8.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rollup-door-8.svg`,
    desc: COMPONENT_NAMES.ROLLUP_DOOR_8,
    objWidth: DIMENSIONS.DOOR.ROLLUP_DOOR_8.WIDTH,
    objHeight: DIMENSIONS.DOOR.ROLLUP_DOOR_8.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'rollup-door-8',
    isRollUp: true,
    isHeavyDuty: false,
    highContainerOnly: true
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
