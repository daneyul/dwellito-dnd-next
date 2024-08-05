import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT,
    position: {
      x: 20,
      y: 20,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/adjustable-swivel-flood-light.svg`,
    desc: 'P201-1-01',
    objWidth: 24,
    objHeight: 24,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'adjustable-swivel-flood-light'
  },
  {
    name: COMPONENT_NAMES.AIR_CONDITIONER,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'airconditioner',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [
      ELEVATION_NAMES.BACK,
      ELEVATION_NAMES.LEFT,
      ELEVATION_NAMES.RIGHT,
    ],
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
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: '',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [],
  },
  {
    name: COMPONENT_NAMES.EMERGENCY_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: '',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [],
  },
  {
    name: COMPONENT_NAMES.MODERN_FARMHOUSE_OUTDOOR_WALL_SCONCE,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: '',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [],
  },
  {
    name: COMPONENT_NAMES.SECURITY_FLOOD_LIGHT,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: '',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: '',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [],
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
