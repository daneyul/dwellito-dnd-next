import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import { checkCloseness, snapToIncrement } from '@/utils/2D/utils';
import { useState } from 'react';
import { COMPONENT_NAMES,
  COMPONENT_TYPES,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES, } from '@/utils/constants/names/names';

const useDragHandlers = ({
  selectedComponents,
  setSelectedComponents,
  snapToGridModifier,
  selectedElevation,
  scaleFactor,
  isFloorPlanView,
  setShowOutsideDroppableWarning,
}) => {
  const [modifiers, setModifiers] = useState([]);
  const [hasCollisions, setHasCollisions] = useState(false);
  const [showCollision, setShowCollision] = useState(false);
  const [, setIsTooClose] = useState(false);

  // Modifiers
  const defaultModifiers = [restrictToParentElement, snapToGridModifier];
  const doorWindowModifiers = [...defaultModifiers, restrictToHorizontalAxis];
  const fixedModifiers = [restrictToHorizontalAxis, restrictToVerticalAxis];

  const [initialPosition, setInitialPosition] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleDragStart = (event) => {
    const { active } = event;
    const draggedItem = selectedComponents.find(
      (item) => item.id === active.id
    );

    if (!draggedItem) return null;
    

    const isOnElevationRight =
      draggedItem.elevation[0].name === ELEVATION_NAMES.RIGHT;
    const isOnElevationLeft =
      draggedItem.elevation[0].name === ELEVATION_NAMES.LEFT;
    const isOnElevationBack =
      draggedItem.elevation[0].name === ELEVATION_NAMES.BACK;

    const isDoor = draggedItem.objType === COMPONENT_TYPES.DOOR;
    const isWindow = draggedItem.objType === COMPONENT_TYPES.WINDOW;
    const isPartition = draggedItem.objType === COMPONENT_TYPES.PARTITION;
    const isFixed = draggedItem.fixed;
    const isDraggableOnFloorPlan =
      draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedItem.name === COMPONENT_NAMES.OUTLET

    // Store the initial position in local state
    setInitialPosition({ ...draggedItem.position });

    // Set modifiers
    if (isFloorPlanView) {
      if (isFixed) {
        setModifiers([...fixedModifiers]);
      } else if (isOnElevationRight || isOnElevationLeft) {
        if (isDoor) {
          setModifiers([
            ...defaultModifiers,
            restrictToHorizontalAxis,
            snapToIncrement({ increment: 10.9, scaleFactor }),
          ]);
        } else if (isWindow) {
          setModifiers([
            ...defaultModifiers,
            restrictToHorizontalAxis,
            snapToIncrement({ increment: 5.45, scaleFactor }),
          ]);
        } else {
          setModifiers([...defaultModifiers, restrictToHorizontalAxis]);
        }
      } else if (isOnElevationBack) {
        if (isDoor) {
          setModifiers([
            ...defaultModifiers,
            restrictToVerticalAxis,
            snapToIncrement({ increment: 10.9, scaleFactor }),
          ]);
        } else if (isWindow) {
          setModifiers([
            ...defaultModifiers,
            restrictToVerticalAxis,
            snapToIncrement({ increment: 5.45, scaleFactor }),
          ]);
        } else {
          setModifiers([...defaultModifiers, restrictToVerticalAxis]);
        }
      } else if (isPartition) {
        setModifiers([...defaultModifiers, restrictToHorizontalAxis]);
      } else {
        setModifiers([]);
      }
    } else if (isDoor) {
      setModifiers([
        ...doorWindowModifiers,
        snapToIncrement({ increment: 10.9, scaleFactor }),
      ]);
    } else if (isWindow) {
      setModifiers([
        ...doorWindowModifiers,
        snapToIncrement({ increment: 5.45, scaleFactor }),
      ]);
    } else if (isFixed) {
      setModifiers([...fixedModifiers]);
    } else if (isDraggableOnFloorPlan) {
      setModifiers([]);
    } else {
      setModifiers([...defaultModifiers]);
    }
  };

  const handleDragEnd = (event) => {
    const { active, delta, over } = event;
    const draggedId = active.id;
    const draggedItem = selectedComponents.find(
      (component) => component.id === draggedId
    );
  
    if (!initialPosition || !draggedItem) return;
  
    const isOnElevationRight =
      draggedItem.elevation[0].name === ELEVATION_NAMES.RIGHT;
    const isOnElevationLeft =
      draggedItem.elevation[0].name === ELEVATION_NAMES.LEFT;
    const isOnElevationBack =
      draggedItem.elevation[0].name === ELEVATION_NAMES.BACK;
    const isOnElevationFront =
      draggedItem.elevation[0].name === ELEVATION_NAMES.FRONT;
  
    const isDraggableOnFloorPlan =
      draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedItem.name === COMPONENT_NAMES.OUTLET ||
      draggedItem.name === COMPONENT_NAMES.INDOOR_OUTDOOR_FAN;
  
    const isOutsideBounds =
      !over || ![DROPPABLE_LEFT, DROPPABLE_RIGHT, DROPPABLE_BACK].includes(over.id);
  
    if (isDraggableOnFloorPlan && isOutsideBounds) {
      // Reset position of heater or outlet if outside droppable area
      setSelectedComponents((prevComponents) =>
        prevComponents.map((component) =>
          component.id === draggedId
            ? {
                ...component,
                position: { x: initialPosition.x, y: initialPosition.y },
              }
            : component
        )
      );
      setShowOutsideDroppableWarning(false);
    } else {
      // Update position of dragged component based on the elevation
      let updatedPieces = selectedComponents.map((piece) => {
        if (piece.id === draggedId) {
          if (isFloorPlanView) {
            if (isOnElevationRight) {
              // If elevation is right, update the x position
              return {
                ...piece,
                position: {
                  x: initialPosition.x + delta.x,
                  y: initialPosition.y + delta.y,
                }
              };
            } else if (isOnElevationLeft) {
              // If elevation is left, update the x position in reverse
              return {
                ...piece,
                position: {
                  x: initialPosition.x - delta.x,
                  y: initialPosition.y + delta.y,
                }
              };
            } else if (isOnElevationBack) {
              // If elevation is back, update the x position based on delta.y
              return {
                ...piece,
                position: {
                  x: initialPosition.x - delta.y,
                  y: initialPosition.y,
                }
              };
            } else if (isOnElevationFront) {
              return {
                ...piece,
                position: {
                  x: initialPosition.x + delta.y,
                  y: initialPosition.y,
                }
              };
            } else {
              // General case for floor plan view
              return {
                ...piece,
                position: {
                  x: initialPosition.x + delta.x,
                  y: initialPosition.y + delta.y,
                }
              };
            }
          } else {
            // Handle non-floor plan views
            if (isOnElevationLeft) {
              // If elevation is left, update the x position in reverse
              return {
                ...piece,
                position: {
                  x: initialPosition.x - delta.x,
                  y: initialPosition.y + delta.y,
                }
              };
            } else {
              // General case for non-floor plan view
              return {
                ...piece,
                position: {
                  x: initialPosition.x + delta.x,
                  y: initialPosition.y + delta.y,
                }
              };
            }
          }
        }
        return piece;
      });
  
      // Reset collision and closeness flags
      updatedPieces = updatedPieces.map((piece) => ({
        ...piece,
        isColliding: false,
        isTooClose: false,
      }));
  
      // Check for collisions and closeness
      updatedPieces.forEach((piece, index) => {
        if (piece.id !== draggedId) {
          const draggedPiece = updatedPieces.find(({ id }) => id === draggedId);
          if (!draggedPiece) return;
  
          if (piece.objType !== COMPONENT_TYPES.PARTITION) {
            if (
              checkCloseness(
                draggedPiece,
                piece,
                selectedElevation,
                scaleFactor
              )
            ) {
              updatedPieces[index].isColliding = true;
              const draggedPieceIndex = updatedPieces.findIndex(
                ({ id }) => id === draggedId
              );
              updatedPieces[draggedPieceIndex].isColliding = true;
            }
  
            if (
              checkCloseness(
                draggedPiece,
                piece,
                selectedElevation,
                scaleFactor
              )
            ) {
              updatedPieces[index].isTooClose = true;
              const draggedPieceIndex = updatedPieces.findIndex(
                ({ id }) => id === draggedId
              );
              updatedPieces[draggedPieceIndex].isTooClose = true;
            }
          }
        }
      });
  
      setSelectedComponents(updatedPieces);
  
      // Set collision and closeness states
      const collisionDetected = updatedPieces.some((piece) => piece.isColliding);
      const closenessDetected = updatedPieces.some((piece) => piece.isTooClose);
      setHasCollisions(collisionDetected);
      setIsTooClose(closenessDetected);
    }
  
    // Reset the local state after drag ends
    setInitialPosition(null);
  };  

  const handleDragMove = (event) => {
    const { over, active } = event;
    const draggedComponent = selectedComponents.find(
      (component) => component.id === active.id
    );

    if (
      draggedComponent.moveableInFloorPlan && draggedComponent.objType !== COMPONENT_TYPES.PARTITION
    ) {
      const isOutsideDroppable = ![
        DROPPABLE_LEFT,
        DROPPABLE_RIGHT,
        DROPPABLE_BACK,
      ].includes(over?.id);

      setShowOutsideDroppableWarning(isOutsideDroppable);
    }
  };

  const handleSelect = (selectedId) => {
    const componentToSelect = selectedComponents.find(
      (component) => component.id === selectedId
    );
  
    // If the clicked component is already selected
    if (selectedComponent?.id === selectedId) {
      // Check if the position has changed
      const hasMoved =
        selectedComponent.position.x !== initialPosition?.x ||
        selectedComponent.position.y !== initialPosition?.y;
  
      if (!hasMoved) {
        // If the component has NOT moved, deselect it
        setSelectedComponent(null);
      }
    } else {
      // Select the new component
      setSelectedComponent(componentToSelect);
    }
  };
  

  const handleDeleteSelected = () => {
    if (!selectedComponent) return;
  
    setSelectedComponents((prevComponents) => {
      // Filter out the selected component
      return prevComponents.filter((component) => component.id !== selectedComponent.id);
    });
  
    // Clear the local selectedComponent state
    handleSelect(null);
  };

  return {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    handleSelect,
    handleDeleteSelected,
    modifiers,
    hasCollisions,
    showCollision,
    setShowCollision,
    selectedComponent,
    setSelectedComponent
  };
};

export default useDragHandlers;
