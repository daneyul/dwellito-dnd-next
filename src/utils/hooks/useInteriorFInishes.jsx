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
const charredWoodInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.CHARRED_WOOD
);
const barnWoodInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.BARN_WOOD
);
const mdfPanelInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.MDF_PANEL
);
const luanWallInterior = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.LUAN_WALL
);
const none = INTERIOR_FINISH_OPTIONS.find(
  (option) => option.name === INTERIOR_FINISH_NAMES.NONE
);

const useInteriorFinishes = ({ interiorFinish }) => {
  const interiorIsPlywood = interiorFinish === plywoodInterior;
  const interiorIsDrywall = interiorFinish === drywallInterior;
  const interiorIsSprayFoamCeiling =
    interiorFinish === sprayfoamCeilingInterior;
  const interiorIsSprayFoamCeilingWalls =
    interiorFinish === sprayfoamCeilingWallsInterior;
  const interiorIsCharredWood = interiorFinish === charredWoodInterior;
  const interiorIsBarnWood = interiorFinish === barnWoodInterior;
  const interiorIsMdfPanel = interiorFinish === mdfPanelInterior;
  const interiorIsLuanWall = interiorFinish === luanWallInterior;
  const interiorIsNone = interiorFinish === none;

  return {
    interiorIsPlywood,
    interiorIsDrywall,
    interiorIsSprayFoamCeiling,
    interiorIsSprayFoamCeilingWalls,
    interiorIsCharredWood,
    interiorIsBarnWood,
    interiorIsMdfPanel,
    interiorIsLuanWall,
    interiorIsNone
  };
};

export default useInteriorFinishes;
