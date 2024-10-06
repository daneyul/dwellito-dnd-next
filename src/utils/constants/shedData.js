import {
  SHED_ONE_STORY,
  SHED_SIZE_1_STORY_12x24,
  SHED_SIZE_2_STORY_12x24,
  SHED_TWO_STORY,
} from './names/names';

export const shedData = [
  {
    name: `12x24`,
    slug: SHED_SIZE_1_STORY_12x24,
    id: 1,
    thumbnail: 'elevation/one-story/thumbnail.png',
    floorPlan: 'elevation/one-story/floor-plan.png',
    price: 5400,
    size: SHED_ONE_STORY,
  },
  {
    name: `12x24`,
    slug: SHED_SIZE_2_STORY_12x24,
    id: 1,
    thumbnail: 'elevation/two-story/thumbnail.png',
    floorPlan: 'elevation/two-story/floor-plan.png',
    price: 6400,
    size: SHED_TWO_STORY,
  },
];
