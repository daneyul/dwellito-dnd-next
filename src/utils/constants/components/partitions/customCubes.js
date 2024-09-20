import { DIMENSIONS } from '../../dimensions/dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, SUPPLIER_SLUGS } from '../../names/names';
//only works with sheeting package - no door
//only works with plywood and drywall - door
export const customCubes = [
  {
    name: COMPONENT_NAMES.PARTITION_ST,
    position: {
      x: DIMENSIONS.PARTITION.ST.POSITION.x,
      y: DIMENSIONS.PARTITION.ST.POSITION.y,
    },
    desc: 'P207-1-217',
    objWidth: DIMENSIONS.PARTITION.ST.WIDTH,
    objHeight: DIMENSIONS.PARTITION.ST.HEIGHT,
    objFpHeight: DIMENSIONS.PARTITION.ST.FP_HEIGHT,
    objType: COMPONENT_TYPES.PARTITION,
    price: 1190,
    model: '',
    imgName: `${COMPONENT_TYPES.PARTITION}/partition.svg`,
    floorPlanImg: `${COMPONENT_TYPES.PARTITION}/partition.svg`,
    highContainerOnly: false,
  },
  {
    name: COMPONENT_NAMES.PARTITION_HC,
    position: {
      x: DIMENSIONS.PARTITION.HC.POSITION.x,
      y: DIMENSIONS.PARTITION.HC.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.PARTITION}/partition.svg`,
    floorPlanImg: `${COMPONENT_TYPES.PARTITION}/partition.svg`,
    desc: 'P207-1-207',
    objWidth: DIMENSIONS.PARTITION.HC.WIDTH,
    objHeight: DIMENSIONS.PARTITION.HC.HEIGHT,
    objFpHeight: DIMENSIONS.PARTITION.HC.FP_HEIGHT,
    objType: COMPONENT_TYPES.PARTITION,
    price: 1190,
    model: '',
    highContainerOnly: true
  },
  {
    name: COMPONENT_NAMES.PARTITION_DOOR,
    price: 2465,
    desc: 'P202-4-05',
    position: {
      x: DIMENSIONS.PARTITION.DOOR.POSITION.x,
      y: DIMENSIONS.PARTITION.DOOR.POSITION.y,
    },
    objWidth: DIMENSIONS.PARTITION.DOOR.WIDTH,
    objHeight: DIMENSIONS.PARTITION.DOOR.HEIGHT,
    objFpHeight: DIMENSIONS.PARTITION.DOOR.FP_HEIGHT,
    objType: COMPONENT_TYPES.PARTITION,
    model: '',
    highContainerOnly: false,
    imgName: `${COMPONENT_TYPES.PARTITION}/partition-door.svg`,
    floorPlanImg: `${COMPONENT_TYPES.PARTITION}/partition-door.svg`,
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES, moveableInFloorPlan: true }));
