import { COMPONENT_NAMES, COMPONENT_TYPES } from "../names";

export const electricalComponents = [
  {
    name: COMPONENT_NAMES.AIR_CONDITIONER,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/ac.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/ac.svg`,
    desc: 'P203-1-101',
    objWidth: 16,
    objHeight: 23,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 975,
    model: 'airconditioner',
    fixed: true
  },
  {
    name: COMPONENT_NAMES.ROOF_VENT,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/roof-vent.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/roof-vent.svg`,
    desc: 'P203-1-309',
    objWidth: 12,
    objHeight: 12,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 670,
    model: 'roofvent',
    fixed: true
  },
  {
    name: COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/box-panel.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/box-panel.svg`,
    desc: 'P611-1-101',
    objWidth: 10,
    objHeight: 17,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 925,
    model: 'electricalpanel',
    fixed: true
  },
  {
    name: COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/box-panel.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/box-panel.svg`,
    desc: 'P611-1-102',
    objWidth: 10,
    objHeight: 17,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 1075,
    model: 'electricalpanel',
    fixed: true
  },
  {
    name: COMPONENT_NAMES.BASEBOARD_HEATER,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/baseboard-heater.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/baseboard-heater.svg`,
    desc: 'P655-1-01',
    objWidth: 50,
    objHeight: 3,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 450,
    model: 'electricalpanel',
  },
  {
    name: COMPONENT_NAMES.OUTLET,
    position: {
      x: 0,
      y: 0,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/outlet.svg`,
    floorPlanImg: `${COMPONENT_TYPES.ELECTRICAL}/floor-plan/outlet.svg`,
    desc: 'P604-1-1501',
    objWidth: 4,
    objHeight: 8,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 225,
    model: 'outlet',
  }
]