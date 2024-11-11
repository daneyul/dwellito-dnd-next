import { EXTERIORS, SUPPLIER_SLUGS } from "../../names/names";

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
    name: EXTERIORS.STOCK,
    glbObject: 'envirogreen',
    hex: '#74A2BB',
    fileName: 'blue',
    img: 'stock.png',
    price: 0,
  },
  {
    name: EXTERIORS.BEIGE,
    glbObject: 'beige',
    hex: '#99A2A4',
    fileName: 'beige',
    img: 'beige.png',
    price: 0,
  },
  {
    name: EXTERIORS.WHITE,
    glbObject: 'purewhite-sw7005',
    hex: '#FFFFFF',
    fileName: 'white',
    img: 'white.png',
    price: 0,
  },
  {
    name: EXTERIORS.LIGHT_GREY,
    glbObject: 'Slate Grey',
    hex: '#99A2A4',
    fileName: 'lightgrey',
    img: 'lightgrey.png',
    price: 0,
  },
  {
    name: EXTERIORS.BLUE,
    glbObject: 'blue',
    hex: '#74A2BB',
    fileName: 'blue',
    img: 'blue.png',
    price: 0,
  },
  {
    name: EXTERIORS.GREEN,
    glbObject: 'Generatorgreen',
    hex: '#9CB8A0',
    fileName: 'blue',
    img: 'green.png',
    price: 0,
  },
  {
    name: EXTERIORS.SAF_RED,
    glbObject: 'SAF Red',
    hex: '#A1280F',
    fileName: 'saf-red',
    img: 'saf-red.png',
    price: 0,
    cornerOnly: true
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

const compactCottages = [
  {
    name:EXTERIORS.WHITE,
    glbObject: 'white',
    hex: '#FFFFFF',
    fileName: 'white',
    img: 'white.png',
    price: 0
  },
  {
    name: EXTERIORS.IRON_ORE,
    glbObject: 'ironore',
    hex: '#434341',
    fileName: 'ironore',
    img: 'ironore.png',
    price: 2800
  },
  {
    name: EXTERIORS.OYSTER_BAY,
    glbObject: 'oysterbay',
    hex: '#aeb3a9',
    fileName: 'oysterbay',
    img: 'oysterbay.png',
    price: 2800
  },
  {
    name: EXTERIORS.SEA_SERPENT,
    glbObject: 'seaserpent',
    hex: '#3e4b54',
    fileName: 'seaserpent',
    img: 'seaserpent.png',
    price: 2800
  },
  {
    name: EXTERIORS.WORLDLY_GRAY,
    glbObject: 'worldlygray',
    hex: '#cec6bb',
    fileName: 'worldlygray',
    img: 'worldlygray.png',
    price: 2800
  }
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.COMPACT_COTTAGES }));

export const EXTERIOR_FINISH_OPTIONS = [
  ...customCubes,
  ...atAndS,
  ...compactCottages
];