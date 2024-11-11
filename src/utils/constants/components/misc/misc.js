import { v4 as uuid } from 'uuid';
import { COMPONENT_TYPES } from '../../names/names';

export const miscComponents = [
  {
    name: 'Paint Package',
    price: 0,
    thumbnail: 'misc/paint-package.webp',
    objType: COMPONENT_TYPES.MISC
  },
  {
    name: 'Hurricane Helene Relief Discount',
    price: -17000,
    thumbnail: 'misc/relief-discount.webp',
    objType: COMPONENT_TYPES.MISC
  },
  {
    name: 'Add Air Conditioning to Heater Unit',
    price: 1500,
    thumbnail: 'misc/cooling-heating.webp',
    objType: COMPONENT_TYPES.MISC
  }
].map((item) => ({
  id: uuid(),
  ...item
}));
