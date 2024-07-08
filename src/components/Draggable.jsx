/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc, calculateCSSPos } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import {
  COMPONENT_TYPES,
  CONTAINER_40_SLUG,
  DROPPABLE,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { useCombinedRefs } from '@dnd-kit/utilities';

function useCollidableDraggable({ id, data: customData }) {
  const {
    attributes,
    listeners,
    setNodeRef: setDraggableNodeRef,
    transform,
  } = useDraggable({
    id,
    data: customData,
  });

  const { setNodeRef: setDroppableNodeRef } = useDroppable({
    id,
    data: customData,
  });

  const setNodeRef = useCombinedRefs(setDraggableNodeRef, setDroppableNodeRef);

  return {
    attributes,
    listeners,
    setNodeRef,
    transform,
  };
}

export function Draggable({ id, styles, piece, onSelect, onHover, onLeave }) {
  const {
    scaleFactor,
    show3d,
    containerHeightIsStandard,
    slug,
    selectedElevation,
    setShowDragToMove,
    setShowCollision,
    isFloorPlanView,
  } = useContext(PageDataContext);

  const { attributes, listeners, setNodeRef, transform } =
    useCollidableDraggable({
      id,
      data: { ...piece },
    });

  const { collisions } = useDndContext();

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

  // Calculate CSS position
  const calculatedPos = calculateCSSPos({
    isFloorPlanView,
    isFixed,
    piece,
    scaleFactor,
    adjForContainerHeight,
    selectedElevation,
  });

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        ...calculatedPos,
      }
    : {};

  const combinedStyles = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    ...calculatedPos,
    ...dragStyle,
    ...styles,
    zIndex: 2000,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={combinedStyles}
        {...listeners}
        {...attributes}
        onMouseEnter={() => {
          setIsHovered(true);
          onHover();
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onLeave();
        }}
        onMouseDown={handleMouseDown}
      >
        <img
          src={generateImgSrc(imgSrc())}
          alt={piece.name}
          style={{
            width: `${imgWidth()}px`,
            height: 'auto',
            objectFit: 'fill',
            transform: `rotate(${piece.rotate}deg)`,
            boxShadow:
              isHovered || piece.isSelected
                ? '0px 4px 30px 0px rgba(128, 129, 238, 0.19)'
                : 'none',
            border:
              isHovered || piece.isSelected
                ? '1px solid #2A2CB1'
                : '1px solid transparent',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </>
  );
}
