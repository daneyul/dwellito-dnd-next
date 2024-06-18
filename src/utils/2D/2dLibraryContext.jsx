import React, { createContext } from 'react';
import { v4 as uuid } from 'uuid';
import { createSnapModifier } from '@dnd-kit/modifiers';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  ELEVATION_NAMES,
} from '../constants';

export const Library2dDataContext = createContext();

export const Library2dDataProvider = ({ children }) => {
  // This is the actual container dimensions in inches
  // THREE_D is the 3D model dimensions
  const DIMENSIONS = {
    CONTAINER: {
      TEN: {
        THREE_D: {
          WIDTH: 30.30408388,
          SC_HEIGHT: 25.908830686145798,
          DEPTH: 24.382746504059998,
        },
        SIDE: {
          WIDTH: 118,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FRONT: {
          WIDTH: 96,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FLOOR_PLAN: {
          WIDTH: 118,
          HEIGHT: 96,
        },
      },
      TWENTY: {
        THREE_D: {
          WIDTH: 60.908211699999995,
          SC_HEIGHT: 25.90803080209,
          DEPTH: 24.38394248027,
        },
        SIDE: {
          WIDTH: 238.5,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FRONT: {
          WIDTH: 96,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FLOOR_PLAN: {
          WIDTH: 238.5,
          HEIGHT: 96,
        },
      },
      FORTY: {
        THREE_D: {
          WIDTH: 121.44539088999998,
          SC_HEIGHT: 25.908075335128004,
          DEPTH: 24.40468565288,
        },
        SIDE: {
          WIDTH: 480,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FRONT: {
          WIDTH: 96,
          SC_HEIGHT: 102,
          HC_HEIGHT: 114,
        },
        FLOOR_PLAN: {
          WIDTH: 480,
          HEIGHT: 96,
        },
      },
    },
    DOOR: {
      PERSONNEL: {
        WIDTH: 44,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      PERSONNEL_SECURITY: {
        WIDTH: 46,
        HEIGHT: 95,
        POSITION: {
          x: 0,
          y: 7,
        },
      },
      SLIDING_SIX: {
        WIDTH: 78,
        HEIGHT: 80,
        POSITION: {
          x: 0,
          y: 40,
        },
      },
      DOUBLE: {
        WIDTH: 76,
        HEIGHT: 84,
        POSITION: {
          x: 0,
          y: 30,
        },
      },
      HD_ROLL_UP_6: {
        WIDTH: 80,
        HEIGHT: 104,
        POSITION: {
          x: 0,
          y: -18,
        },
      },
      HD_ROLL_UP_8: {
        WIDTH: 104,
        HEIGHT: 104,
        POSITION: {
          x: 0,
          y: -18,
        },
      },
      HD_ROLL_UP_10: {
        WIDTH: 128,
        HEIGHT: 104,
        POSITION: {
          x: 0,
          y: -18,
        },
      },
      HD_ROLL_UP_12: {
        WIDTH: 152,
        HEIGHT: 104,
        POSITION: {
          x: 0,
          y: -18,
        },
      },
      HD_ROLL_UP_15: {
        WIDTH: 188,
        HEIGHT: 106,
        POSITION: {
          x: 0,
          y: -23,
        },
      },
      EC_HC_ROLLUP_6_74: {
        WIDTH: 76,
        HEIGHT: 90,
        POSITION: {
          x: 0,
          y: 17,
        },
      },
      EC_HC_ROLLUP_8_74: {
        WIDTH: 100,
        HEIGHT: 90,
        POSITION: {
          x: 0,
          y: 17,
        },
      },
      EC_HC_ROLLUP_10_74: {
        WIDTH: 124,
        HEIGHT: 90,
        POSITION: {
          x: 0,
          y: 17,
        },
      },
      EC_HC_ROLLUP_12_74: {
        WIDTH: 148,
        HEIGHT: 90,
        POSITION: {
          x: 0,
          y: 17,
        },
      },
      EC_HC_ROLLUP_15_74: {
        WIDTH: 184,
        HEIGHT: 90,
        POSITION: {
          x: 0,
          y: 17,
        },
      },
      EC_ST_ROLLUP_6_64: {
        WIDTH: 76,
        HEIGHT: 78,
        POSITION: {
          x: 0,
          y: 46,
        },
      },
      EC_ST_ROLLUP_8_64: {
        WIDTH: 100,
        HEIGHT: 78,
        POSITION: {
          x: 0,
          y: 46,
        },
      },
      EC_ST_ROLLUP_10_64: {
        WIDTH: 124,
        HEIGHT: 78,
        POSITION: {
          x: 0,
          y: 46,
        },
      },
      EC_ST_ROLLUP_12_64: {
        WIDTH: 148,
        HEIGHT: 78,
        POSITION: {
          x: 0,
          y: 46,
        },
      },
      EC_ST_ROLLUP_15_64: {
        WIDTH: 184,
        HEIGHT: 78,
        POSITION: {
          x: 0,
          y: 46,
        },
      },
    },
    WINDOW: {
      WINDOW: {
        WIDTH: 54,
        HEIGHT: 42,
        POSITION: {
          x: 0,
          y: 40,
        },
      },
      WINDOW_SECURITY: {
        WIDTH: 54,
        HEIGHT: 42,
        POSITION: {
          x: 0,
          y: 40,
        },
      },
    },
    VENT: {
      SQ_12: {
        WIDTH: 16,
        HEIGHT: 16,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
      SQ_20: {
        WIDTH: 24,
        HEIGHT: 24,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
      SQ_24: {
        WIDTH: 28,
        HEIGHT: 28,
        POSITION: {
          x: 0,
          y: 24,
        },
      },
    },
    SCALE_FACTOR: 2.5,
    GRID_SIZE: 1,
    BOUNDARIES: {
      x: 18,
    },
  };

  // Grid size is in inches, so 1 would be 1 inch
  const snapToGridModifier = createSnapModifier(DIMENSIONS.GRID_SIZE);

  const containerData = [
    {
      name: `10' Custom Cube`,
      slug: CONTAINER_10_SLUG,
      id: 1,
      width: `8' width`,
      length: `10' length`,
      sqFootage: '80 sq ft',
      scThumbnail: '10/standard/right.svg',
      hcThumbnail: '10/standard/right.svg',
      floorPlan: '10/floor-plan.svg',
      priceSc: 5400,
      priceHc: 0
    },
    {
      name: `20' Custom Cube`,
      slug: CONTAINER_20_SLUG,
      id: 2,
      width: `8' width`,
      length: `20' length`,
      sqFootage: '160 sq ft',
      scThumbnail: '20/standard/right.svg',
      hcThumbnail: '20/high/right.svg',
      floorPlan: '20/floor-plan.svg',
      priceSc: 3800,
      priceHc: 5200 
    },
    {
      name: `40' Custom Cube`,
      slug: CONTAINER_40_SLUG,
      id: 3,
      width: `8' width`,
      length: `40' length`,
      sqFootage: '320 sq ft',
      scThumbnail: '40/standard/right.svg',
      hcThumbnail: '40/high/right.svg',
      floorPlan: '40/floor-plan.svg',
      priceSc: 6300,
      priceHc: 6300
    },
  ];

  const componentData = [
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: 'LHR Personnel Door',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: 'LHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: 'LHR Personnel Door Hardware and Lock Box 36in x 80in',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model:
        'LHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: 'RHR Personnel Door',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model:
        'RHR Personnel Door Window Lite Kit for Door 24inx30in Clear Glass',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model: 'RHR Personnel Door Hardware and Lock Box 36in x 80in',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2000,
      model:
        'RHR Personnel Door w Hardware and Lock Box 36inx 80in Window Lite Kit for Door 24inx30in Clear Glass',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3025,
      model: 'SM_Wide_Sliding_Glass_Door_6feet',
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3895,
      model: 'P202-1-503_6ft_6ft8in_Height_French Door White_and_Black Frame',
    },
    {
      name: COMPONENT_NAMES.HD_ROLL_UP_6,
      position: {
        x: DIMENSIONS.DOOR.HD_ROLL_UP_6.POSITION.x,
        y: DIMENSIONS.DOOR.HD_ROLL_UP_6.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/hd-rollup-6.svg`,
      desc: COMPONENT_NAMES.HD_ROLL_UP_6,
      objWidth: DIMENSIONS.DOOR.HD_ROLL_UP_6.WIDTH,
      objHeight: DIMENSIONS.DOOR.HD_ROLL_UP_6.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 2925,
      model: 'Heavy Duty Roll Up Door 72in x 88in - 80in x 104in',
      highContainerOnly: true,
      isRollUp: true,
    },
    {
      name: COMPONENT_NAMES.HD_ROLL_UP_8,
      position: {
        x: DIMENSIONS.DOOR.HD_ROLL_UP_8.POSITION.x,
        y: DIMENSIONS.DOOR.HD_ROLL_UP_8.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/hd-rollup-8.svg`,
      desc: COMPONENT_NAMES.HD_ROLL_UP_8,
      objWidth: DIMENSIONS.DOOR.HD_ROLL_UP_8.WIDTH,
      objHeight: DIMENSIONS.DOOR.HD_ROLL_UP_8.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 3280,
      model: 'Heavy Duty Roll Up Door 96in x 88in - 104in x 104in',
      highContainerOnly: true,
      isRollUp: true,
    },
    {
      name: COMPONENT_NAMES.HD_ROLL_UP_10,
      position: {
        x: DIMENSIONS.DOOR.HD_ROLL_UP_10.POSITION.x,
        y: DIMENSIONS.DOOR.HD_ROLL_UP_10.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/hd-rollup-10.svg`,
      desc: COMPONENT_NAMES.HD_ROLL_UP_10,
      objWidth: DIMENSIONS.DOOR.HD_ROLL_UP_10.WIDTH,
      objHeight: DIMENSIONS.DOOR.HD_ROLL_UP_10.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 3590,
      model: 'Heavy Duty Roll Up Door 120in x 88in - 128in x 104in',
      highContainerOnly: true,
      isRollUp: true,
    },
    {
      name: COMPONENT_NAMES.HD_ROLL_UP_12,
      position: {
        x: DIMENSIONS.DOOR.HD_ROLL_UP_12.POSITION.x,
        y: DIMENSIONS.DOOR.HD_ROLL_UP_12.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/hd-rollup-12.svg`,
      desc: COMPONENT_NAMES.HD_ROLL_UP_12,
      objWidth: DIMENSIONS.DOOR.HD_ROLL_UP_12.WIDTH,
      objHeight: DIMENSIONS.DOOR.HD_ROLL_UP_12.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 3895,
      model: 'Heavy Duty Roll Up Door 144in x 88in - 152in x 104in',
      highContainerOnly: true,
      isRollUp: true,
    },
    {
      name: COMPONENT_NAMES.HD_ROLL_UP_15,
      position: {
        x: DIMENSIONS.DOOR.HD_ROLL_UP_15.POSITION.x,
        y: DIMENSIONS.DOOR.HD_ROLL_UP_15.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.DOOR}/hd-rollup-15.svg`,
      desc: COMPONENT_NAMES.HD_ROLL_UP_15,
      objWidth: DIMENSIONS.DOOR.HD_ROLL_UP_15.WIDTH,
      objHeight: DIMENSIONS.DOOR.HD_ROLL_UP_15.HEIGHT,
      objType: COMPONENT_TYPES.DOOR,
      price: 4615,
      model: 'Heavy Duty Roll Up Door 180in x 88in - 188in x 104in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: 'Economy_Rollup_Door - 6ft - 72in x 88in - 76in x 90in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2775,
      model: 'Economy_Rollup_Door - 8ft - 96in x 88in - 100in x 90in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3100,
      model: 'Economy_Rollup_Door - 10ft - 120in x 88in - 124in x 90in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3450,
      model: 'Economy_Rollup_Door - 12ft - 144in x 88in - 148 x 90in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3925,
      model: 'Economy_Rollup_Door - 15ft - 180in x 88in - 184in x 90in',
      highContainerOnly: true,
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2625,
      model: 'Economy_Rollup_Door - 6ft - 72in x 76in - 76in x 78in',
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 2775,
      model: 'Economy_Rollup_Door - 8ft - 80in x 76in - 84in x 78in',
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3100,
      model: 'Economy_Rollup_Door - 10ft ST - 120in x 76in - 124in x 78in',
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3450,
      model: 'Economy_Rollup_Door - 12ft - 144in x 76in - 148in x 78in',
      isRollUp: true,
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
      objType: COMPONENT_TYPES.DOOR,
      price: 3925,
      model: 'Economy_Rollup_Door - 15ft - 180in x 76in - 184in x 78in',
      isRollUp: true,
    },
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
      objType: COMPONENT_TYPES.WINDOW,
      price: 1720,
      model: 'SM_Window 48x36_Hinged_Security_01',
    },
    {
      name: COMPONENT_NAMES.WINDOW,
      position: {
        x: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.x,
        y: DIMENSIONS.WINDOW.WINDOW_SECURITY.POSITION.y,
      },
      imgName: `${COMPONENT_TYPES.WINDOW}/window_security.svg`,
      desc: 'P201-1-03',
      objWidth: DIMENSIONS.WINDOW.WINDOW_SECURITY.WIDTH,
      objHeight: DIMENSIONS.WINDOW.WINDOW_SECURITY.HEIGHT,
      objType: COMPONENT_TYPES.WINDOW,
      price: 1080,
      model: 'SM_Window_48x36_01_No_Security',
    },
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
      objType: COMPONENT_TYPES.VENT,
      price: 440,
      model: 'P203-1-304_12in_x_12in Aluminum Fixed Louver 16ga Bolt on Frame',
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
      objType: COMPONENT_TYPES.VENT,
      price: 490,
      model: 'P203-1-305_20in_x_20in Aluminum Fixed Louver 16ga Bolt on Frame',
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
      objType: COMPONENT_TYPES.VENT,
      price: 540,
      model: 'P203-1-306_24in_x_24in Aluminum Fixed Louver 16ga Bolt on Frame',
    },
    {
      name: COMPONENT_NAMES.AIR_CONDITIONER,
      position: {
        x: 0,
        y: 0,
      },
      imgName: `${COMPONENT_TYPES.ELECTRICAL}/ac.svg`,
      desc: 'P203-1-101',
      objWidth: 0,
      objHeight: 0,
      objType: COMPONENT_TYPES.ELECTRICAL,
      price: 975,
      model: 'airconditioner',
    },
    {
      name: COMPONENT_NAMES.ROOF_VENT,
      position: {
        x: 0,
        y: 0,
      },
      imgName: `${COMPONENT_TYPES.ELECTRICAL}/roof-vent.svg`,
      desc: 'P203-1-309',
      objWidth: 0,
      objHeight: 0,
      objType: COMPONENT_TYPES.ELECTRICAL,
      price: 670,
      model: 'roofvent',
    },
    {
      name: COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP,
      position: {
        x: 0,
        y: 0,
      },
      imgName: `${COMPONENT_TYPES.ELECTRICAL}/box-panel.svg`,
      desc: 'P611-1-101',
      objWidth: 0,
      objHeight: 0,
      objType: COMPONENT_TYPES.ELECTRICAL,
      price: 925,
      model: 'electricalpanel',
    },
    {
      name: COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP,
      position: {
        x: 0,
        y: 0,
      },
      imgName: `${COMPONENT_TYPES.ELECTRICAL}/box-panel.svg`,
      desc: 'P611-1-102',
      objWidth: 0,
      objHeight: 0,
      objType: COMPONENT_TYPES.ELECTRICAL,
      price: 1075,
      model: 'electricalpanel',
    },
    {
      name: COMPONENT_NAMES.BASEBOARD_HEATER,
      position: {
        x: 0,
        y: 0,
      },
      imgName: `${COMPONENT_TYPES.ELECTRICAL}/box-panel.svg`,
      desc: 'P655-1-01',
      objWidth: 0,
      objHeight: 0,
      objType: COMPONENT_TYPES.ELECTRICAL,
      price: 450,
      model: 'electricalpanel',
    },
  ].map((item) => ({
    id: uuid(),
    width: '100%',
    height: 'auto',
    isColliding: false,
    isSelected: false,
    isTooClose: false,
    elevation: [],
    ...item,
  }));

  const DEFAULT_COMPONENTS = componentData.filter((item) =>
    [].includes(item.name)
  );

  const elevationData = [
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: CONTAINER_10_SLUG,
      imgScName: 'elevation/10/standard/right.svg',
      objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TEN.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: CONTAINER_20_SLUG,
      imgScName: 'elevation/20/standard/right.svg',
      imgHcName: 'elevation/20/high/right.svg',
      objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.RIGHT,
      homePlan: CONTAINER_40_SLUG,
      imgScName: 'elevation/40/standard/right.svg',
      imgHcName: 'elevation/40/high/right.svg',
      objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgScName: 'elevation/10/standard/back.svg',
      homePlan: CONTAINER_10_SLUG,
      objWidth: DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TEN.FRONT.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TEN.FRONT.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgScName: 'elevation/20/standard/back.svg',
      imgHcName: 'elevation/20/high/back.svg',
      homePlan: CONTAINER_20_SLUG,
      objWidth: DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TWENTY.FRONT.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TWENTY.FRONT.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.BACK,
      imgScName: 'elevation/40/standard/back.svg',
      imgHcName: 'elevation/40/high/back.svg',
      homePlan: CONTAINER_40_SLUG,
      objWidth: DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.FORTY.FRONT.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.FORTY.FRONT.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgScName: 'elevation/10/standard/left.svg',
      homePlan: CONTAINER_10_SLUG,
      objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TEN.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgScName: 'elevation/20/standard/left.svg',
      imgHcName: 'elevation/20/high/left.svg',
      homePlan: CONTAINER_20_SLUG,
      objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HC_HEIGHT,
    },
    {
      name: ELEVATION_NAMES.LEFT,
      imgScName: 'elevation/40/standard/left.svg',
      imgHcName: 'elevation/40/high/left.svg',
      homePlan: CONTAINER_40_SLUG,
      objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
      objScHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.SC_HEIGHT,
      objHcHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HC_HEIGHT,
    },
  ]
    .filter((item) => item.name !== ELEVATION_NAMES.FRONT)
    .map((item) => ({
      id: uuid(),
      width: '100%',
      height: 'auto',
      ...item,
    }));

  return (
    <Library2dDataContext.Provider
      value={{
        containerData,
        DIMENSIONS,
        snapToGridModifier,
        componentData,
        DEFAULT_COMPONENTS,
        elevationData,
      }}
    >
      {children}
    </Library2dDataContext.Provider>
  );
};
