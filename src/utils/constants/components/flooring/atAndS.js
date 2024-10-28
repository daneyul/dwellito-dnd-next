import { SUPPLIER_SLUGS, FLOORING_NAMES } from "../../names/names";

export const atAndS = [
  {
    name: FLOORING_NAMES.ECHO,
    type: 'Echo',
    fileName: 'echo',
    glbObject: 'Material__119',
    img: 'Vinyl Plank Flooring - 12mil Echo.png',
    hex: '#C19A6B',
    price10: 610,
    price20: 950,
    price40: 1845,
  },
  {
    name: FLOORING_NAMES.TIMBER,
    type: 'Timber',
    fileName: 'timber',
    glbObject: 'Echo',
    img: 'Vinyl Plank Flooring - 12mil Timber.png',
    hex: '#000000',
    price10: 610,
    price20: 950,
    price40: 1845,
  },
  {
    name: FLOORING_NAMES.RUBBER_COIN,
    type: 'Rubber',
    fileName: 'rubber',
    glbObject: 'Concrete Raw - Safety Non Slip',
    img: 'rubber-coin.png',
    hex: '#000000',
    price10: 610,
    price20: 950,
    price40: 1845,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));