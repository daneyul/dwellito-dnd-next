import {
  COMPACT_COTTAGES_COMPONENTS,
  COMPONENT_TYPES,
  SHED_ONE_STORY,
  SHED_SIZE_1_STORY_12x24,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const compactCottages = [
  {
    name: COMPACT_COTTAGES_COMPONENTS.SLANT_ROOF,
    thumbnail: '/12x24/slant/front.svg',
    id: 'slant-roof',
    price: 100,
    shed: SHED_SIZE_1_STORY_12x24,
    size: SHED_ONE_STORY,
    objType: COMPONENT_TYPES.ROOF
  },
  {
    name: COMPACT_COTTAGES_COMPONENTS.GABLE_ROOF,
    thumbnail: '/12x24/gable/front.svg',
    id: 'gable-roof',
    price: 100,
    shed: SHED_SIZE_1_STORY_12x24,
    size: SHED_ONE_STORY,
    objType: COMPONENT_TYPES.ROOF
  }
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));
