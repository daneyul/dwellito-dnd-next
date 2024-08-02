import { AT_AND_S_DOOR_DIMENSIONS } from "./atAndS";
import { CUSTOM_CUBE_DOOR_DIMENSIONS } from "./customCubes";

export const DOOR_DIMENSIONS = {
  ...CUSTOM_CUBE_DOOR_DIMENSIONS,
  ...AT_AND_S_DOOR_DIMENSIONS,
};
