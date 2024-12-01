import { DIMENSIONS } from "@/utils/constants/dimensions/dimensions";
import { CONFIGURATOR_TYPES, ELEVATION_NAMES, SHED_TWO_STORY_16x24 } from "@/utils/constants/names/names";

export const twoStory16x24 = [
  {
    name: ELEVATION_NAMES.FRONT,
    id: 'elevation-two-story-front-16x24',
    homePlan: SHED_TWO_STORY_16x24,
    imgName: 'elevation/two-story/16x24/front.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.RIGHT,
    id: 'elevation-two-story-right-16x24',
    homePlan: SHED_TWO_STORY_16x24,
    imgName: 'elevation/two-story/16x24/right.svg',
    objWidth: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.BACK,
    id: 'elevation-back-two-story',
    imgName: 'elevation/two-story/16x24/front.svg',
    homePlan: SHED_TWO_STORY_16x24,
    objWidth: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.FRONT.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.FRONT.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  },
  {
    name: ELEVATION_NAMES.LEFT,
    id: 'elevation-left-two-story',
    imgName: 'elevation/two-story/16x24/left.svg',
    homePlan: SHED_TWO_STORY_16x24,
    objWidth: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.SIDE.WIDTH,
    objHeight: DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.SIDE.HEIGHT,
    type: CONFIGURATOR_TYPES.SHED,
  }
];