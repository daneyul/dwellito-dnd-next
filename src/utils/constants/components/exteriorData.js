import { SUPPLIER_SLUGS } from "../names/names";

const customCubes = [
  {
    name: 'Beige',
    glbObject: 'Beige',
    hex: '#E6D3B5',
    fileName: 'beige-paint',
    img: 'beige.png',
    price: 0,
  },
  {
    name: 'White',
    glbObject: 'White',
    hex: '#F2F2F2',
    fileName: 'white-paint',
    img: 'white.png',
    price: 1640,
  },
  {
    name: 'Blue',
    glbObject: 'Blue',
    hex: '#003366',
    fileName: 'blue-paint',
    img: 'blue.png',
    price: 1640,
  },
  {
    name: 'Green',
    glbObject: 'Green',
    hex: '#2E8B57',
    fileName: 'green-paint',
    img: 'green.png',
    price: 1640,
  },
  {
    name: 'Slate Grey',
    glbObject: 'SlateGrey',
    hex: '#6C7B8B',
    fileName: 'slate-grey-paint',
    img: 'slate-grey.png',
    price: 1640,
  },
  {
    name: 'Red',
    glbObject: 'Red',
    hex: '#800000',
    fileName: 'red-paint',
    img: 'red.png',
    price: 1640,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));

const atAndS = [
  {
    name: 'Nucor Green',
    glbObject: 'Beige',
    hex: '',
    fileName: 'green-paint',
    img: 'green.png',
    price: 0,
  },
  {
    name: 'Keiwit Yellow',
    glbObject: 'Yellow',
    hex: '',
    fileName: 'yellow-paint',
    img: 'yellow.png',
    price: 0,
  },
  {
    name: 'Slate Grey',
    glbObject: 'SlateGrey',
    hex: '#6C7B8B',
    fileName: 'slate-grey-paint',
    img: 'slate-grey.png',
    price: 0,
  },
  {
    name: 'SAF Red',
    glbObject: 'Red',
    hex: '',
    fileName: 'red-paint',
    img: 'red.png',
    price: 0,
    cornerOnly: true
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

export const EXTERIOR_FINISH_OPTIONS = [
  ...customCubes,
  ...atAndS
];