import { INTERIOR_TRIM_NAMES, SUPPLIER_SLUGS } from "../names/names";

const atAndS = [
  {
    name: INTERIOR_TRIM_NAMES.NONE,
    model: '',
    price: 0,
    img: 'none.png'
  },
  {
    name: INTERIOR_TRIM_NAMES.BATTEN_ADOBE_WHITE,
    model: '',
    price: 0,
    img: ''
  },
  {
    name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK,
    model: '',
    price: 0,
    img: ''
  },
  {
    name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE,
    model: '',
    price: 0,
    img: ''
  }
].map((item) => ({ ...item, supplier: SUPPLIER_SLUGS.AT_AND_S }));

export const INTERIOR_TRIM_OPTIONS = [
  ...atAndS
]