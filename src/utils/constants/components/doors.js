import { DIMENSIONS } from '../dimensions';
import { COMPONENT_NAMES, COMPONENT_TYPES } from '../names';

export const doorComponents = [
  {
    name: COMPONENT_NAMES.PERSONNEL_LHR,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/lhr.svg`,
    desc: 'P202-1-101',
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: 'LHR Personnel Door',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/lhr.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_LHR_GLASS,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/lhr-glass.svg`,
    desc: 'P202-1-101',
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: 'LHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/lhr.svg`,
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
    price: 2000,
    model: 'LHR Personnel Door Hardware and Lock Box 36in x 80in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/lhr-security.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_LHR_SECURITY_GLASS,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/lhr-security-glass.svg`,
    desc: 'P202-1-101',
    objWidth: DIMENSIONS.DOOR.PERSONNEL_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model:
      'LHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/lhr.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_RHR,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rhr.svg`,
    desc: 'P202-1-203',
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: 'RHR Personnel Door',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rhr.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_RHR_GLASS,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rhr-glass.svg`,
    desc: 'P202-1-203',
    objWidth: DIMENSIONS.DOOR.PERSONNEL.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: 'RHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rhr.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_RHR_SECURITY,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rhr-security.svg`,
    desc: 'P202-1-203',
    objWidth: DIMENSIONS.DOOR.PERSONNEL_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model: 'RHR Personnel Door Hardware and Lock Box 36in x 80in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rhr-security.svg`,
  },
  {
    name: COMPONENT_NAMES.PERSONNEL_RHR_SECURITY_GLASS,
    position: {
      x: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.x,
      y: DIMENSIONS.DOOR.PERSONNEL_SECURITY.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/rhr-security-glass.svg`,
    desc: 'P202-1-203',
    objWidth: DIMENSIONS.DOOR.PERSONNEL_SECURITY.WIDTH,
    objHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.PERSONNEL_SECURITY.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2000,
    model:
      'RHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rhr-security.svg`,
  },
  {
    name: COMPONENT_NAMES.SLIDING_GLASS_6,
    position: {
      x: DIMENSIONS.DOOR.SLIDING_SIX.POSITION.x,
      y: DIMENSIONS.DOOR.SLIDING_SIX.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/sliding-6.svg`,
    desc: 'P202-1-301',
    objWidth: DIMENSIONS.DOOR.SLIDING_SIX.WIDTH,
    objHeight: DIMENSIONS.DOOR.SLIDING_SIX.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.SLIDING_SIX.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3025,
    model: 'SM_Wide_Sliding_Glass_Door_6feet',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/sliding.svg`,
  },
  {
    name: COMPONENT_NAMES.DOUBLE_DOOR,
    position: {
      x: DIMENSIONS.DOOR.DOUBLE.POSITION.x,
      y: DIMENSIONS.DOOR.DOUBLE.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/double.svg`,
    desc: 'P202-1-203',
    objWidth: DIMENSIONS.DOOR.DOUBLE.WIDTH,
    objHeight: DIMENSIONS.DOOR.DOUBLE.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.DOUBLE.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3895,
    model: 'P202-1-503_6ft_6ft8in_Height_French Door White_and_Black Frame',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/double.svg`,
  },
  {
    name: COMPONENT_NAMES.HD_HC_ROLL_UP_6,
    position: {
      x: DIMENSIONS.DOOR.HD_HC_ROLL_UP_6.POSITION.x,
      y: DIMENSIONS.DOOR.HD_HC_ROLL_UP_6.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-hc-rollup-6.svg`,
    desc: COMPONENT_NAMES.HD_HC_ROLL_UP_6,
    objWidth: DIMENSIONS.DOOR.HD_HC_ROLL_UP_6.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_6.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_6.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2925,
    model: 'Heavy Duty Roll Up Door 72in x 88in - 80in x 104in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-6.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: true,
  },
  {
    name: COMPONENT_NAMES.HD_HC_ROLL_UP_8,
    position: {
      x: DIMENSIONS.DOOR.HD_HC_ROLL_UP_8.POSITION.x,
      y: DIMENSIONS.DOOR.HD_HC_ROLL_UP_8.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-hc-rollup-8.svg`,
    desc: COMPONENT_NAMES.HD_HC_ROLL_UP_8,
    objWidth: DIMENSIONS.DOOR.HD_HC_ROLL_UP_8.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_8.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_8.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3280,
    model: 'Heavy Duty Roll Up Door 96in x 88in - 104in x 104in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-8.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_HC_ROLL_UP_10,
    position: {
      x: DIMENSIONS.DOOR.HD_HC_ROLL_UP_10.POSITION.x,
      y: DIMENSIONS.DOOR.HD_HC_ROLL_UP_10.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-hc-rollup-10.svg`,
    desc: COMPONENT_NAMES.HD_HC_ROLL_UP_10,
    objWidth: DIMENSIONS.DOOR.HD_HC_ROLL_UP_10.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_10.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_10.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3590,
    model: 'Heavy Duty Roll Up Door 120in x 88in - 128in x 104in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-10.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_HC_ROLL_UP_12,
    position: {
      x: DIMENSIONS.DOOR.HD_HC_ROLL_UP_12.POSITION.x,
      y: DIMENSIONS.DOOR.HD_HC_ROLL_UP_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-hc-rollup-12.svg`,
    desc: COMPONENT_NAMES.HD_HC_ROLL_UP_12,
    objWidth: DIMENSIONS.DOOR.HD_HC_ROLL_UP_12.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_12.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_12.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3895,
    model: 'Heavy Duty Roll Up Door 144in x 88in - 152in x 104in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-12.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_HC_ROLL_UP_15,
    position: {
      x: DIMENSIONS.DOOR.HD_HC_ROLL_UP_15.POSITION.x,
      y: DIMENSIONS.DOOR.HD_HC_ROLL_UP_15.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-hc-rollup-15.svg`,
    desc: COMPONENT_NAMES.HD_HC_ROLL_UP_15,
    objWidth: DIMENSIONS.DOOR.HD_HC_ROLL_UP_15.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_15.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_HC_ROLL_UP_15.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 4615,
    model: 'Heavy Duty Roll Up Door 180in x 88in - 188in x 104in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-15.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_ST_ROLL_UP_6,
    position: {
      x: DIMENSIONS.DOOR.HD_ST_ROLL_UP_6.POSITION.x,
      y: DIMENSIONS.DOOR.HD_ST_ROLL_UP_6.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-st-rollup-6.svg`,
    desc: COMPONENT_NAMES.HD_ST_ROLL_UP_6,
    objWidth: DIMENSIONS.DOOR.HD_ST_ROLL_UP_6.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_6.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_6.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2925,
    model: 'Heavy Duty Roll Up Door 72in x 76in - 80in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-6.svg`,
    highContainerOnly: false,
    isRollUp: true,
    isHeavyDuty: true,
  },
  {
    name: COMPONENT_NAMES.HD_ST_ROLL_UP_8,
    position: {
      x: DIMENSIONS.DOOR.HD_ST_ROLL_UP_8.POSITION.x,
      y: DIMENSIONS.DOOR.HD_ST_ROLL_UP_8.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-st-rollup-8.svg`,
    desc: COMPONENT_NAMES.HD_ST_ROLL_UP_8,
    objWidth: DIMENSIONS.DOOR.HD_ST_ROLL_UP_8.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_8.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_8.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3280,
    model: 'Heavy Duty Roll Up Door 96in x 76in - 104in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-8.svg`,
    highContainerOnly: false,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_ST_ROLL_UP_10,
    position: {
      x: DIMENSIONS.DOOR.HD_ST_ROLL_UP_10.POSITION.x,
      y: DIMENSIONS.DOOR.HD_ST_ROLL_UP_10.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-st-rollup-10.svg`,
    desc: COMPONENT_NAMES.HD_ST_ROLL_UP_10,
    objWidth: DIMENSIONS.DOOR.HD_ST_ROLL_UP_10.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_10.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_10.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3590,
    model: 'Heavy Duty Roll Up Door 120in x 76in - 128in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-10.svg`,
    highContainerOnly: false,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_ST_ROLL_UP_12,
    position: {
      x: DIMENSIONS.DOOR.HD_ST_ROLL_UP_12.POSITION.x,
      y: DIMENSIONS.DOOR.HD_ST_ROLL_UP_12.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-st-rollup-12.svg`,
    desc: COMPONENT_NAMES.HD_ST_ROLL_UP_12,
    objWidth: DIMENSIONS.DOOR.HD_ST_ROLL_UP_12.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_12.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_12.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3895,
    model: 'Heavy Duty Roll Up Door 144in x 76in - 152in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-12.svg`,
    highContainerOnly: false,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.HD_ST_ROLL_UP_15,
    position: {
      x: DIMENSIONS.DOOR.HD_ST_ROLL_UP_15.POSITION.x,
      y: DIMENSIONS.DOOR.HD_ST_ROLL_UP_15.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/hd-st-rollup-15.svg`,
    desc: COMPONENT_NAMES.HD_ST_ROLL_UP_15,
    objWidth: DIMENSIONS.DOOR.HD_ST_ROLL_UP_15.WIDTH,
    objHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_15.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.HD_ST_ROLL_UP_15.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 4615,
    model: 'Heavy Duty Roll Up Door 180in x 76in - 188in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-15.svg`,
    highContainerOnly: false,
    isRollUp: true,
    isHeavyDuty: true
  },
  {
    name: COMPONENT_NAMES.EC_HC_ROLLUP_6_74,
    position: {
      x: DIMENSIONS.DOOR.EC_HC_ROLLUP_6_74.POSITION.x,
      y: DIMENSIONS.DOOR.EC_HC_ROLLUP_6_74.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-hc-rollup-6-7_4.svg`,
    desc: COMPONENT_NAMES.EC_HC_ROLLUP_6_74,
    objWidth: DIMENSIONS.DOOR.EC_HC_ROLLUP_6_74.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_6_74.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_6_74.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2625,
    model: 'Economy_Rollup_Door - 6ft - 72in x 88in - 76in x 90in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-6.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_HC_ROLLUP_8_74,
    position: {
      x: DIMENSIONS.DOOR.EC_HC_ROLLUP_8_74.POSITION.x,
      y: DIMENSIONS.DOOR.EC_HC_ROLLUP_8_74.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-hc-rollup-8-7_4.svg`,
    desc: COMPONENT_NAMES.EC_HC_ROLLUP_8_74,
    objWidth: DIMENSIONS.DOOR.EC_HC_ROLLUP_8_74.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_8_74.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_8_74.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2775,
    model: 'Economy_Rollup_Door - 8ft - 96in x 88in - 100in x 90in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-8.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_HC_ROLLUP_10_74,
    position: {
      x: DIMENSIONS.DOOR.EC_HC_ROLLUP_10_74.POSITION.x,
      y: DIMENSIONS.DOOR.EC_HC_ROLLUP_10_74.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-hc-rollup-10-7_4.svg`,
    desc: COMPONENT_NAMES.EC_HC_ROLLUP_10_74,
    objWidth: DIMENSIONS.DOOR.EC_HC_ROLLUP_10_74.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_10_74.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_10_74.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3100,
    model: 'Economy_Rollup_Door - 10ft - 120in x 88in - 124in x 90in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-10.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_HC_ROLLUP_12_74,
    position: {
      x: DIMENSIONS.DOOR.EC_HC_ROLLUP_12_74.POSITION.x,
      y: DIMENSIONS.DOOR.EC_HC_ROLLUP_12_74.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-hc-rollup-12-7_4.svg`,
    desc: COMPONENT_NAMES.EC_HC_ROLLUP_12_74,
    objWidth: DIMENSIONS.DOOR.EC_HC_ROLLUP_12_74.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_12_74.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_12_74.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3450,
    model: 'Economy_Rollup_Door - 12ft - 144in x 88in - 148 x 90in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-12.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_HC_ROLLUP_15_74,
    position: {
      x: DIMENSIONS.DOOR.EC_HC_ROLLUP_15_74.POSITION.x,
      y: DIMENSIONS.DOOR.EC_HC_ROLLUP_15_74.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-hc-rollup-15-7_4.svg`,
    desc: COMPONENT_NAMES.EC_HC_ROLLUP_15_74,
    objWidth: DIMENSIONS.DOOR.EC_HC_ROLLUP_15_74.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_15_74.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_HC_ROLLUP_15_74.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3925,
    model: 'Economy_Rollup_Door - 15ft - 180in x 88in - 184in x 90in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-15.svg`,
    highContainerOnly: true,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_ST_ROLLUP_6_64,
    position: {
      x: DIMENSIONS.DOOR.EC_ST_ROLLUP_6_64.POSITION.x,
      y: DIMENSIONS.DOOR.EC_ST_ROLLUP_6_64.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-st-rollup-6-6_4.svg`,
    desc: COMPONENT_NAMES.EC_ST_ROLLUP_6_64,
    objWidth: DIMENSIONS.DOOR.EC_ST_ROLLUP_6_64.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_6_64.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_6_64.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2625,
    model: 'Economy_Rollup_Door - 6ft - 72in x 76in - 76in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-6.svg`,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_ST_ROLLUP_8_64,
    position: {
      x: DIMENSIONS.DOOR.EC_ST_ROLLUP_8_64.POSITION.x,
      y: DIMENSIONS.DOOR.EC_ST_ROLLUP_8_64.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-st-rollup-8-6_4.svg`,
    desc: COMPONENT_NAMES.EC_ST_ROLLUP_8_64,
    objWidth: DIMENSIONS.DOOR.EC_ST_ROLLUP_8_64.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_8_64.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_8_64.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 2775,
    model: 'Economy_Rollup_Door - 8ft - 80in x 76in - 84in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-8.svg`,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_ST_ROLLUP_10_64,
    position: {
      x: DIMENSIONS.DOOR.EC_ST_ROLLUP_10_64.POSITION.x,
      y: DIMENSIONS.DOOR.EC_ST_ROLLUP_10_64.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-st-rollup-10-6_4.svg`,
    desc: COMPONENT_NAMES.EC_ST_ROLLUP_10_64,
    objWidth: DIMENSIONS.DOOR.EC_ST_ROLLUP_10_64.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_10_64.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_10_64.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3100,
    model: 'Economy_Rollup_Door - 10ft ST - 120in x 76in - 124in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-10.svg`,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_ST_ROLLUP_12_64,
    position: {
      x: DIMENSIONS.DOOR.EC_ST_ROLLUP_12_64.POSITION.x,
      y: DIMENSIONS.DOOR.EC_ST_ROLLUP_12_64.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-st-rollup-12-6_4.svg`,
    desc: COMPONENT_NAMES.EC_ST_ROLLUP_12_64,
    objWidth: DIMENSIONS.DOOR.EC_ST_ROLLUP_12_64.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_12_64.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_12_64.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3450,
    model: 'Economy_Rollup_Door - 12ft - 144in x 76in - 148in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-12.svg`,
    isRollUp: true,
    isHeavyDuty: false
  },
  {
    name: COMPONENT_NAMES.EC_ST_ROLLUP_15_64,
    position: {
      x: DIMENSIONS.DOOR.EC_ST_ROLLUP_15_64.POSITION.x,
      y: DIMENSIONS.DOOR.EC_ST_ROLLUP_15_64.POSITION.y,
    },
    imgName: `${COMPONENT_TYPES.DOOR}/ec-st-rollup-15-6_4.svg`,
    desc: COMPONENT_NAMES.EC_ST_ROLLUP_15_64,
    objWidth: DIMENSIONS.DOOR.EC_ST_ROLLUP_15_64.WIDTH,
    objHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_15_64.HEIGHT,
    objFpHeight: DIMENSIONS.DOOR.EC_ST_ROLLUP_15_64.FP_HEIGHT,
    objType: COMPONENT_TYPES.DOOR,
    price: 3925,
    model: 'Economy_Rollup_Door - 15ft - 180in x 76in - 184in x 78in',
    floorPlanImg: `${COMPONENT_TYPES.DOOR}/floor-plan/rollup-15.svg`,
    isRollUp: true,
    isHeavyDuty: false
  },
];
