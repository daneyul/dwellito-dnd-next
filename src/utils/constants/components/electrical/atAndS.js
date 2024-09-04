import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT,
    position: {
      x: 20,
      y: 20,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/swivel-floodlight.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/swivel-floodlight.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/swivel-floodlight.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/swivel-floodlight.svg`,
    desc: '',
    objWidth: 6,
    objHeight: 13,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'swivel-floodlight',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.AIR_CONDITIONER,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 23,
    objHeight: 16,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'airconditioner',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE,
    position: {
      x: 18,
      y: 0,
    },
    floorPlanImg: {
      TEN: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/10/wrap-light-dash.svg`,
      TWENTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/20/wrap-light-dash.svg`,
      FORTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/40/wrap-light-dash.svg`,
    },
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/wrap-light.svg`,
    desc: '',
    objWidth: {
      TEN: 50,
      TWENTY: 170,
      FORTY: 375,
    },
    objHeight: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 375,
    model: '',
    fixed: true,
    ceilingOnly: true,
  },
  {
    name: COMPONENT_NAMES.INDOOR_OUTDOOR_FAN,
    position: {
      x: 105,
      y: 40,
    },
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/indoor-outdoor-fan.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'indoor-outdoor-fan',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.EMERGENCY_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/emergency-light.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/emergency-light.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/emergency-light.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'emergency-light',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.MODERN_FARMHOUSE_OUTDOOR_WALL_SCONCE,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/farmhouse-sconce.svg`,
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/farmhouse-sconce.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/farmhouse-sconce.svg`,
    desc: '',
    objWidth: 14,
    objHeight: 14,
    objThickness: 21,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'farmhouse-sconce',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.SECURITY_FLOOD_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/security-floodlight.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/security-floodlight.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/security-floodlight.svg`,
    desc: '',
    objWidth: 9,
    objHeight: 5,
    objThickness: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'security-floodlight',
    fixed: false,
  },
  {
    name: COMPONENT_NAMES.OUTLET,
    position: {
      x: 30,
      y: 30,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/outlet.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/outlet.svg`,
    desc: 'P604-1-1501',
    objWidth: 4,
    objHeight: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 325,
    model: 'outlet',
    fixed: false,
    rotate: 0,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
