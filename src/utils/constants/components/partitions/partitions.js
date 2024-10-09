import { v4 as uuid } from 'uuid';
import { customCubes } from "./customCubes";

export const partitionComponents = [
  ...customCubes
].map((item) => ({
  id: uuid(),
  ...item
}));
