import { COMPACT_COTTAGES_COMPONENTS, COMPONENT_TYPES, SHED_SIZE_1_STORY_12x24 } from "../names/names";

export const roofData = [
  {
    name: COMPACT_COTTAGES_COMPONENTS.GABLE_ROOF,
    desc: COMPACT_COTTAGES_COMPONENTS.GABLE_ROOF,
    id: 1,
    thumbnail: 'one-story/12x24/gable/front.svg',
    objWidth: 1,
    objHeight: 1,
    objType: COMPONENT_TYPES.ROOF,
    model: 'gable',
    price: 0,
    size: SHED_SIZE_1_STORY_12x24
  },
  {
    name: COMPACT_COTTAGES_COMPONENTS.SLANT_ROOF,
    desc: COMPACT_COTTAGES_COMPONENTS.SLANT_ROOF,
    id: 2,
    thumbnail: 'one-story/12x24/slant/front.svg',
    objWidth: 1,
    objHeight: 1,
    objType: COMPONENT_TYPES.ROOF,
    model: 'slant',
    price: 0,
    size: SHED_SIZE_1_STORY_12x24
  },
];
