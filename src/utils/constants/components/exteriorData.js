import { SUPPLIER_SLUGS } from "../names/names";

const customCubes = [
  {
    name: 'Beige',
    glbObject: 'Beige',
    hex: null,
    fileName: 'beige-paint',
    img: 'beige.png',
    price: 0,
  },
  {
    name: 'White',
    glbObject: 'White',
    hex: null,
    fileName: 'white-paint',
    img: 'white.png',
    price: 1640,
  },
  {
    name: 'Blue',
    glbObject: 'Blue',
    hex: null,
    fileName: 'blue-paint',
    img: 'blue.png',
    price: 1640,
  },
  {
    name: 'Green',
    glbObject: 'Green',
    hex: null,
    fileName: 'green-paint',
    img: 'green.png',
    price: 1640,
  },
  {
    name: 'Slate Grey',
    glbObject: 'SlateGrey',
    hex: null,
    fileName: 'slate-grey-paint',
    img: 'slate-grey.png',
    price: 1640,
  },
  {
    name: 'Red',
    glbObject: 'Red',
    hex: null,
    fileName: 'red-paint',
    img: 'red.png',
    price: 1640,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));

const atAndS = [
  {
    name: 'Nucor Green',
    glbObject: 'Beige',
    hex: '#1B6433',
    fileName: 'green-paint',
    img: 'green.png',
    price: 0,
  },
  {
    name: 'Keiwit Yellow',
    glbObject: 'Yellow',
    hex: '#FACD23',
    fileName: 'yellow-paint',
    img: 'yellow.png',
    price: 0,
  },
  {
    name: 'Slate Grey',
    glbObject: 'SlateGrey',
    hex: '#99A2A4',
    fileName: 'slate-grey-paint',
    img: 'slate-grey.png',
    price: 0,
  },
  {
    name: 'SAF Red (Corners Only)',
    glbObject: 'Red',
    hex: '#A1280F',
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