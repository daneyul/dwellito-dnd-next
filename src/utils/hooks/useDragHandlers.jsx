import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
  restrictToParentElement,
} from '@dnd-kit/modifiers';

import { checkCloseness, snapToIncrement } from '@/utils/2D/utils';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
} from '../constants/names';
import { useEffect, useState } from 'react';

const useDragHandlers = ({
  selectedComponents,
  setSelectedComponents,
  snapToGridModifier,
  selectedElevation,
  scaleFactor,
}) => {
  const [modifiers, setModifiers] = useState([]);
  const [hasCollisions, setHasCollisions] = useState(false);
  const [showCollision, setShowCollision] = useState(false);
  const [, setIsTooClose] = useState(false);

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
    } else if (
      (draggedItem && draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER) ||
      draggedItem.name === COMPONENT_NAMES.OUTLET
    ) {
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
      // Return to last valid position if dragged outside of floor plan bounding boxes
      draggedComponent &&
      (draggedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
        draggedComponent.name === COMPONENT_NAMES.OUTLET) &&
      (!over ||
        ![DROPPABLE_LEFT, DROPPABLE_RIGHT, DROPPABLE_BACK].includes(over.id))
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
      setShowOutsideDroppableWarning(false);
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
        isColliding: false,
        isTooClose: false,
      }));

      updatedPieces.forEach((piece, index) => {
        if (piece.id !== draggedId) {
          const draggedPiece = updatedPieces.find(({ id }) => id === draggedId);

          if (
            draggedPiece &&
            checkCloseness(draggedPiece, piece, selectedElevation, scaleFactor)
          ) {
            updatedPieces[index].isColliding = true;
            const draggedPieceIndex = updatedPieces.findIndex(
              ({ id }) => id === draggedId
            );
            updatedPieces[draggedPieceIndex].isColliding = true;
          }

          // Check for closeness and update the state accordingly
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

      // Update any other relevant state, such as flags for collision or closeness
      const collisionDetected = updatedPieces.some(
        (piece) => piece.isColliding
      );
      const closenessDetected = updatedPieces.some((piece) => piece.isTooClose);
      setHasCollisions(collisionDetected);
      setIsTooClose(closenessDetected);
    }
  };

  const handleFpDragStart = () => {
    return null;
  };

  const handleFpDragEnd = () => {
    return null;
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
    handleFpDragStart,
    handleFpDragEnd,
    handleSelect,
    handleDeleteSelected,
    modifiers,
    hasCollisions,
    showCollision,
    setShowCollision,
  };
};

export default useDragHandlers;
