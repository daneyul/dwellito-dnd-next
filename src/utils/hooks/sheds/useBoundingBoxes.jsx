import { useState, useCallback } from 'react';
import { Vector3 } from 'three';
import {
  COMPONENT_NAMES,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';

export function useBoundingBoxes({ doors, windows }) {
  const [doorBoundingBoxes, setDoorBoundingBoxes] = useState([]);
  const [windowBoundingBoxes, setWindowBoundingBoxes] = useState([]);

  const handleDoorBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      // Adjust the bounding box height for personnel doors
      if (typeof data.size.y === 'number') {
        if (
          data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
          data.selectedElevation.name === ELEVATION_NAMES.LEFT
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x - 2.9,
              data.size.y - 5.8,
              data.size.z
            ),
            center: new Vector3(
              data.center.x,
              data.center.y + 1.3,
              data.center.z - 0.8
            ),
          };
        } else {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x - 2.9,
              data.size.y - 5.8,
              data.size.z
            ),
            center: new Vector3(
              data.center.x,
              data.center.y + 1.3,
              data.center.z - 0.8
            ),
          };
        }
      }

      setDoorBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [doors, COMPONENT_NAMES]
  );

  const handleWindowBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      if (
        data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
        data.selectedElevation.name === ELEVATION_NAMES.LEFT
      ) {
        updatedData = {
          ...updatedData,
          size: new Vector3(data.size.x + 0.5, data.size.y, data.size.z),
          center: new Vector3(
            data.center.x - 0.3,
            data.center.y - 0.1,
            data.center.z - 0.1
          ),
        };
      } else {
        updatedData = {
          ...updatedData,
          size: new Vector3(data.size.x, data.size.y, data.size.z + 1),
          center: new Vector3(
            data.center.x,
            data.center.y,
            data.center.z - 0.4
          ),
        };
      }

      setWindowBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [windows]
  );

  return {
    doorBoundingBoxes,
    windowBoundingBoxes,
    handleDoorBoundingBox,
    handleWindowBoundingBox,
  };
}
