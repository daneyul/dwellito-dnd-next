/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_40_SLUG,
  DROPPABLE,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { DIMENSIONS } from '@/utils/constants/dimensions';
import { useCombinedRefs } from '@dnd-kit/utilities';

function useCollidableDraggable({ id, data: customData, disabled }) {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id,
    data: customData,
    disabled,
  });

  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id,
    data: customData,
    disabled,
  });

  const setNodeRef = useCombinedRefs(setDraggableNodeRef, setDroppableNodeRef);

  return {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  };
}

export function Draggable({ id, styles, piece, onSelect, isAnyItemSelected }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useCollidableDraggable({
      id,
      data: { ...piece }
    });

  const { collisions } = useDndContext();

  const { setShowCollision, isFloorPlanView } = useContext(PageDataContext);

  const excludedDroppables = [
    DROPPABLE,
    DROPPABLE_LEFT,
    DROPPABLE_RIGHT,
    DROPPABLE_BACK,
    DROPPABLE_MIDDLE,
  ];

  // Filter out the droppable element from collisions
  const filteredCollisions = collisions?.filter(
    (collision) => !excludedDroppables.includes(collision.id)
  );

  useEffect(() => {
    if (filteredCollisions?.length > 1) {
      setShowCollision(true);
    } else {
      setShowCollision(false);
    }
  }, [collisions]);

  const {
    scaleFactor,
    show3d,
    containerHeightIsStandard,
    slug,
    selectedElevation,
    setShowDragToMove
  } = useContext(PageDataContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    onSelect();
  };

  // This is for adjusting the top value based on the container height
  const adjForContainerHeight = (value) => {
    if (containerHeightIsStandard) {
      if (slug !== CONTAINER_40_SLUG) {
        return value / 1.17;
      } else {
        return value / 1.5;
      }
    } else {
      if (slug !== CONTAINER_40_SLUG) {
        return value / 1.17;
      } else {
        return value / 1.5;
      }
    }
  };

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  const imgSrc = () => {
    if (piece.objType === COMPONENT_TYPES.ELECTRICAL) {
      if (isFloorPlanView) {
        return piece.floorPlanImg;
      } else if (piece.alwaysShowOn.includes(selectedElevation.name)) {
        if (!!piece.fixedSide && selectedElevation.name !== piece.fixedSide) {
          return piece.sideImg;
        } else {
          return piece.frontImg;
        }
      } else {
        return piece.frontImg;
      }
    } else if (selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN) {
      return piece.floorPlanImg;
    } else {
      return piece.imgName;
    }
  };

  const isFixed = piece.fixed;

  // Render on corresponding elevation or render on floor plan view
  if (
    !piece.alwaysShowOn?.includes(selectedElevation.name) &&
    !piece.elevation.includes(selectedElevation) &&
    !isFloorPlanView
  ) {
    return null;
  }

  // This calculates the CSS positions based on the piece's position and elevation
  const calculateCSSPos = () => {
    if (isFloorPlanView) {
      if (isFixed) {
        if (piece.fixedSide === ELEVATION_NAMES.RIGHT) {
          return {
            bottom: '0',
            right: `${adjForContainerHeight(
              piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)
            )}px`,
            transform: `rotate(90deg) translateX(10px)`,
          };
        } else if (piece.fixedSide === ELEVATION_NAMES.BACK) {
          return {
            bottom: `${adjForContainerHeight(
              piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)
            )}px`,
            right: '0',
            transform: 'translateX(50%)',
          };
        } else if (piece.name === COMPONENT_NAMES.ROOF_VENT) {
          return {
            left: `${
              piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)
            }px`,
            top: '50%',
            transform: 'translateY(-50%)',
          };
        } else if (piece.name === COMPONENT_NAMES.WRAP_LIGHT) {
          return {
            left: `50%`,
            top: '50%',
            transform: 'translateY(-50%) translateX(-50%)',
          };
        }
      } else {
        if (
          piece.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
          piece.name === COMPONENT_NAMES.OUTLET
        ) {
          return {
            left: `${piece.position.x}px`,
            top: `${piece.position.y}px`,
          };
        } else if (piece.elevation[0].name === ELEVATION_NAMES.LEFT) {
          return {
            right: `${
              piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)
            }px`,
            top: '10px',
            transform: 'rotate(180deg) translateY(100%)',
          };
        } else if (piece.elevation[0].name === ELEVATION_NAMES.RIGHT) {
          return {
            bottom: '10px',
            transform: 'translateY(100%)',
            left: `${
              piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)
            }px`,
          };
        } else if (piece.elevation[0].name === ELEVATION_NAMES.BACK) {
          return {
            bottom: `calc(${piece.position.x}px + ${toScale(
              DIMENSIONS.BOUNDARIES.x,
              scaleFactor
            )}px)`,
            right: `0`,
            transformOrigin: 'right bottom',
            transform: `rotate(270deg) translateX(100%) translateY(calc(100% - 12px)`,
          };
        }
      }
    } else if (isFixed && !!piece.alwaysShowOn) {
      if (!!piece.fixedSide && selectedElevation.name === piece.fixedSide) {
        // For fixed components on elevation views, show front view
        if (piece.name === COMPONENT_NAMES.EXHAUST_FAN) {
          return {
            right: `${adjForContainerHeight(piece.position.x)}px`,
            top: `${adjForContainerHeight(piece.position.y)}px`,
          };
        } else {
          return {
            left: `${adjForContainerHeight(piece.position.x)}px`,
            top: `${adjForContainerHeight(piece.position.y)}px`,
          };
        }
      } else if (!piece.fixedSide) {
        if (selectedElevation.name === ELEVATION_NAMES.RIGHT) {
          return {
            left: `${piece.position.x}px`,
            top: '3px',
            transform: 'translateY(-100%)',
          };
        } else if (selectedElevation.name === ELEVATION_NAMES.LEFT) {
          return {
            right: `${piece.position.x}px`,
            top: '3px',
            transform: 'translateY(-100%)',
          };
        } else if (selectedElevation.name === ELEVATION_NAMES.BACK) {
          return {
            left: '50%',
            top: '3px',
            transform: 'translateX(-50%) translateY(-100%)',
          };
        }
      } else if (selectedElevation.name === ELEVATION_NAMES.RIGHT) {
        return {
          right: `${4 - toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)}px`,
          top: `${piece.position.y}px`,
          transform: 'translateX(100%)',
        };
      } else if (selectedElevation.name === ELEVATION_NAMES.LEFT) {
        return {
          left: `${3 - toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)}px`,
          top: `${piece.position.y}px`,
          transform: 'translateX(-100%) scaleX(-1)',
        };
      } else {
        return {
          left: `${piece.position.x}px`,
          top: `${piece.position.y}px`,
        };
      }
    } else {
      return {
        left: `${piece.position.x}px`,
        top: `${adjForContainerHeight(piece.position.y)}px`,
      };
    }
  };

  const imgWidth = () => {
    if (
      selectedElevation.name !== piece.fixedSide &&
      !!piece.objThickness &&
      !isFloorPlanView
    ) {
      return toScale(piece.objThickness, scaleFactor);
    } else {
      return toScale(piece.objWidth, scaleFactor);
    }
  };

  const CustomStyle = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    width: `${imgWidth()}px`,
    height: `auto`,
    ...calculateCSSPos(),
    boxShadow:
      isHovered || piece.isSelected
        ? '0px 4px 30px 0px rgba(128, 129, 238, 0.19)'
        : 'none',
    border:
      isHovered || piece.isSelected
        ? '1px solid #2A2CB1'
        : '1px solid transparent',
    boxSizing: 'border-box',
    zIndex: 2000
  };

  useEffect(() => {
    if (isHovered && !show3d && !isAnyItemSelected && !piece.fixed) {
      if (
        (selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN &&
          piece.objType === COMPONENT_TYPES.ELECTRICAL) ||
        (selectedElevation.name !== ELEVATION_NAMES.FLOOR_PLAN &&
          piece.objType !== COMPONENT_TYPES.ELECTRICAL)
      ) {
        setShowDragToMove(true);
      }
    } else {
      setShowDragToMove(false);
    }
  }, [isHovered, show3d, isAnyItemSelected, piece, setShowDragToMove]);

  return (
    <>
      <div
        ref={setNodeRef}
        style={{ ...dragStyle, ...CustomStyle, ...styles }}
        {...listeners}
        {...attributes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
      >
        <img
          src={generateImgSrc(imgSrc())}
          alt={piece.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </div>
    </>
  );
}
