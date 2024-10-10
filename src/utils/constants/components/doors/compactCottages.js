import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';

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
  },
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_2,
    position: {
      x: DIMENSIONS.DOOR.EXTERIOR_DOOR_2.POSITION.x,
      y: DIMENSIONS.DOOR.EXTERIOR_DOOR_2.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-2.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-2.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_2,
    objWidth: DIMENSIONS.DOOR.EXTERIOR_DOOR_2.WIDTH,
    objHeight: DIMENSIONS.DOOR.EXTERIOR_DOOR_2.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'ext-door-2',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-2.svg`,
  },
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_3,
    position: {
      x: DIMENSIONS.DOOR.EXTERIOR_DOOR_3.POSITION.x,
      y: DIMENSIONS.DOOR.EXTERIOR_DOOR_3.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-3.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-3.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_3,
    objWidth: DIMENSIONS.DOOR.EXTERIOR_DOOR_3.WIDTH,
    objHeight: DIMENSIONS.DOOR.EXTERIOR_DOOR_3.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'ext-door-3',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-3.svg`,
  },
  
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));