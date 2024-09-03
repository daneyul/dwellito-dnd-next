import { INTERIOR_TRIM_NAMES, SUPPLIER_SLUGS } from "../names/names";

const atAndS = [
  {
    name: INTERIOR_TRIM_NAMES.NONE,
    model: '',
    price: 0,
    img: 'none.png',
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
  },
  {
    name: INTERIOR_TRIM_NAMES.BATTEN_ADOBE_WHITE,
    model: '',
    price: 0,
    img: 'adobe-white.png',
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
  },
  {
    name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK,
    model: '',
    price: 0,
    img: 'batten-oak.png',
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
  },
  {
    name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE,
    model: '',
    price: 0,
    img: 'batten-white.png',
    price10: 4850,
    price20S: 7110,
    price20H: 8020,
    price40S: 12450,
    price40H: 13805,
  }
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

export const INTERIOR_TRIM_OPTIONS = [
  ...atAndS
]