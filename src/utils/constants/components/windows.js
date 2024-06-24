import { DIMENSIONS } from '../dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES } from '../names';

export const windowComponents = [
  {
    name: COMPONENT_NAMES.WINDOW_SECURITY,
    position: {
      x: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.x,
      y: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/window.svg`,
    desc: 'P201-1-01',
    objWidth: DIMENSIONS.WINDOW.WINDOW_SECURITY.WIDTH,
    objHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.WINDOW.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 1720,
    model: 'SM_Window 48x36_Hinged_Security_01',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/window.svg`,
  },
  {
    name: COMPONENT_NAMES.WINDOW,
    position: {
      x: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.x,
      y: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.WINDOW}/window-security.svg`,
    desc: 'P201-1-03',
    objWidth: DIMENSIONS.WINDOW.WINDOW_SECURITY.WIDTH,
    objHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY.FP_HEIGHT,
    objType: COMPONENT_TYPES.WINDOW,
    price: 1080,
    model: 'SM_Window_48x36_01_No_Security',
    floorPlanImg: `${COMPONENT_TYPES.WINDOW}/floor-plan/window-security.svg`,
  },
];
