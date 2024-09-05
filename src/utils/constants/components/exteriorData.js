import { EXTERIORS, SUPPLIER_SLUGS } from "../names/names";

const customCubes = [
  {
    name: EXTERIORS.BEIGE,
    glbObject: 'Beige',
    hex: null,
    fileName: 'beige-paint',
    img: 'beige.png',
    price: 0,
  },
  {
    name: EXTERIORS.WHITE,
    glbObject: 'White',
    hex: null,
    fileName: 'white-paint',
    img: 'white.png',
    price: 1640,
  },
  {
    name: EXTERIORS.BLUE,
    glbObject: 'Blue',
    hex: null,
    fileName: 'blue-paint',
    img: 'blue.png',
    price: 1640,
  },
  {
    name: EXTERIORS.GREEN,
    glbObject: 'Green',
    hex: null,
    fileName: 'green-paint',
    img: 'green.png',
    price: 1640,
  },
  {
    name: EXTERIORS.SLATE_GREY,
    glbObject: 'SlateGrey',
    hex: null,
    fileName: 'slate-grey-paint',
    img: 'slate-grey.png',
    price: 1640,
  },
  {
    name: EXTERIORS.RED,
    glbObject: 'Red',
    hex: null,
    fileName: 'red-paint',
    img: 'red.png',
    price: 1640,
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));

const atAndS = [
  {
    name: EXTERIORS.NUCOR_GREEN,
    glbObject: 'Nucor Green',
    hex: '#1B6433',
    fileName: 'nucor-green',
    img: 'nucor-green.png',
    price: 10,
  },
  {
    name: EXTERIORS.KEIWIT_YELLOW,
    glbObject: 'Keiwit Yellow',
    hex: '#FACD23',
    fileName: 'keiwit-yellow',
    img: 'keiwit-yellow.png',
    price: 0,
  },
  {
    name: EXTERIORS.SLATE_GREY,
    glbObject: 'Slate Grey',
    hex: '#99A2A4',
    fileName: 'slate-grey',
    img: 'slate-grey.png',
    price: 0,
  },
  {
    name: EXTERIORS.SAF_RED,
    glbObject: 'SAF Red',
    hex: '#A1280F',
    fileName: 'saf-red',
    img: 'saf-red.png',
    price: 100,
    cornerOnly: true
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

export const EXTERIOR_FINISH_OPTIONS = [
  ...customCubes,
  ...atAndS
];