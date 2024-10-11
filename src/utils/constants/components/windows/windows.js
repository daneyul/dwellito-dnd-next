import { v4 as uuid } from 'uuid';
import { atAndS } from './atAndS';
import { customCubes } from './customCubes';
import { compactCottages } from './compactCottages';

export const windowComponents = [
  ...customCubes,
  ...atAndS,
  ...compactCottages
].map((item) => ({
  id: uuid(),
  ...item
}));
