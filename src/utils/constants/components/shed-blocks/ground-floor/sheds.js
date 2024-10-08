import { DIMENSIONS } from '../../../dimensions/dimensions';
import {
  CONFIGURATOR_TYPES,
  ELEVATION_NAMES,
  SHED_SIZE_1_STORY_12x24,
} from '../../../names/names';

export const sheds = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-1-story-front-12x24',
    homePlan: SHED_SIZE_1_STORY_12x24,
    imgName: 'elevation/one-story/12x24/front.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-1-story-right-12x24',
    homePlan: SHED_SIZE_1_STORY_12x24,
    imgName: 'elevation/one-story/12x24/right.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-1-story',
    imgName: 'elevation/one-story/12x24/back.svg',
    homePlan: SHED_SIZE_1_STORY_12x24,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-1-story',
    imgName: 'elevation/one-story/12x24/left.svg',
    homePlan: SHED_SIZE_1_STORY_12x24,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.FLOOR_PLAN,
    id: 'elevation-floor-1-story',
    imgName: 'floor-plans/one-story/12x24/floor-plan.svg',
    homePlan: SHED_SIZE_1_STORY_12x24,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FLOOR_PLAN.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FLOOR_PLAN.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
