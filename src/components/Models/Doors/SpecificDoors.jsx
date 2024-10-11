import * as customCubes from './customCubes/Doors';
import * as atAndS from './atAndS/Doors';
import * as compactCottages from './compactCottages/Doors';

const specificDoors = {
  ...customCubes,
  ...atAndS,
  ...compactCottages,
};

export default specificDoors;
