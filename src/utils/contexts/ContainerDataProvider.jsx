import React, { useState, useEffect, createContext } from 'react';
import {
  getExteriorFinishFromUrl,
  getFlooringFromUrl,
  getInteriorFinishFromUrl,
  getInteriorTrimFromUrl,
  getSelectionsFromUrl,
} from '@/utils/2D/containers/utils';
import { INTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/interiors/interiorData';
import { containerData } from '../constants/components/containers/containerData';
import { DEFAULT_COMPONENTS } from '@/utils/constants/componentData';
import { containerElevationData } from '../constants/components/elevations/containerElevationData';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooring/flooringData';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiors/interiorTrimData';
import useOrderTotal from '../hooks/useContainerOrderTotal';
import useInteriorFinishes from '@/utils/hooks/useInteriorFInishes';
import {
  CONFIGURATOR_TYPES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  CONTAINER_SIZE_STR_10,
  CONTAINER_SIZE_STR_20,
  CONTAINER_SIZE_STR_40,
  CONTAINER_STANDARD,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';

export const ContainerDataContext = createContext();

const ContainerDataProvider = ({ children, data }) => {
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
  const [hasWrapLighting, setHasWrapLighting] = useState(false);
  const [hasCanLighting, setHasCanLighting] = useState(false);
  const [showOutsideDroppableWarning, setShowOutsideDroppableWarning] =
    useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(2.5);

  // Selections
  const [selectedComponents, setSelectedComponents] = useState(
    querySelections || DEFAULT_COMPONENTS
  );
  const [tempSelectedComponents, setTempSelectedComponents] =
    useState(selectedComponents);
  const [exteriorFinish, setExteriorFinish] = useState(
    queryExterior ||
      EXTERIOR_FINISH_OPTIONS.filter((i) => i.supplier === supplier)[0]
  );
  const [interiorFinish, setInteriorFinish] = useState(
    queryInterior ||
      INTERIOR_FINISH_OPTIONS.filter((i) => i.supplier === supplier)[0]
  );
  const [interiorTrim, setInteriorTrim] = useState(
    queryInteriorTrim ||
      INTERIOR_TRIM_OPTIONS.filter((i) => i.supplier === supplier)[0]
  );
  const [flooring, setFlooring] = useState(
    queryFlooring ||
      FLOORING_OPTIONS.filter((i) => i.supplier === supplier)[0] ||
      FLOORING_OPTIONS[0]
  );

  const interiorFinishes = useInteriorFinishes({ interiorFinish });

  const [hasRedCorners, setHasRedCorners] = useState(false);

  // Elevation
  const DEFAULT_ELEVATION = containerElevationData.find(
    (item) =>
      item.name === ELEVATION_NAMES.RIGHT &&
      item.homePlan === slug &&
      item.type === CONFIGURATOR_TYPES.CONTAINER
  );
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);

  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});

  // Container
  const [selectedContainerHeight, setSelectedContainerHeight] =
    useState(CONTAINER_STANDARD);
  const containerHeightIsStandard =
    selectedContainerHeight === CONTAINER_STANDARD;
  const selectedContainer = containerData.find(
    (container) => container.slug === slug
  );
  const containerId = selectedContainer.id;
  const containerSize = () => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return CONTAINER_SIZE_10;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return CONTAINER_SIZE_20;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return CONTAINER_SIZE_40;
    }
  };
  const containerSizeStr = () => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return CONTAINER_SIZE_STR_10;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return CONTAINER_SIZE_STR_20;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return CONTAINER_SIZE_STR_40;
    }
  };

  // Floor Plan
  const floorPlan = containerElevationData.find((elevation) => {
    return (
      elevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      elevation.homePlan === slug
    );
  });
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const { orderTotal, setOrderTotal, interiorFinishPrice, interiorTrimPrice } =
    useOrderTotal({
      containerHeightIsStandard,
      selectedContainer,
      slug,
      selectedComponents,
      interiorFinish,
      interiorTrim,
      exteriorFinish,
      flooring,
      hasRedCorners,
    });

  const [mappedElevations, setMappedElevations] = useState(
    containerElevationData.filter((elevation) => {
      if (elevation.homePlan === selectedContainer.slug) {
        return elevation;
      }
    })
  );

  useEffect(() => {
    const includesLighting = selectedComponents.some(
      (component) => component.isWrapLight
    );
    setHasWrapLighting(includesLighting);
  }, [selectedComponents]);

  useEffect(() => {
    const includesLighting = selectedComponents.some(
      (component) => component.isCanLight
    );
    setHasCanLighting(includesLighting);
  }, [selectedComponents]);

  // Update selectedComponents when selectedContainerHeight changes
  useEffect(() => {
    setSelectedComponents((prevComponents) =>
      prevComponents.filter((component) =>
        containerHeightIsStandard ? !component.highContainerOnly : true
      )
    );
  }, [selectedContainerHeight, containerHeightIsStandard]);

  // Update drawing scale factor based on the selected container
  useEffect(() => {
    if (slug === CONTAINER_SIZE_40) {
      setScaleFactor(1.75);
    } else {
      setScaleFactor(2.5);
    }
  }, [slug, containerData]);

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
    interiorFinish,
    setInteriorFinish,
    interiorTrim,
    setInteriorTrim,
    interiorFinishPrice,
    showExterior,
    setShowExterior,
    mappedElevations,
    setMappedElevations,
    selectedContainer,
    containerId,
    slug,
    supplier,
    scaleFactor,
    setScaleFactor,
    flooring,
    setFlooring,
    threeDModelLoaded,
    setThreeDModelLoaded,
    selectedContainerHeight,
    setSelectedContainerHeight,
    cameraReady,
    setCameraReady,
    containerSize,
    floorPlan,
    isFloorPlanView,
    hasWrapLighting,
    hasCanLighting,
    showOutsideDroppableWarning,
    setShowOutsideDroppableWarning,
    dialogOpen,
    setDialogOpen,
    interiorFinishes,
    containerHeightIsStandard,
    containerSizeStr,
    interiorTrimPrice,
    hasRedCorners,
    setHasRedCorners,
    tempSelectedComponents,
    setTempSelectedComponents,
  };

  return (
    <ContainerDataContext.Provider value={contextValue}>
      {children}
    </ContainerDataContext.Provider>
  );
};

export default ContainerDataProvider;
