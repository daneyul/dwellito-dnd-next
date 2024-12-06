import { INTERIOR_FINISH_OPTIONS } from '../constants/components/interiors/interiorData';
import { INTERIOR_FINISH_NAMES } from '../constants/names/names';

const plywoodInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.PLYWOOD
);
const drywallInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.DRYWALL
);
const sprayfoamCeilingInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING
);
const sprayfoamCeilingWallsInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS
);
const luanWallInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.LUAN_WALL
);
const whiteShiplapInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.WHITE_SHIPLAP
);
const none = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.NONE
);

const useInteriorFinishes = ({ interiorFinish }) => {
  const interiorIsPlywood = interiorFinish.name === plywoodInterior.name;
  const interiorIsDrywall = interiorFinish.name === drywallInterior.name;
  const interiorIsSprayFoamCeiling =
    interiorFinish.name === sprayfoamCeilingInterior.name;
  const interiorIsSprayFoamCeilingWalls =
    interiorFinish.name === sprayfoamCeilingWallsInterior.name;
  const interiorIsWhiteShiplap = interiorFinish.name === whiteShiplapInterior.name;
  const interiorIsLuanWall = interiorFinish.name === luanWallInterior.name;
  const interiorIsNone = interiorFinish.name === none.name;

  return {
    interiorIsPlywood,
    interiorIsDrywall,
    interiorIsSprayFoamCeiling,
    interiorIsSprayFoamCeilingWalls,
    interiorIsWhiteShiplap,
    interiorIsLuanWall,
    interiorIsNone
  };
};

export default useInteriorFinishes;
