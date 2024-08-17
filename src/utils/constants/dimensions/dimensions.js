import { CONTAINER_DIMENSIONS } from "./containers/containerDimensions";
import { DOOR_DIMENSIONS } from "./doors/doorDimensions";
import { PARTITION_DIMENSIONS } from "./partitions/partitionDimensions";
import { VENT_DIMENSIONS } from "./vents/ventDimensions";
import { WINDOW_DIMENSIONS } from "./windows/windowDimensions";

export const DIMENSIONS = {
  CONTAINER: CONTAINER_DIMENSIONS,
  DOOR: DOOR_DIMENSIONS,
  WINDOW: WINDOW_DIMENSIONS,
  VENT: VENT_DIMENSIONS,
  PARTITION: PARTITION_DIMENSIONS,
  SCALE_FACTOR: 2.5,
  GRID_SIZE: 1,
  BOUNDARIES: {
    x: 17,
  },
  SCALE_FACTOR_FOR_CALCULATIONS: 3.98
};