import React, { useState, createContext } from 'react';
import {
  getExteriorFinishFromUrl,
  getFlooringFromUrl,
  getInteriorFinishFromUrl,
  getInteriorTrimFromUrl,
  getSelectionsFromUrl,
} from '@/utils/2D/utils';
import { INTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/interiorData';
import { DEFAULT_COMPONENTS } from '@/utils/constants/componentData';
import { elevationData } from '@/utils/constants/elevationData';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriorData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiorTrimData';
import useOrderTotal from '../hooks/useShedOrderTotal';
import useInteriorFinishes from '@/utils/hooks/useInteriorFInishes';
import {
  CONFIGURATOR_TYPES,
  ELEVATION_NAMES,
  SHED_ONE_STORY,
} from '@/utils/constants/names/names';
import { shedData } from '../constants/shedData';

export const ShedDataContext = createContext();

const ShedDataProvider = ({ children, data }) => {
  const slug = data.slug;
  const supplier = data.supplier;
  const querySelections = getSelectionsFromUrl(data.querySelectionData);
  const queryInterior = getInteriorFinishFromUrl(data.querySelectionData);
  const queryExterior = getExteriorFinishFromUrl(data.querySelectionData);
  const queryFlooring = getFlooringFromUrl(data.querySelectionData);
  const queryInteriorTrim = getInteriorTrimFromUrl(data.querySelectionData);

  // State
  const [threeDModelLoaded, setThreeDModelLoaded] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const [showExterior, setShowExterior] = useState(true);
  const [cameraReady, setCameraReady] = useState(true);
  const [showOutsideDroppableWarning, setShowOutsideDroppableWarning] =
    useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(2.5);

  // Selections
  const [selectedComponents, setSelectedComponents] = useState(
    querySelections || DEFAULT_COMPONENTS
  );
  const [exteriorFinish, setExteriorFinish] = useState(
    queryExterior ||
      EXTERIOR_FINISH_OPTIONS.filter((i) => i.supplier === supplier)[0]
  );

  // Elevation
  const DEFAULT_ELEVATION = elevationData.find(
    (item) => item.name === ELEVATION_NAMES.RIGHT && item.homePlan === slug && item.type === CONFIGURATOR_TYPES.SHED
  );
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);

  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});

  // Shed
  const [selectedShedHeight, setSelectedShedHeight] =
    useState(SHED_ONE_STORY);
  const shedHeightIsOneStory =
  selectedShedHeight ===     useState(SHED_ONE_STORY);
    ;
  const selectedShed = shedData.find(
    (shed) => shed.slug === slug
  );
  const shedId = selectedShed.id;
  const shedSize = () => {
    if (selectedShed === shedData[0]) {
      return SHED_ONE_STORY;
    }
  };

  // Floor Plan
  const floorPlan = elevationData.find((elevation) => {
    return (
      elevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      elevation.homePlan === slug &&
      elevation.type === CONFIGURATOR_TYPES.SHED
    );
  });
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const {
    orderTotal,
    setOrderTotal,
  } = useOrderTotal({
    shedHeightIsOneStory,
    selectedShed,
    slug,
    selectedComponents,
    exteriorFinish,
  });

  const [mappedElevations, setMappedElevations] = useState(
    elevationData.filter((elevation) => {
      if (elevation.homePlan === selectedShed.slug) {
        return elevation;
      }
    })
  );

  const contextValue = {
    selectedComponents,
    setSelectedComponents,
    selectedElevation,
    setSelectedElevation,
    orderTotal,
    setOrderTotal,
    setSelectedElevation,
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
    shedSize,
    floorPlan,
    isFloorPlanView,
    showOutsideDroppableWarning,
    setShowOutsideDroppableWarning,
    dialogOpen,
    setDialogOpen,
    shedHeightIsOneStory,
  };

  return (
    <ShedDataContext.Provider value={contextValue}>
      {children}
    </ShedDataContext.Provider>
  );
};

export default ShedDataProvider;