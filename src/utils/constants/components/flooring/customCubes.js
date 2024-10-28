import { SUPPLIER_SLUGS, FLOORING_NAMES } from "../../names/names";

export const customCubes = [
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
    name: FLOORING_NAMES.NONE,
    type: '',
    fileName: '',
    glbObject: '',
    img: 'none.png',
    hex: '#FFFFFF',
    price10: 0,
    price20: 0,
    price40: 0,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));