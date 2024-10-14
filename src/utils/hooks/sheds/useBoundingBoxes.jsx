import { useState, useCallback } from 'react';
import { Vector3 } from 'three';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';

export function useBoundingBoxes({ doors, windows }) {
  const [doorBoundingBoxes, setDoorBoundingBoxes] = useState([]);
  const [windowBoundingBoxes, setWindowBoundingBoxes] = useState([]);

  const handleDoorBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      // Adjust the bounding box height for personnel doors
      if (typeof data.size.y === 'number') {
        updatedData = {
          ...updatedData,
          size: new Vector3(data.size.x, data.size.y, data.size.z),
          center: new Vector3(data.center.x, data.center.y, data.center.z),
        };
      }

      setDoorBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [doors, COMPONENT_NAMES]
  );

  const handleWindowBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      updatedData = {
        ...updatedData,
        size: new Vector3(data.size.x, data.size.y, data.size.z),
        center: new Vector3(data.center.x, data.center.y, data.center.z),
      };

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
