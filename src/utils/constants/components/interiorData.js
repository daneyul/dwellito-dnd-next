import { INTERIOR_FINISH_NAMES, SUPPLIER_SLUGS } from "../names/names";

const customCubes = [
  {
    name: INTERIOR_FINISH_NAMES.NONE,
    price: 0,
    img: 'none.png'
  },
  {
    name: INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING,
    hex: '',
    price10: 485,
    price20: 680,
    price40: 1265,
    img: 'spray-foam.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS,
    price10: 1360,
    price20S: 2175,
    price20H: 2360,
    price40S: 3810,
    price40H: 4235,
    img: 'spray-foam.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.PLYWOOD,
    price10: 4060,
    price20S: 6200,
    price20H: 6945,
    price40S: 10855,
    price40H: 12100,
    img: 'plywood.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.DRYWALL,
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'drywall.png',
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.CUSTOM_CUBES }));

const atAndS = [
  {
    name: INTERIOR_FINISH_NAMES.NONE,
    price: 0,
    img: 'none.png'
  },
  {
    name: INTERIOR_FINISH_NAMES.CHARRED_WOOD,
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'charred-wood.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.BARN_WOOD,
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'barn-wood.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.MDF_PANEL,
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'mdf.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.LUAN_WALL,
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'luan.png',
  },
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

export const INTERIOR_FINISH_OPTIONS = [
  ...customCubes,
  ...atAndS
];