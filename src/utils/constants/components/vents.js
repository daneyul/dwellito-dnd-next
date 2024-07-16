import { DIMENSIONS } from '../dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES, ELEVATION_NAMES } from '../names';

export const ventComponents = [
  {
    name: COMPONENT_NAMES.VENT_12,
    position: {
      x: DIMENSIONS.VENT.SQ_12.POSITION.x,
      y: DIMENSIONS.VENT.SQ_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/12x12.svg`,
    desc: 'P203-1-301',
    objWidth: DIMENSIONS.VENT.SQ_12.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_12.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.SQ_12.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 440,
    model: 'P203-1-304_12in_x_12in Aluminum Fixed Louver 16ga Bolt on Frame',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/12x12.svg`,
  },
  {
    name: COMPONENT_NAMES.VENT_20,
    position: {
      x: DIMENSIONS.VENT.SQ_20.POSITION.x,
      y: DIMENSIONS.VENT.SQ_20.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/20x20.svg`,
    desc: 'P203-1-302',
    objWidth: DIMENSIONS.VENT.SQ_20.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_20.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.SQ_20.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 490,
    model: 'P203-1-305_20in_x_20in Aluminum Fixed Louver 16ga Bolt on Frame',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/20x20.svg`,
  },
  {
    name: COMPONENT_NAMES.VENT_24,
    position: {
      x: DIMENSIONS.VENT.SQ_24.POSITION.x,
      y: DIMENSIONS.VENT.SQ_24.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.VENT}/24x24.svg`,
    desc: 'P203-1-303',
    objWidth: DIMENSIONS.VENT.SQ_24.WIDTH,
    objHeight: DIMENSIONS.VENT.SQ_24.HEIGHT,
    objFpHeight: DIMENSIONS.VENT.SQ_24.FP_HEIGHT,
    objType: COMPONENT_TYPES.VENT,
    price: 540,
    model: 'P203-1-306_24in_x_24in Aluminum Fixed Louver 16ga Bolt on Frame',
    floorPlanImg: `${COMPONENT_TYPES.VENT}/floor-plan/24x24.svg`,
  },
  {
    name: COMPONENT_NAMES.ROOF_VENT,
    position: {
      x: 18,
      y: 0,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/roof-vent.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/roof-vent-dash.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/roof-vent.svg`,
    desc: 'P203-1-309',
    objWidth: 12,
    objHeight: 12,
    objType: COMPONENT_TYPES.VENT,
    price: 670,
    model: 'roofvent',
    fixed: true,
    ceilingOnly: true,
    alwaysShowOn: [ELEVATION_NAMES.BACK, ELEVATION_NAMES.LEFT, ELEVATION_NAMES.RIGHT]
  },
];
