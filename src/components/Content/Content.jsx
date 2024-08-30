'use client';
import React, { useState, useEffect, createContext } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';
import Viewer from '@/components/Viewer/Viewer';
import Sidebar from '@/components/Sidebar/Sidebar';
import PriceTotal from '@/components/PriceTotal/PriceTotal';
import style from './content.module.scss';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import {
  COMPONENT_NAMES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  CONTAINER_SIZE_STR_10,
  CONTAINER_SIZE_STR_20,
  CONTAINER_SIZE_STR_40,
  CONTAINER_STANDARD,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import useDragHandlers from '@/utils/hooks/useDragHandlers';
import useOrderTotal from '@/utils/hooks/useOrderTotal';
import OrderSummaryModal from '../OrderSummaryModal/OrderSummaryModal';
import {
  getExteriorFinishFromUrl,
  getFlooringFromUrl,
  getInteriorFinishFromUrl,
  getInteriorTrimFromUrl,
  getSelectionsFromUrl,
} from '@/utils/2D/utils';
import {
  INTERIOR_FINISH_OPTIONS,
} from '@/utils/constants/components/interiorData';
import { createSnapModifier } from '@dnd-kit/modifiers';
import { containerData } from '@/utils/constants/containerData';
import { DEFAULT_COMPONENTS } from '@/utils/constants/componentData';
import { elevationData } from '@/utils/constants/elevationData';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriorData';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { INTERIOR_TRIM_OPTIONS } from '@/utils/constants/components/interiorTrimData';
import { MobileModels } from '../Models/MobileModels';
import MobileForm from '../MobileForm/MobileForm';
import { useMediaQuery } from 'react-responsive';
import useInteriorFinishes from '@/utils/hooks/useInteriorFInishes';

export const PageDataContext = createContext();

const PageDataProvider = ({ children, data }) => {
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
      return CONTAINER_SIZE_10;
    } else if (selectedContainer === containerData[1]) {
      return CONTAINER_SIZE_20;
    } else if (selectedContainer === containerData[2]) {
      return CONTAINER_SIZE_40;
    }
  };
  const containerSizeStr = () => {
    if (selectedContainer === containerData[0]) {
      return CONTAINER_SIZE_STR_10;
    } else if (selectedContainer === containerData[1]) {
      return CONTAINER_SIZE_STR_20;
    } else if (selectedContainer === containerData[2]) {
      return CONTAINER_SIZE_STR_40;
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
    snapToGridModifier: createSnapModifier(DIMENSIONS.GRID_SIZE),
    selectedElevation,
    scaleFactor,
    isFloorPlanView,
    setShowOutsideDroppableWarning,
    selectedContainer,
  });

  const { orderTotal, setOrderTotal, interiorFinishPrice } = useOrderTotal({
    containerHeightIsStandard,
    selectedContainer,
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
      (component) =>
        component.name === COMPONENT_NAMES.WRAP_LIGHT ||
        component.name === COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE
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
    if (slug === CONTAINER_SIZE_40) {
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
        interiorFinishes,
        containerHeightIsStandard,
        containerSizeStr,
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

const Content = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Theme>
      <GoogleTagManager gtmId='GTM-NVCQ2ZW3' />
      <PageDataProvider data={data}>
        <div className={style.pageWrapper}>
          <div className={style.content}>
            {isMobile ? (
              <>
                <MobileModels />
                <div className={style.mobileContainer}>
                  <MobileForm />
                </div>
              </>
            ) : (
              <>
                <Viewer />
                <Sidebar />
                <PriceTotal />
                <OrderSummaryModal />
              </>
            )}
          </div>
        </div>
      </PageDataProvider>
    </Theme>
  );
};

export default Content;
