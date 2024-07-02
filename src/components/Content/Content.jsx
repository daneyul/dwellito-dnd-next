'use client';
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import { checkCloseness, snapToIncrement } from '@/utils/2D/utils';
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';
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
  COMPONENT_TYPES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  CONTAINER_STANDARD,
  DROPPABLE_LEFT,
  DROPPABLE_RIGHT,
  DROPPABLE_BACK,
  ELEVATION_NAMES,
  INTERIOR_FINISH_NAMES,
} from '@/utils/constants/names';

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
  const [isHovered, setIsHovered] = useState(false);
  const [selectedContainerHeight, setSelectedContainerHeight] =
    useState(CONTAINER_STANDARD);
  const containerHeightIsStandard =
    selectedContainerHeight === CONTAINER_STANDARD;
  const [threeDModelLoaded, setThreeDModelLoaded] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const [showExterior, setShowExterior] = useState(true);
  const [cameraReady, setCameraReady] = useState(true);
  const [hasCollisions, setHasCollisions] = useState(false);
  const [showYourOrder, setShowYourOrder] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [, setIsTooClose] = useState(false);
  const [showCollision, setShowCollision] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState(
    DEFAULT_COMPONENTS.map(component => ({
      ...component,
      lastValidPosition: { ...component.position }
    }))
  );
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);
  const [modifiers, setModifiers] = useState([]);
  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});
  const [orderTotal, setOrderTotal] = useState(0);
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

  const [scaleFactor, setScaleFactor] = useState(2.5);

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

  const toggleOrder = () => {
    setShowYourOrder(!showYourOrder);
  };

  // Calculate the total price of all selected components
  useEffect(() => {
    const interiorFinishPrice = () => {
      if (interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING) {
        if (slug === CONTAINER_10_SLUG) {
          return interiorFinish.price10;
        } else if (slug === CONTAINER_20_SLUG) {
          return interiorFinish.price20;
        } else if (slug === CONTAINER_40_SLUG) {
          return interiorFinish.price40;
        }
      } else if (
        interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS
      ) {
        if (slug === CONTAINER_10_SLUG) {
          return interiorFinish.price10;
        } else if (slug === CONTAINER_20_SLUG) {
          return interiorFinish.price20S;
        } else if (slug === CONTAINER_40_SLUG) {
          return interiorFinish.price40S;
        }
      } else {
        return interiorFinish.price;
      }
    };

    const flooringPrice = () => {
      if (slug === CONTAINER_10_SLUG) {
        return flooring.price10;
      } else if (slug === CONTAINER_20_SLUG) {
        return flooring.price20;
      } else if (slug === CONTAINER_40_SLUG) {
        return flooring.price40;
      }
    };

    const total =
      selectedComponents.reduce(
        (accumulator, currentComponent) => accumulator + currentComponent.price,
        0
      ) +
      interiorFinishPrice() +
      exteriorFinish.price +
      flooringPrice();

    setOrderTotal(total);
  }, [selectedComponents, interiorFinish, exteriorFinish, flooring]);

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

  const handleDragStart = (event) => {
    const { active } = event;
    const draggedItem = selectedComponents.find(
      (item) => item.id === active.id
    );
  
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) =>
        component.id === active.id
          ? {
              ...component,
              lastValidPosition: { ...component.position },
            }
          : component
      )
    );
  
    const defaultModifiers = [restrictToParentElement, snapToGridModifier];
    const doorWindowModifiers = [...defaultModifiers, restrictToHorizontalAxis];
    const fixedModifiers = [restrictToHorizontalAxis, restrictToVerticalAxis];
  
    if (
      selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
      draggedItem.objType !== COMPONENT_TYPES.ELECTRICAL
    ) {
      setModifiers([...fixedModifiers]);
    } else if (draggedItem && draggedItem.objType === COMPONENT_TYPES.DOOR) {
      setModifiers([...doorWindowModifiers, snapToIncrement(11 * scaleFactor)]);
    } else if (draggedItem && draggedItem.objType === COMPONENT_TYPES.WINDOW) {
      setModifiers([...doorWindowModifiers, snapToIncrement(6 * scaleFactor)]);
    } else if (draggedItem && draggedItem.fixed) {
      setModifiers([...fixedModifiers]);
    } else if (draggedItem && draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER || draggedItem.name === COMPONENT_NAMES.OUTLET) {
      setModifiers();
    } else {
      setModifiers([...defaultModifiers]);
    }
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const draggedId = active.id;
    const draggedComponent = selectedComponents.find(
      (component) => component.id === draggedId
    );
  
    if (
      draggedComponent &&
      draggedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER &&
      (!over || ![DROPPABLE_LEFT, DROPPABLE_RIGHT, DROPPABLE_BACK].includes(over.id))
    ) {
      setSelectedComponents((prevComponents) =>
        prevComponents.map((component) =>
          component.id === draggedId
            ? {
                ...component,
                position: { ...component.lastValidPosition },
              }
            : component
        )
      );
    } else {
      let updatedPieces = selectedComponents.map((piece) => {
        if (piece.id === draggedId) {
          return {
            ...piece,
            position: {
              x: piece.position.x + event.delta.x,
              y: piece.position.y + event.delta.y,
            },
            lastValidPosition: {
              x: piece.position.x + event.delta.x,
              y: piece.position.y + event.delta.y,
            },
          };
        }
        return piece;
      });
  
      updatedPieces = updatedPieces.map((piece) => ({
        ...piece,
        isTooClose: false,
      }));
  
      updatedPieces.forEach((piece, index) => {
        if (piece.id !== draggedId) {
          const draggedPiece = updatedPieces.find(({ id }) => id === draggedId);
  
          if (
            draggedPiece &&
            checkCloseness(draggedPiece, piece, selectedElevation, scaleFactor)
          ) {
            updatedPieces[index].isTooClose = true;
            const draggedPieceIndex = updatedPieces.findIndex(
              ({ id }) => id === draggedId
            );
            updatedPieces[draggedPieceIndex].isTooClose = true;
          }
        }
      });
  
      setSelectedComponents(updatedPieces);
  
      const collisionDetected = updatedPieces.some((piece) => piece.isColliding);
      const closenessDetected = updatedPieces.some((piece) => piece.isTooClose);
      setHasCollisions(collisionDetected);
      setIsTooClose(closenessDetected);
    }
  };

  const handleSelect = (selectedId) => {
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) => {
        // Check if the current component is the one being selected
        if (component.id === selectedId) {
          // Toggle the isSelected state for the component
          return { ...component, isSelected: !component.isSelected };
        } else {
          // Set isSelected to false for all other components
          return { ...component, isSelected: false };
        }
      })
    );
  };

  const handleDeleteSelected = () => {
    setSelectedComponents((prevComponents) =>
      prevComponents.filter((component) => !component.isSelected)
    );
  };

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
        handleDragStart,
        handleDragEnd,
        showCollision,
        setShowCollision,
        setSelectedElevation,
        selectedComponents,
        draggableRefs,
        hasCollisions,
        setHasCollisions,
        modifiers,
        showYourOrder,
        toggleOrder,
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
        handleSelect,
        handleDeleteSelected,
        cameraReady,
        setCameraReady,
        containerSize,
        floorPlan,
        isFloorPlanView,
        hasLighting,
        isHovered,
        setIsHovered,
        showDragToMove,
        setShowDragToMove,
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
                <PriceTotal />
              </div>
            </div>
          </PageDataProvider>
        </Library3dDataProvider>
      </Library2dDataProvider>
    </Theme>
  );
};

export default Content;
