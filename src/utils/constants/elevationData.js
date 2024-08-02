import { DIMENSIONS } from './dimensions/dimensions';
import {
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  ELEVATION_NAMES,
} from './names/names';

export const elevationData = [
  {
    name: ELEVATION_NAMES.RIGHT,
    id: "elevation-right-10",
    homePlan: CONTAINER_SIZE_10,
    imgScName: 'elevation/10/standard/right.svg',
    objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TEN.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: "elevation-right-20",
    homePlan: CONTAINER_SIZE_20,
    imgScName: 'elevation/20/standard/right.svg',
    imgHcName: 'elevation/20/high/right.svg',
    objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: "elevation-right-40",
    homePlan: CONTAINER_SIZE_40,
    imgScName: 'elevation/40/standard/right.svg',
    imgHcName: 'elevation/40/high/right.svg',
    objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: "elevation-back-10",
    imgScName: 'elevation/10/standard/back.svg',
    homePlan: CONTAINER_SIZE_10,
    objWidth: DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TEN.FRONT.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TEN.FRONT.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: "elevation-back-20",
    imgScName: 'elevation/20/standard/back.svg',
    imgHcName: 'elevation/20/high/back.svg',
    homePlan: CONTAINER_SIZE_20,
    objWidth: DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TWENTY.FRONT.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TWENTY.FRONT.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: "elevation-back-40",
    imgScName: 'elevation/40/standard/back.svg',
    imgHcName: 'elevation/40/high/back.svg',
    homePlan: CONTAINER_SIZE_40,
    objWidth: DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.FORTY.FRONT.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.FORTY.FRONT.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: "elevation-left-10",
    imgScName: 'elevation/10/standard/left.svg',
    homePlan: CONTAINER_SIZE_10,
    objWidth: DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TEN.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TEN.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: "elevation-left-20",
    imgScName: 'elevation/20/standard/left.svg',
    imgHcName: 'elevation/20/high/left.svg',
    homePlan: CONTAINER_SIZE_20,
    objWidth: DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TWENTY.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: "elevation-left-40",
    imgScName: 'elevation/40/standard/left.svg',
    imgHcName: 'elevation/40/high/left.svg',
    homePlan: CONTAINER_SIZE_40,
    objWidth: DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.SC_HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.FORTY.SIDE.HC_HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    id: "elevation-floor-10",
    imgScName: 'floor-plans/10/floor-plan.svg',
    imgHcName: 'floor-plans/10/floor-plan.svg',
    homePlan: CONTAINER_SIZE_10,
    objWidth: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    id: "elevation-floor-20",
    imgScName: 'floor-plans/20/floor-plan.svg',
    imgHcName: 'floor-plans/20/floor-plan.svg',
    homePlan: CONTAINER_SIZE_20,
    objWidth: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    id: "elevation-floor-40",
    imgScName: 'floor-plans/40/floor-plan.svg',
    imgHcName: 'floor-plans/40/floor-plan.svg',
    homePlan: CONTAINER_SIZE_40,
    objWidth: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.HEIGHT,
  },
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
