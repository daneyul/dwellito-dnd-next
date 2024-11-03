import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT,
    desc: COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT,
    position: {
      x: 20,
      y: 20,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/swivel-floodlight.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/swivel-floodlight.jpg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/swivel-floodlight.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/swivel-floodlight.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/left/swivel-floodlight.svg`,
    objWidth: 6,
    objHeight: 13,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'swivel-floodlight',
    fixed: false,
    isExteriorLight: true,
  },
  {
    name: COMPONENT_NAMES.AIR_CONDITIONER,
    desc: COMPONENT_NAMES.AIR_CONDITIONER,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/ac.webp`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/left/ac.svg`,
    objWidth: 26,
    objHeight: 16,
    objThickness: 21,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'airconditioner',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE,
    desc: COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE,
    position: {
      x: 18,
      y: 0,
    },
    floorPlanImg: {
      TEN: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/10/wrap-light-dash.svg`,
      TWENTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/20/wrap-light-dash.svg`,
      FORTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/40/wrap-light-dash.svg`,
    },
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/wrap-light.webp`,
    objWidth: {
      TEN: 50,
      TWENTY: 170,
      FORTY: 375,
    },
    objHeight: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: '',
    fixed: true,
    ceilingOnly: true,
    isWrapLight: true
  },
  {
    name: COMPONENT_NAMES.CAN_LIGHT_FIXTURE,
    desc: COMPONENT_NAMES.CAN_LIGHT_FIXTURE,
    position: {
      x: 18,
      y: 0,
    },
    floorPlanImg: {
      TEN: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/10/can-light-dash.svg`,
      TWENTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/20/can-light-dash.svg`,
      FORTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/40/can-light-dash.svg`,
    },
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/can-light.webp`,
    objWidth: {
      TEN: 50,
      TWENTY: 170,
      FORTY: 403,
    },
    objHeight: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: '',
    fixed: true,
    ceilingOnly: true,
    isCanLight: true
  },
  {
    name: COMPONENT_NAMES.EMERGENCY_LIGHT,
    desc: COMPONENT_NAMES.EMERGENCY_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/emergency-light.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/emergency-light.webp`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/emergency-light.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/left/emergency-light.svg`,
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'emergency-light',
    fixed: false,
    isExteriorLight: true,
  },
  {
    name: COMPONENT_NAMES.SECURITY_FLOOD_LIGHT,
    desc: COMPONENT_NAMES.SECURITY_FLOOD_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/security-floodlight.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/security-floodlight.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/security-floodlight.svg`,
    floorPlanLeftImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/left/security-floodlight.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/sidebar/security-floodlight.jpg`,
    objWidth: 9,
    objHeight: 5,
    objThickness: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'security-floodlight',
    fixed: false,
    isExteriorLight: true,
  }
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
