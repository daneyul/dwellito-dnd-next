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
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';
import useDragHandlers from '@/utils/hooks/useDragHandlers';
import useOrderTotal from '@/utils/hooks/useOrderTotal';

export const PageDataContext = createContext();

const PageDataProvider = ({ children, data }) => {
  const slug = data.slug;

  // 2D Library Data
  const {
    DEFAULT_COMPONENTS,
    snapToGridModifier,
    elevationData,
    containerData,
  } = useContext(Library2dDataContext);

  // 3D Library Data
  const { INTERIOR_FINISH_OPTIONS, EXTERIOR_FINISH_OPTIONS, FLOORING_OPTIONS } =
    useContext(Library3dDataContext);

  // State
  const DEFAULT_ELEVATION = elevationData.find(
    (item) => item.name === ELEVATION_NAMES.RIGHT && item.homePlan === slug
  );
  const [selectedContainerHeight, setSelectedContainerHeight] =
    useState(CONTAINER_STANDARD);
  const containerHeightIsStandard =
    selectedContainerHeight === CONTAINER_STANDARD;
  const [threeDModelLoaded, setThreeDModelLoaded] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const [showExterior, setShowExterior] = useState(true);
  const [cameraReady, setCameraReady] = useState(true);
  const [zipCode, setZipCode] = useState('');
  const [selectedComponents, setSelectedComponents] = useState(
    DEFAULT_COMPONENTS.map((component) => ({
      ...component,
      lastValidPosition: { ...component.position },
    }))
  );
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);
  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});
  const [exteriorFinish, setExteriorFinish] = useState(
    EXTERIOR_FINISH_OPTIONS[0]
  );
  const [interiorFinish, setInteriorFinish] = useState(
    INTERIOR_FINISH_OPTIONS[0]
  );
  const [flooring, setFlooring] = useState(FLOORING_OPTIONS[0]);
  const selectedContainer = containerData.find(
    (container) => container.slug === slug
  );
  const containerId = selectedContainer.id;
  const floorPlan = elevationData.find((elevation) => {
    return (
      elevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      elevation.homePlan === slug
    );
  });
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;
  const [hasLighting, setHasLighting] = useState(false);
  const [showDragToMove, setShowDragToMove] = useState(false);
  const [showOutsideDroppableWarning, setShowOutsideDroppableWarning] =
    useState(false);
const [dialogOpen, setDialogOpen] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(2.5);

  const {
    handleDragStart,
    handleDragEnd,
    handleFpDragStart,
    handleFpDragEnd,
    handleSelect,
    handleDeleteSelected,
    modifiers,
    hasCollisions,
    showCollision,
    setShowCollision
  } = useDragHandlers({
    selectedComponents,
    setSelectedComponents,
    snapToGridModifier,
    selectedElevation,
    scaleFactor,
  });

  const { orderTotal, setOrderTotal } = useOrderTotal({
    slug,
    selectedComponents,
    interiorFinish,
    exteriorFinish,
    flooring,
  });

  const containerSize = () => {
    if (selectedContainer === containerData[0]) {
      return '10';
    } else if (selectedContainer === containerData[1]) {
      return '20';
    } else if (selectedContainer === containerData[2]) {
      return '40';
    }
  };

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
        selectedComponents,
        draggableRefs,
        hasCollisions,
        selectedElevationIndex,
        setSelectedElevationIndex,
        zipCode,
        setZipCode,
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
        handleFpDragStart,
        handleFpDragEnd,
        handleSelect,
        handleDeleteSelected,
        modifiers
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
              <div style={{ position: 'absolute', top: '2rem', left: '2rem' }}>
                <Logo />
              </div>
              <div
                style={{
                  display: 'flex',
                  position: 'relative',
                }}
              >
                <Viewer />
                <Sidebar />
                <OrderSummaryModal trigger={<PriceTotal />} />
              </div>
            </div>
          </PageDataProvider>
        </Library3dDataProvider>
      </Library2dDataProvider>
    </Theme>
  );
};

export default Content;
