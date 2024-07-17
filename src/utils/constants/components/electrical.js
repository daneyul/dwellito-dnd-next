import { COMPONENT_NAMES, COMPONENT_TYPES, DROPPABLE_BACK, DROPPABLE_LEFT, DROPPABLE_RIGHT, ELEVATION_NAMES } from '../names';

export const electricalComponents = [
  {
    name: COMPONENT_NAMES.AIR_CONDITIONER,
    position: {
      x: 105,
      y: 40,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/ac.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: 'P203-1-101',
    objWidth: 16,
    objHeight: 23,
    objThickness: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 975,
    model: 'airconditioner',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [ELEVATION_NAMES.BACK, ELEVATION_NAMES.LEFT, ELEVATION_NAMES.RIGHT]
  },
  {
    name: COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP,
    position: {
      x: 7,
      y: 90,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/box-panel.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/box-panel.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/box-panel.svg`,
    desc: 'P611-1-101',
    objWidth: 10,
    objHeight: 17,
    objThickness: 5,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 925,
    model: 'electricalpanel',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [ELEVATION_NAMES.BACK, ELEVATION_NAMES.LEFT, ELEVATION_NAMES.RIGHT]
  },
  {
    name: COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP,
    position: {
      x: 7,
      y: 90,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/box-panel.svg`,
    sideImg: `${COMPONENT_TYPES.ELECTRICAL}/side-view/box-panel.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/box-panel.svg`,
    desc: 'P611-1-102',
    objWidth: 10,
    objHeight: 17,
    objThickness: 5,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'electricalpanel',
    fixed: true,
    fixedSide: ELEVATION_NAMES.BACK,
    alwaysShowOn: [ELEVATION_NAMES.BACK, ELEVATION_NAMES.LEFT, ELEVATION_NAMES.RIGHT]
  },
  {
    name: COMPONENT_NAMES.BASEBOARD_HEATER,
    position: {
      x: 0,
      y: 0,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/baseboard-heater.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/baseboard-heater.svg`,
    desc: 'P655-1-01',
    objWidth: 50,
    objHeight: 3,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 450,
    model: 'heater',
    fixed: false,
    rotate: 0,
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
    price: 225,
    model: 'outlet',
    fixed: false,
    rotate: 0,
  },
  {
    name: COMPONENT_NAMES.EXHAUST_FAN,
    position: {
      x: 0,
      y: 42,
    },
    frontImg: `${COMPONENT_TYPES.ELECTRICAL}/front-view/exhaust-fan.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/exhaust-fan.svg`,
    desc: 'P203-1-307',
    objWidth: 17,
    objHeight: 19,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1540,
    model: 'fan',
    fixed: true,
    fixedSide: ELEVATION_NAMES.RIGHT,
    alwaysShowOn: [ELEVATION_NAMES.RIGHT]
  },
  {
    name: COMPONENT_NAMES.WRAP_LIGHT,
    position: {
      x: 18,
      y: 0,
    },
    floorPlanImg: {
      TEN: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/10/wrap-light-dash.svg`,
      TWENTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/20/wrap-light-dash.svg`,
      FORTY: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/40/wrap-light-dash.svg`
    },
    sidebarImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/wrap-light.svg`,
    desc: "P602-1-01",
    objWidth: {
      TEN: 50,
      TWENTY: 170,
      FORTY: 375
    },
    objHeight: 6,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 375,
    model: '',
    fixed: true,
    ceilingOnly: true
  }
];
