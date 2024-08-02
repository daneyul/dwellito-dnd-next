import { INTERIOR_FINISH_NAMES } from "../names/names";

const customCubes = [
  {
    name: INTERIOR_FINISH_NAMES.NONE,
    price: 0,
    hex: '#FFFFFF',
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
    hex: '',
    price10: 1360,
    price20S: 2175,
    price20H: 2360,
    price40S: 3810,
    price40H: 4235,
    img: 'spray-foam.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.PLYWOOD,
    hex: '#C19A6B',
    price10: 4060,
    price20S: 6200,
    price20H: 6945,
    price40S: 10855,
    price40H: 12100,
    img: 'plywood.png',
  },
  {
    name: INTERIOR_FINISH_NAMES.DRYWALL,
    hex: '#F2F2F2',
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
    img: 'drywall.png',
  },
]

export const INTERIOR_FINISH_OPTIONS = [
  ...customCubes
];

export const plywoodInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.PLYWOOD);
export const drywallInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.DRYWALL);
export const sprayfoamCeilingInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING);
export const sprayfoamCeilingWallsInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS);
