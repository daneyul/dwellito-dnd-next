import { v4 as uuid } from 'uuid';
import { atAndS } from "./atAndS";
import { customCubes } from "./customCubes";

export const ventComponents = [
  ...customCubes,
  ...atAndS
].map((item) => ({
  id: uuid(),
  ...item
}));