import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';

export const compactCottages = [
  {
    name: COMPONENT_NAMES.EXTERIOR_DOOR_1,
    position: {
      x: DIMENSIONS.DOOR.STEEL_DOOR.POSITION.x,
      y: DIMENSIONS.DOOR.STEEL_DOOR.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/front-view/ext-door-1-deck.svg`,
    sidebarImg: `${COMPONENT_TYPES.DOOR}/sidebar/ext-door-1.jpg`,
    desc: COMPONENT_NAMES.EXTERIOR_DOOR_1,
    objWidth: DIMENSIONS.DOOR.STEEL_DOOR.WIDTH,
    objHeight: DIMENSIONS.DOOR.STEEL_DOOR.HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 0,
    model: 'ext-door-1',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/ext-door-1.svg`,
  },
  
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));