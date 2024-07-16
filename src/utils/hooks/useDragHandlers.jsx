import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import { checkCloseness, snapToIncrement } from '@/utils/2D/utils';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '../constants/names';
import { useState } from 'react';

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

  const handleDragStart = (event) => {
    const { active } = event;
    const draggedItem = selectedComponents.find(
      (item) => item.id === active.id
    );

    if (!draggedItem) return null;

    const isOnElevationRight = draggedItem.elevation[0].name === ELEVATION_NAMES.RIGHT;
    const isOnElevationLeft = draggedItem.elevation[0].name === ELEVATION_NAMES.LEFT;
    const isOnElevationBack = draggedItem.elevation[0].name === ELEVATION_NAMES.BACK;

    const isDoor = draggedItem.objType === COMPONENT_TYPES.DOOR;
    const isWindow = draggedItem.objType === COMPONENT_TYPES.WINDOW;
    const isFixed = draggedItem.fixed;
    const isHeaterOrOutlet =
      draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedItem.name === COMPONENT_NAMES.OUTLET;

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

    // Set modifiers
    if (isFloorPlanView) {
      if (isFixed) {
        setModifiers([...fixedModifiers]);
      } else if (isOnElevationRight || isOnElevationLeft) {
        if (isDoor) {
          setModifiers([...defaultModifiers, restrictToHorizontalAxis, snapToIncrement(11 * scaleFactor)]);
        } else if (isWindow) {
          setModifiers([...defaultModifiers, restrictToHorizontalAxis, snapToIncrement(6 * scaleFactor)]);
        } else {
          setModifiers([...defaultModifiers, restrictToHorizontalAxis]);
        }
      } else if (isOnElevationBack) {
        if (isDoor) {
          setModifiers([...defaultModifiers, restrictToVerticalAxis, snapToIncrement(11 * scaleFactor)]);
        } else if (isWindow) {
          setModifiers([...defaultModifiers, restrictToVerticalAxis, snapToIncrement(6 * scaleFactor)]);
        } else {
          setModifiers([...defaultModifiers, restrictToVerticalAxis]);
        }
      } else {
        console.log('here')
        setModifiers([]);
      }
    } else if (isDoor) {
      setModifiers([...doorWindowModifiers, snapToIncrement(11 * scaleFactor)]);
    } else if (isWindow) {
      setModifiers([...doorWindowModifiers, snapToIncrement(6 * scaleFactor)]);
    } else if (isFixed) {
      setModifiers([...fixedModifiers]);
    } else if (isHeaterOrOutlet) {
      setModifiers([]);
    } else {
      setModifiers([...defaultModifiers]);
    }
  };

  const handleDragEnd = (event) => {
    const { over, active } = event;
    const draggedId = active.id;
    const draggedItem = selectedComponents.find(
      (component) => component.id === draggedId
    );

    if (!draggedItem) return null;

    const isOnElevationRight = draggedItem.elevation[0].name === ELEVATION_NAMES.RIGHT;
    const isOnElevationLeft = draggedItem.elevation[0].name === ELEVATION_NAMES.LEFT;
    const isOnElevationBack = draggedItem.elevation[0].name === ELEVATION_NAMES.BACK;

    const isHeaterOrOutlet =
      draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedItem.name === COMPONENT_NAMES.OUTLET;

    const isOutsideBounds =
      !over ||
      ![DROPPABLE_LEFT, DROPPABLE_RIGHT, DROPPABLE_BACK].includes(over.id);

    
    if (isHeaterOrOutlet && isOutsideBounds) {
      // Reset position of heater or outlet if outside droppable area
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
      setShowOutsideDroppableWarning(false);
    } else {
      // Update position of dragged component
      let updatedPieces = selectedComponents.map((piece) => {
        if (piece.id === draggedId) {
          if (isFloorPlanView) {
            // If floor plan view
            if (isOnElevationRight) {
              // If elevation is right, update the x position
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
            } else if (isOnElevationLeft) {
              // If elevation is left, update the x position in reverse
              return {
                ...piece,
                position: {
                  x: piece.position.x - event.delta.x,
                  y: piece.position.y + event.delta.y,
                },
                lastValidPosition: {
                  x: piece.position.x -event.delta.x,
                  y: piece.position.y + event.delta.y,
                },
              };
            } else if (isOnElevationBack) {
              // If elevation is back, update the x position based on the delta.y
              return {
                ...piece,
                position: {
                  x: piece.position.x - event.delta.y,
                  y: piece.position.y
                },
                lastValidPosition: {
                  x: piece.position.x - event.delta.y,
                  y: piece.position.y
                },
              };
            } else {
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
          } else {
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
          if (!draggedPiece) return null;

          if (
            checkCloseness(draggedPiece, piece, selectedElevation, scaleFactor)
          ) {
            updatedPieces[index].isColliding = true;
            const draggedPieceIndex = updatedPieces.findIndex(
              ({ id }) => id === draggedId
            );
            updatedPieces[draggedPieceIndex].isColliding = true;
          }

          if (
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

      // Set collision and closeness states
      const collisionDetected = updatedPieces.some(
        (piece) => piece.isColliding
      );
      const closenessDetected = updatedPieces.some((piece) => piece.isTooClose);
      setHasCollisions(collisionDetected);
      setIsTooClose(closenessDetected);
    }
  };

  const handleDragMove = (event) => {
    const { over, active } = event;
    const draggedComponent = selectedComponents.find(
      (component) => component.id === active.id
    );

    if (
      draggedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedComponent.name === COMPONENT_NAMES.OUTLET
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
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) => {
        if (component.id === selectedId) {
          return { ...component, isSelected: !component.isSelected };
        } else {
          return { ...component, isSelected: false };
        }
      })
    );
  };

  const handleDeleteSelected = () => {
    const selectedIsVent = selectedComponents.find(
      (component) =>
        component.objType === COMPONENT_TYPES.VENT && component.isSelected
    );

    setSelectedComponents((prevComponents) => {
      if (selectedIsVent) {
        return prevComponents.filter(
          (component) =>
            !component.isSelected &&
            component.name !== COMPONENT_NAMES.ROOF_VENT
        );
      } else {
        return prevComponents.filter((component) => !component.isSelected);
      }
    });
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
  };
};

export default useDragHandlers;
