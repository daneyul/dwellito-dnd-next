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

    const isDoor = draggedItem.objType === COMPONENT_TYPES.DOOR;
    const isWindow = draggedItem.objType === COMPONENT_TYPES.WINDOW;
    const isFixed = draggedItem.fixed;
    const isHeaterOrOutlet =
      draggedItem.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      draggedItem.name === COMPONENT_NAMES.OUTLET;

    const floorPlan = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

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

    if (floorPlan) {
      if (draggedItem.objType !== COMPONENT_TYPES.ELECTRICAL || isFixed) {
        setModifiers([...fixedModifiers]);
      } else {
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

    const floorPlan = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;
    const isOutsideFloorPlanBounds =
      !over ||
      ![DROPPABLE_LEFT, DROPPABLE_RIGHT, DROPPABLE_BACK].includes(over.id);

    if (isHeaterOrOutlet && isOutsideFloorPlanBounds) {
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
