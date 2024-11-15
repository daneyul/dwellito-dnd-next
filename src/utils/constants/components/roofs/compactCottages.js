
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ONE_STORY,
  SHED_ONE_STORY_12x24,
  SHED_ONE_STORY_12x32,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const compactCottages = [
  {
    name: COMPONENT_NAMES.SLANT_ROOF,
    thumbnail: '/12x24/slant/front.svg',
    id: 'slant-roof',
    price: 0,
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
    name: COMPONENT_NAMES.SLANT_ROOF,
    thumbnail: '/12x32/slant/front.svg',
    id: 'slant-roof',
    price: 0,
    shed: SHED_ONE_STORY_12x32,
    height: ONE_STORY,
    objType: COMPONENT_TYPES.ROOF,
    objWidth: 151,
    objLength: 302,
    objHeight: 53,
    imgs: {
      FRONT: 'roof/one-story/12x32/slant/front.svg',
      BACK: 'roof/one-story/12x32/slant/back.svg',
      LEFT: 'roof/one-story/12x32/slant/side.svg',
      RIGHT: 'roof/one-story/12x32/slant/side.svg',
    }
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));
