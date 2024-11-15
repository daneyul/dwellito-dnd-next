import {
  ONE_STORY,
  SHED_12x24,
  SHED_12x32,
  SHED_ONE_STORY_12x24,
  SHED_ONE_STORY_12x32,
} from './names/names';

export const shedData = [
  {
    name: SHED_12x24,
    slug: SHED_ONE_STORY_12x24,
    id: 1,
    floorPlan: 'elevation/one-story/12x24/floor-plan.png',
    price: 67000,
    height: ONE_STORY,
    size: SHED_12x24
  },
  {
    name: SHED_12x32,
    slug: SHED_ONE_STORY_12x32,
    id: 2,
    floorPlan: 'elevation/one-story/12x32/floor-plan.png',
    price: 67000,
    height: ONE_STORY,
    size: SHED_12x32
  }
];
