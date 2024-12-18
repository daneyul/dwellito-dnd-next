import { useState, useCallback } from 'react';
import { Vector3 } from 'three';
import {
  COMPONENT_NAMES,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';

export function useBoundingBoxes({ doors, windows, vents }) {
  const [doorBoundingBoxes, setDoorBoundingBoxes] = useState([]);
  const [windowBoundingBoxes, setWindowBoundingBoxes] = useState([]);
  const [ventBoundingBoxes, setVentBoundingBoxes] = useState([]);
  const [exhaustFanBoundingBox, setExhaustFanBoundingBox] = useState(null);

  const handleExhaustFanBoundingBox = useCallback((data) => {
    setExhaustFanBoundingBox(data);
  }, []);

  const handleDoorBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      // Adjust the bounding box height for personnel doors
      if (typeof data.size.y === 'number') {
        const doorName = doors[index]?.name;

        if (
          doorName === COMPONENT_NAMES.PERSONNEL_LHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_LHR_SECURITY_GLASS ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR_SECURITY_GLASS
        ) {
          if (
            data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
            data.selectedElevation.name === ELEVATION_NAMES.LEFT
          ) {
            updatedData = {
              ...updatedData,
              size: new Vector3(data.size.x - 2, data.size.y - 3, data.size.z),
              center: new Vector3(
                data.center.x,
                data.center.y - 2,
                data.center.z
              ),
            };
          } else {
            updatedData = {
              ...updatedData,
              size: new Vector3(data.size.x, data.size.y - 3, data.size.z - 2),
              center: new Vector3(
                data.center.x,
                data.center.y - 2,
                data.center.z
              ),
            };
          }
        } else if (doors[index].isRollUp) {
          if (
            data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
            data.selectedElevation.name === ELEVATION_NAMES.LEFT
          ) {
            if (doors[index].isHeavyDuty) {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x - 2.3,
                  data.size.y - 2.6,
                  data.size.z
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 1.6,
                  data.center.z
                ),
              };
            } else if (doorName === COMPONENT_NAMES.GLASS_GARAGE_DOOR) {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x - 2.3,
                  data.size.y - 3.5,
                  data.size.z
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 1.5,
                  data.center.z
                ),
              };
            } else if (
              doorName === COMPONENT_NAMES.ROLLUP_DOOR_8 ||
              doorName === COMPONENT_NAMES.ROLLUP_DOOR_7
            ) {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x - 2.3,
                  data.size.y,
                  data.size.z
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 1,
                  data.center.z
                ),
              };
            } else {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x - 2.3,
                  data.size.y - 1,
                  data.size.z
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 1.5,
                  data.center.z
                ),
              };
            }
          } else {
            if (doors[index].isHeavyDuty && !doors[index].highContainerOnly) {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x,
                  data.size.y - 2.6,
                  data.size.z - 2.3
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 1.6,
                  data.center.z
                ),
              };
            } else {
              updatedData = {
                ...updatedData,
                size: new Vector3(
                  data.size.x - 2.3,
                  data.size.y - 1.5,
                  data.size.z
                ),
                center: new Vector3(
                  data.center.x,
                  data.center.y - 0.8,
                  data.center.z - 2.3
                ),
              };
            }
          }
        }
      }

      setDoorBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [doors, COMPONENT_NAMES]
  );

  const handleWindowBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };
      const windowName = windows[index]?.name;

      if (
        data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
        data.selectedElevation.name === ELEVATION_NAMES.LEFT
      ) {
        if (
          windowName === COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(data.size.x, data.size.y, data.size.z),
            center: new Vector3(data.center.x, data.center.y, data.center.z),
          };
        } else if (
          windowName === COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_47_12
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x - 1.7,
              data.size.y - 1.2,
              data.size.z
            ),
            center: new Vector3(
              data.center.x - 0.1,
              data.center.y - 0.1,
              data.center.z
            ),
          };
        } else {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x - 1.7,
              data.size.y - 1.7,
              data.size.z
            ),
            center: new Vector3(
              data.center.x - 0.1,
              data.center.y - 0.1,
              data.center.z
            ),
          };
        }
      } else {
        if (
          windowName === COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_SECURITY_46_27
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(data.size.x, data.size.y, data.size.z),
            center: new Vector3(data.center.x, data.center.y, data.center.z),
          };
        } else if (
          windowName === COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW_47_12
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x,
              data.size.y - 1.2,
              data.size.z - 1.7
            ),
            center: new Vector3(
              data.center.x - 0.1,
              data.center.y - 0.1,
              data.center.z
            ),
          };
        } else {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x,
              data.size.y - 1.7,
              data.size.z - 1.7
            ),
            center: new Vector3(
              data.center.x,
              data.center.y - 0.1,
              data.center.z
            ),
          };
        }
      }

      setWindowBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [windows]
  );

  const handleVentBoundingBox = useCallback(
    (index, data) => {
      setVentBoundingBoxes((prev) => ({ ...prev, [index]: data }));
    },
    [vents]
  );

  return {
    doorBoundingBoxes,
    windowBoundingBoxes,
    ventBoundingBoxes,
    exhaustFanBoundingBox,
    handleExhaustFanBoundingBox,
    handleDoorBoundingBox,
    handleWindowBoundingBox,
    handleVentBoundingBox,
  };
}