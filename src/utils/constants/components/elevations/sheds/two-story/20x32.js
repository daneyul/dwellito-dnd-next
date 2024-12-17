import { DIMENSIONS } from "@/utils/constants/dimensions/dimensions";
import { CONFIGURATOR_TYPES, ELEVATION_NAMES, SHED_TWO_STORY_20x32 } from "@/utils/constants/names/names";

export const twoStory20x32 = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-two-story-front-20x32',
    homePlan: SHED_TWO_STORY_20x32,
    imgName: 'elevation/two-story/20x32/front.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-two-story-right-20x32',
    homePlan: SHED_TWO_STORY_20x32,
    imgName: 'elevation/two-story/20x32/right.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-two-story',
    imgName: 'elevation/two-story/20x32/front.svg',
    homePlan: SHED_TWO_STORY_20x32,
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-two-story',
    imgName: 'elevation/two-story/20x32/left.svg',
    homePlan: SHED_TWO_STORY_20x32,
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_THIRTY_TWO.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  }
];