import { DIMENSIONS } from '../../dimensions/dimensions';
import {
  CONFIGURATOR_TYPES,
  ELEVATION_NAMES,
  SHED_ONE_STORY_12x24,
} from '../../names/names';

export const shedElevationData = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-one-story-front-12x24',
    homePlan: SHED_ONE_STORY_12x24,
    imgName: 'elevation/one-story/12x24/front.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-1-story-right-12x24',
    homePlan: SHED_ONE_STORY_12x24,
    imgName: 'elevation/one-story/12x24/right.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-one-story',
    imgName: 'elevation/one-story/12x24/front.svg',
    homePlan: SHED_ONE_STORY_12x24,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-one-story',
    imgName: 'elevation/one-story/12x24/left.svg',
    homePlan: SHED_ONE_STORY_12x24,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  }
].map((item) => ({
  width: '100%',
  height: 'auto',
  ...item,
}));
