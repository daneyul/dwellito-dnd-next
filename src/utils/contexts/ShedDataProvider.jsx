import React, { useState, createContext, useEffect } from 'react';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';
import useOrderTotal from '../hooks/useShedOrderTotal';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONFIGURATOR_TYPES,
  ELEVATION_NAMES,
  ONE_STORY,
  SHED_12x32,
  SHED_16x24,
  TWO_STORY,
} from '@/utils/constants/names/names';
import { shedData } from '../constants/shedData';
import { shedElevationData } from '../constants/components/elevations/shedElevationData';
import { componentData } from '../constants/componentData';
import {
  getExteriorFinishFromUrl,
  getSelectionsFromUrl,
  handleAddComponent,
} from '../2D/sheds/utils';
import useShedSize from '../hooks/sheds/useShedSize';
import useShedHeight from '../hooks/sheds/useShedHeight';

export const ShedDataContext = createContext();

const ShedDataProvider = ({ children, data }) => {
  const slug = data.slug;
  const supplier = data.supplier;
  const querySelections = getSelectionsFromUrl(data.querySelectionData);
  const queryExterior = getExteriorFinishFromUrl(data.querySelectionData);
  const shedSize = useShedSize(slug);
  const shedHeight = useShedHeight(slug);

  // State
  const [threeDModelLoaded, setThreeDModelLoaded] = useState(false);
  const [show3d, setShow3d] = useState(true);
  const [showExterior, setShowExterior] = useState(true);
  const [cameraReady, setCameraReady] = useState(true);
  const [showOutsideDroppableWarning, setShowOutsideDroppableWarning] =
    useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(2.5);
  const [showGroundFloor, setShowGroundFloor] = useState(null);

  // Selections
  const slantRoofComponent = componentData.find(
    (component) => component.name === COMPONENT_NAMES.SLANT_ROOF
  );
  const [selectedComponents, setSelectedComponents] = useState(
    querySelections || [slantRoofComponent]
  );
  const [exteriorFinish, setExteriorFinish] = useState(
    queryExterior ||
      EXTERIOR_FINISH_OPTIONS.filter((i) => i.supplier === supplier)[0]
  );

  const selectedRoof = selectedComponents.find(
    (item) => item.objType === COMPONENT_TYPES.ROOF
  );

  // Elevation
  const DEFAULT_ELEVATION = shedElevationData.find(
    (item) =>
      item.name === ELEVATION_NAMES.FRONT &&
      item.homePlan === slug &&
      item.type === CONFIGURATOR_TYPES.SHED
  );
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);

  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});

  // Shed
  const [selectedShedHeight, setSelectedShedHeight] = useState(shedHeight);
  const shedHeightIsOneStory = selectedShedHeight === useState(ONE_STORY);
  const selectedShed = shedData.find((shed) => shed.slug === slug);
  const shedId = selectedShed.id;
  const showSecondFloor = selectedShedHeight === TWO_STORY && !showGroundFloor;

  // Floor Plan
  const floorPlan = shedElevationData.find((elevation) => {
    return (
      elevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      elevation.homePlan === slug &&
      elevation.type === CONFIGURATOR_TYPES.SHED
    );
  });
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const { orderTotal, setOrderTotal } = useOrderTotal({
    shedHeightIsOneStory,
    selectedShed,
    slug,
    selectedComponents,
    exteriorFinish,
  });

  const [mappedElevations, setMappedElevations] = useState(
    shedElevationData.filter((elevation) => {
      if (elevation.homePlan === selectedShed.slug) {
        return elevation;
      }
    })
  );

  // Load fixed components for now
  const doorName = COMPONENT_NAMES.EXTERIOR_DOOR_1;

  const windowName = COMPONENT_NAMES.WINDOW_48_48;

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );
  const leftElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.LEFT
  );
  const frontElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.FRONT
  );
  const door = componentData.find((door) => door.name === doorName);
  const window = componentData.find((window) => window.name === windowName);
  const modifiedWindowLeftPos = () => {
    if (selectedShedHeight === ONE_STORY) {
      if (shedSize === SHED_12x32) {
        return -235
      } else {
        return 0
      }
    } else {
      if (shedSize === SHED_12x32) {
        return -235
      } else {
        return 200
      }
    }
  }
  const modifiedDoor = {
    ...door,
    position: {
      ...door.position,
      x: shedSize === SHED_16x24 ? 115 : 0,
    },
  };
  const modifiedWindowFront = {
    ...window,
    position: {
      ...window.position,
      x: shedSize === SHED_16x24 ? -30 : 0,
    },
  };
  const modifiedWindowRight = {
    ...window,
    position: {
      ...window.position,
      x: 0,
    },
  };
  const modifiedWindowLeft1 = {
    ...window,
    position: {
      ...window.position,
      x: modifiedWindowLeftPos(),
    },
  };
  const modifiedWindowLeft2 = {
    ...window,
    position: {
      ...window.position,
      x: 490,
    },
  };
  const modifiedWindowFrontTwoStory = {
    ...window,
    position: {
      ...window.position,
      y: -200,
      x: shedSize === SHED_16x24 ? -30 : 0,
    },
  };
  const modifiedWindowRightTwoStory = {
    ...window,
    position: {
      ...window.position,
      y: -200,
      x: 0,
    },
  };
  const modifiedWindowLeft1TwoStory = {
    ...window,
    position: {
      ...window.position,
      y: -200,
      x: 0,
    },
  };
  const modifiedWindowLeft2TwoStory = {
    ...window,
    position: {
      ...window.position,
      y: -200,
      x: 490,
    },
  };

  useEffect(() => {
    if (!querySelections) {
      handleAddComponent({
        item: modifiedDoor,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: frontElevation,
        level: ONE_STORY
      });
      handleAddComponent({
        item: modifiedWindowFront,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: frontElevation,
        level: ONE_STORY
      });
      handleAddComponent({
        item: modifiedWindowRight,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: rightElevation,
        level: ONE_STORY
      });
      handleAddComponent({
        item: modifiedWindowLeft1,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: leftElevation,
        level: ONE_STORY
      });
      handleAddComponent({
        item: modifiedWindowLeft2,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: leftElevation,
        level: ONE_STORY
      });
      if (selectedShedHeight === TWO_STORY) {
        handleAddComponent({
          item: modifiedWindowFrontTwoStory,
          selectedComponents,
          setSelectedComponents,
          selectedElevation: frontElevation,
          level: TWO_STORY
        });
        handleAddComponent({
          item: modifiedWindowRightTwoStory,
          selectedComponents,
          setSelectedComponents,
          selectedElevation: rightElevation,
          level: TWO_STORY
        });
        handleAddComponent({
          item: modifiedWindowLeft1TwoStory,
          selectedComponents,
          setSelectedComponents,
          selectedElevation: leftElevation,
          level: TWO_STORY
        });
        handleAddComponent({
          item: modifiedWindowLeft2TwoStory,
          selectedComponents,
          setSelectedComponents,
          selectedElevation: leftElevation,
          level: TWO_STORY
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!showSecondFloor) {
      // Filter out second-story windows
      setSelectedComponents((prevComponents) =>
        prevComponents.filter(
          (component) =>
            component.level !== TWO_STORY
        )
      );
    } else {
      handleAddComponent({
        item: modifiedWindowFrontTwoStory,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: frontElevation,
        level: TWO_STORY
      });
      handleAddComponent({
        item: modifiedWindowRightTwoStory,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: rightElevation,
        level: TWO_STORY
      });
      handleAddComponent({
        item: modifiedWindowLeft1TwoStory,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: leftElevation,
        level: TWO_STORY
      });
      handleAddComponent({
        item: modifiedWindowLeft2TwoStory,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: leftElevation,
        level: TWO_STORY
      });
    }
  }, [showSecondFloor]);

  const contextValue = {
    selectedComponents,
    setSelectedComponents,
    selectedElevation,
    setSelectedElevation,
    orderTotal,
    setOrderTotal,
    draggableRefs,
    selectedElevationIndex,
    setSelectedElevationIndex,
    show3d,
    setShow3d,
    exteriorFinish,
    setExteriorFinish,
    showExterior,
    setShowExterior,
    mappedElevations,
    setMappedElevations,
    selectedShed,
    shedId,
    slug,
    supplier,
    scaleFactor,
    setScaleFactor,
    threeDModelLoaded,
    setThreeDModelLoaded,
    selectedShedHeight,
    setSelectedShedHeight,
    cameraReady,
    setCameraReady,
    floorPlan,
    isFloorPlanView,
    showOutsideDroppableWarning,
    setShowOutsideDroppableWarning,
    dialogOpen,
    setDialogOpen,
    shedHeightIsOneStory,
    selectedRoof,
    shedSize,
    showGroundFloor,
    setShowGroundFloor,
    showSecondFloor
  };

  return (
    <ShedDataContext.Provider value={contextValue}>
      {children}
    </ShedDataContext.Provider>
  );
};

export default ShedDataProvider;
