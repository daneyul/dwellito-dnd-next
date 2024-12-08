import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SHED_12x24, SHED_12x32, SHED_16x24, SUPPLIER_SLUGS } from '../../names/names';

export const compactCottages = [
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_1,
    position: {
      x: DIMENSIONS.DOOR.EXTERIOR_DOOR_1.POSITION.x,
      y: DIMENSIONS.DOOR.EXTERIOR_DOOR_1.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-1.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-1.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_1,
    objWidth: DIMENSIONS.DOOR.EXTERIOR_DOOR_1.WIDTH,
    objHeight: DIMENSIONS.DOOR.EXTERIOR_DOOR_1.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'ext-door-1',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-1.svg`,
    includedIn: [SHED_12x24, SHED_12x32, SHED_16x24]
  },
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_12,
    position: {
      x: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_12.POSITION.x,
      y: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-2.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-2.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_12,
    objWidth: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_12.WIDTH,
    objHeight: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_12.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2800,
    model: 'ext-door-porch-12',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-2.svg`,
    includedIn: [SHED_12x24, SHED_12x32]
  },
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_16,
    position: {
      x: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_16.POSITION.x,
      y: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_16.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-2.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-2.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_PORCH_16,
    objWidth: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_16.WIDTH,
    objHeight: DIMENSIONS.DOOR.EXTERIOR_DOOR_PORCH_16.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2800,
    model: 'ext-door-porch-16',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-2.svg`,
    includedIn: [SHED_16x24]
  }
  
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));