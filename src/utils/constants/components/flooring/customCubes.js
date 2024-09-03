import { SUPPLIER_SLUGS } from "../../names/names";

export const customCubes = [
  {
    name: 'None',
    type: '',
    fileName: '',
    glbObject: '',
    img: 'none.png',
    hex: '#FFFFFF',
    price10: 0,
    price20: 0,
    price40: 0,
  },
  {
    name: 'Vinyl Plank Flooring - 12mil Echo',
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
    name: 'Vinyl Plank Flooring - 12mil Timber',
    type: 'Timber',
    fileName: 'timber',
    glbObject: 'Echo',
    img: 'Vinyl Plank Flooring - 12mil Timber.png',
    hex: '#000000',
    price10: 610,
    price20: 950,
    price40: 1845,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));