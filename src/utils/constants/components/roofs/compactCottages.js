import {
  COMPACT_COTTAGES_COMPONENTS,
  COMPONENT_TYPES,
  ONE_STORY,
  SHED_ONE_STORY_12x24,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const compactCottages = [
  {
    name: COMPACT_COTTAGES_COMPONENTS.SLANT_ROOF,
    thumbnail: '/12x24/slant/front.svg',
    id: 'slant-roof',
    price: 100,
    shed: SHED_ONE_STORY_12x24,
    height: ONE_STORY,
    objType: COMPONENT_TYPES.ROOF,
    objWidth: 151,
    objLength: 302,
    objHeight: 53,
    imgs: {
      FRONT: 'roof/one-story/12x24/slant/front.svg',
      BACK: 'roof/one-story/12x24/slant/back.svg',
      LEFT: 'roof/one-story/12x24/slant/side.svg',
      RIGHT: 'roof/one-story/12x24/slant/side.svg',
    }
  },
  {
    name: COMPACT_COTTAGES_COMPONENTS.GABLE_ROOF,
    thumbnail: '/12x24/gable/front.svg',
    id: 'gable-roof',
    price: 100,
    shed: SHED_ONE_STORY_12x24,
    height: ONE_STORY,
    objType: COMPONENT_TYPES.ROOF,
    objWidth: 152,
    objLength: 305,
    objHeight: 85,
    imgs: {
      FRONT: 'roof/one-story/12x24/gable/front.svg',
      BACK: 'roof/one-story/12x24/gable/front.svg',
      LEFT: 'roof/one-story/12x24/gable/side.svg',
      RIGHT: 'roof/one-story/12x24/gable/side.svg',
    }
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));
