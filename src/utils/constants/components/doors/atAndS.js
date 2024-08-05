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
    name: COMPONENT_NAMES.PERSONNEL_LHR_SECURITY,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/lhr-security.svg`,
    desc: 'P202-1-101',
    objWidth: DIMENSIONS.DOOR.PERSONNEL_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2200,
    model: 'LHR Personnel Door Hardware and Lock Box 36in x 80in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/lhr-security.svg`,
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
