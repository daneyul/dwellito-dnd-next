import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  SUPPLIER_SLUGS,
} from '../../names/names';

export const atAndS = [
  {
    name: COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT,
    position: {
      x: 20,
      y: 20,
    },
    imgName: `${COMPONENT_TYPES.ELECTRICAL}/adjustable-swivel-flood-light.svg`,
    desc: 'P201-1-01',
    objWidth: 24,
    objHeight: 24,
    objType: COMPONENT_TYPES.ELECTRICAL,
    price: 0,
    model: 'adjustable-swivel-flood-light'
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));
