import { DIMENSIONS } from './dimensions';
import {
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  ELEVATION_NAMES,
} from './names';
import { v4 as uuid } from 'uuid';

export const elevationData = [
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
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    imgScName: 'floor-plans/10/floor-plan.svg',
    imgHcName: 'floor-plans/10/floor-plan.svg',
    homePlan: CONTAINER_10_SLUG,
    objWidth: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TEN.FLOOR_PLAN.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    imgScName: 'floor-plans/20/floor-plan.svg',
    imgHcName: 'floor-plans/20/floor-plan.svg',
    homePlan: CONTAINER_20_SLUG,
    objWidth: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.TWENTY.FLOOR_PLAN.HEIGHT,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    imgScName: 'floor-plans/40/floor-plan.svg',
    imgHcName: 'floor-plans/40/floor-plan.svg',
    homePlan: CONTAINER_40_SLUG,
    objWidth: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.WIDTH,
    objScHeight: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.HEIGHT,
    objHcHeight: DIMENSIONS.CONTAINER.FORTY.FLOOR_PLAN.HEIGHT,
  },
].map((item) => ({
  id: uuid(),
  width: '100%',
  height: 'auto',
  ...item,
}));
