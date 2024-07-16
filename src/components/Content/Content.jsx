'use client';
import React, { useState, useEffect, createContext, useContext } from 'react';
import Logo from '@/components/Logo';
import Viewer from '@/components/Viewer/Viewer';
import Sidebar from '@/components/Sidebar/Sidebar';
import PriceTotal from '@/components/PriceTotal/PriceTotal';
import {
  Library3dDataContext,
  Library3dDataProvider,
} from '@/utils/3D/3dLibraryContext';
import {
  Library2dDataContext,
  Library2dDataProvider,
} from '@/utils/2D/2dLibraryContext';
import style from './content.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import {
  COMPONENT_NAMES,
  CONTAINER_40_SLUG,
  CONTAINER_STANDARD,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import useDragHandlers from '@/utils/hooks/useDragHandlers';
import useOrderTotal from '@/utils/hooks/useOrderTotal';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';
import {
  getExteriorFinishFromUrl,
  getFlooringFromUrl,
  getInteriorFinishFromUrl,
  getSelectionsFromUrl,
} from '@/utils/2D/utils';

export const PageDataContext = createContext();

const PageDataProvider = ({ children, data }) => {
  const slug = data.slug;
  const querySelections = getSelectionsFromUrl(data.querySelectionData);
  const queryInterior = getInteriorFinishFromUrl(data.querySelectionData);
  const queryExterior = getExteriorFinishFromUrl(data.querySelectionData);
  const queryFlooring = getFlooringFromUrl(data.querySelectionData);

  // 2D Library Data
  const {
    DEFAULT_COMPONENTS,
    snapToGridModifier,
    elevationData,
    containerData,
  } = useContext(Library2dDataContext);

  // 3D Library Data
  const {
    INTERIOR_FINISH_OPTIONS,
    EXTERIOR_FINISH_OPTIONS,
    FLOORING_OPTIONS,
    plywoodInterior,
    drywallInterior,
    sprayfoamCeilingInterior,
    sprayfoamCeilingWallsInterior,
  } = useContext(Library3dDataContext);

  // State
  const [threeDModelLoaded, setThreeDModelLoaded] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const [showExterior, setShowExterior] = useState(true);
  const [cameraReady, setCameraReady] = useState(true);
  const [hasLighting, setHasLighting] = useState(false);
  const [showDragToMove, setShowDragToMove] = useState(false);
  const [showOutsideDroppableWarning, setShowOutsideDroppableWarning] =
    useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(2.5);

  // Selections
  const [selectedComponents, setSelectedComponents] = useState(
    querySelections ||
      DEFAULT_COMPONENTS.map((component) => ({
        ...component,
        lastValidPosition: { ...component.position },
      }))
  );
  const [exteriorFinish, setExteriorFinish] = useState(
    queryExterior || EXTERIOR_FINISH_OPTIONS[0]
  );
  const [interiorFinish, setInteriorFinish] = useState(
    queryInterior || INTERIOR_FINISH_OPTIONS[0]
  );
  const [flooring, setFlooring] = useState(
    queryFlooring || FLOORING_OPTIONS[0]
  );
  const interiorIsPlywood = interiorFinish === plywoodInterior;
  const interiorIsDrywall = interiorFinish === drywallInterior;
  const interiorIsSprayFoamCeiling =
    interiorFinish === sprayfoamCeilingInterior;
  const interiorIsSprayFoamCeilingWalls =
    interiorFinish === sprayfoamCeilingWallsInterior;

  // Elevation
  const DEFAULT_ELEVATION = elevationData.find(
    (item) => item.name === ELEVATION_NAMES.RIGHT && item.homePlan === slug
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
    if (selectedContainer === containerData[0]) {
      return '10';
    } else if (selectedContainer === containerData[1]) {
      return '20';
    } else if (selectedContainer === containerData[2]) {
      return '40';
    }
  };

  // Floor Plan
  const floorPlan = elevationData.find((elevation) => {
    return (
      elevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      elevation.homePlan === slug
    );
  });
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    handleSelect,
    handleDeleteSelected,
    modifiers,
    hasCollisions,
    showCollision,
    setShowCollision,
  } = useDragHandlers({
    selectedComponents,
    setSelectedComponents,
    snapToGridModifier,
    selectedElevation,
    scaleFactor,
    isFloorPlanView,
    setShowOutsideDroppableWarning,
  });

  const { orderTotal, setOrderTotal } = useOrderTotal({
    slug,
    selectedComponents,
    interiorFinish,
    exteriorFinish,
    flooring,
  });

  const [mappedElevations, setMappedElevations] = useState(
    elevationData.filter((elevation) => {
      if (elevation.homePlan === selectedContainer.slug) {
        return elevation;
      }
    })
  );

  useEffect(() => {
    const includesLighting = selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.WRAP_LIGHT
    );
    setHasLighting(includesLighting);
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
    if (slug === CONTAINER_40_SLUG) {
      setScaleFactor(1.75);
    } else {
      setScaleFactor(2.5);
    }
  }, [slug, containerData]);

  // For each elevation change, reset the isSelected state for all components
  useEffect(() => {
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) => ({
        ...component,
        isSelected: false,
      }))
    );
  }, [selectedElevation]);

  // Delay showing the Collision component when there are collisions
  useEffect(() => {
    let timer;
    if (hasCollisions) {
      timer = setTimeout(() => setShowCollision(true), 500);
    } else {
      setShowCollision(false);
    }

    return () => clearTimeout(timer);
  }, [hasCollisions]);

  // Deselect components when clicking outside the component
  useEffect(() => {
    if (show3d) return;

    function handleClickOutside(event) {
      const isInsideDraggable = Object.values(draggableRefs).some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!isInsideDraggable) {
        setSelectedComponents((currentComponents) =>
          currentComponents.map((component) => ({
            ...component,
            isSelected: false,
          }))
        );
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [draggableRefs]);

  return (
    <PageDataContext.Provider
      value={{
        containerHeightIsStandard,
        selectedComponents,
        setSelectedComponents,
        selectedElevation,
        setSelectedElevation,
        orderTotal,
        setOrderTotal,
        showCollision,
        setShowCollision,
        setSelectedElevation,
        draggableRefs,
        hasCollisions,
        selectedElevationIndex,
        setSelectedElevationIndex,
        show3d,
        setShow3d,
        exteriorFinish,
        setExteriorFinish,
        interiorFinish,
        setInteriorFinish,
        showExterior,
        setShowExterior,
        mappedElevations,
        setMappedElevations,
        selectedContainer,
        containerId,
        slug,
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
        hasLighting,
        showDragToMove,
        setShowDragToMove,
        showOutsideDroppableWarning,
        setShowOutsideDroppableWarning,
        dialogOpen,
        setDialogOpen,
        modifiers,
        handleDragStart,
        handleDragEnd,
        handleDragMove,
        handleSelect,
        handleDeleteSelected,
        modifiers,
        interiorIsPlywood,
        interiorIsDrywall,
        interiorIsSprayFoamCeiling,
        interiorIsSprayFoamCeilingWalls,
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

const Content = ({ data }) => {
  return (
    <Theme>
      <Library2dDataProvider>
        <Library3dDataProvider>
          <PageDataProvider data={data}>
            <div className={style.mobileContent}>
              <p>Configure on your desktop for the best experience</p>
              <p>
                For full functionality and a better experience, please visit
                this page on a desktop computer.
              </p>
            </div>
            <div className={style.pageWrapper}>
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                }}
              >
                <Viewer />
                <Sidebar />
                <PriceTotal />
                <OrderSummaryModal />
              </div>
            </div>
          </PageDataProvider>
        </Library3dDataProvider>
      </Library2dDataProvider>
    </Theme>
  );
};

export default Content;
