import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import {
  CONFIGURATOR_TYPES,
  ELEVATION_NAMES,
  SHED_ONE_STORY_12x32,
} from '@/utils/constants/names/names';

export const oneStory12x32 = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-one-story-front-12x32',
    homePlan: SHED_ONE_STORY_12x32,
    imgName: 'elevation/one-story/12x32/front.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-1-story-right-12x32',
    homePlan: SHED_ONE_STORY_12x32,
    imgName: 'elevation/one-story/12x32/right.svg',
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-one-story',
    imgName: 'elevation/one-story/12x32/front.svg',
    homePlan: SHED_ONE_STORY_12x32,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-one-story',
    imgName: 'elevation/one-story/12x32/left.svg',
    homePlan: SHED_ONE_STORY_12x32,
    objWidth: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
];
