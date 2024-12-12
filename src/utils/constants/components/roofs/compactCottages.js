
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const compactCottages = [
  {
    name: COMPONENT_NAMES.SLANT_ROOF,
    thumbnail: '/slant/front.svg',
    id: 'slant-roof',
    price: 0,
    objType: COMPONENT_TYPES.ROOF,
    objWidth: 151,
    objLength: 302,
    objHeight: 53,
    imgs: {
      FRONT: 'roof/slant/front.svg',
      BACK: 'roof/slant/back.svg',
      LEFT: 'roof/slant/side.svg',
      RIGHT: 'roof/slant/side.svg',
    }
  },
  {
    name: COMPONENT_NAMES.GABLE_ROOF,
    thumbnail: '/gable/front.svg',
    id: 'gable-roof',
    price: 0,
    objType: COMPONENT_TYPES.ROOF,
    objWidth: 151,
    objLength: 302,
    objHeight: 53,
    imgs: {
      FRONT: 'roof/gable/front.svg',
      BACK: 'roof/gable/back.svg',
      LEFT: 'roof/gable/side.svg',
      RIGHT: 'roof/gable/side.svg',
    }
  },
].map(item => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));
