import { v4 as uuid } from 'uuid';
import { COMPONENT_TYPES } from '../../names/names';

export const miscComponents = [
  {
    name: 'Add Air Conditioning to Heater Unit',
    price12x24: 1500,
    price12x32: 3000,
    price16x24: 3000,
    thumbnail: 'misc/cooling-heating.webp',
    objType: COMPONENT_TYPES.MISC
  },
  {
    name: 'Hurricane Helene Relief Discount',
    price12x24: -17000,
    price12x32: -17000,
    price16x24: -17000,
    thumbnail: 'misc/relief-discount.webp',
    objType: COMPONENT_TYPES.MISC
  },
].map((item) => ({
  id: uuid(),
  ...item
}));
