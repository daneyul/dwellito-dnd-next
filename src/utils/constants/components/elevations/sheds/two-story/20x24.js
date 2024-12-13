import { DIMENSIONS } from "@/utils/constants/dimensions/dimensions";
import { CONFIGURATOR_TYPES, ELEVATION_NAMES, SHED_TWO_STORY_20x24 } from "@/utils/constants/names/names";

export const twoStory20x24 = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-two-story-front-20x24',
    homePlan: SHED_TWO_STORY_20x24,
    imgName: 'elevation/two-story/20x24/front.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-two-story-right-20x24',
    homePlan: SHED_TWO_STORY_20x24,
    imgName: 'elevation/two-story/20x24/right.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-two-story',
    imgName: 'elevation/two-story/20x24/front.svg',
    homePlan: SHED_TWO_STORY_20x24,
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-two-story',
    imgName: 'elevation/two-story/20x24/left.svg',
    homePlan: SHED_TWO_STORY_20x24,
    objWidth: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.TWENTY_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  }
];