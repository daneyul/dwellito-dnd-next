import { v4 as uuid } from 'uuid';
import { atAndS } from './atAndS';
import { customCubes } from './customCubes';
import { compactCottages } from '../roofs/compactCottages';

export const doorComponents = [
  ...customCubes,
  ...atAndS,
  ...compactCottages,
].map((item) => ({
  id: uuid(),
  ...item,
}));
