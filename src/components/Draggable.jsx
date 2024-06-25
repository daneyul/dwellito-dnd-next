/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import DeleteBtn from './DeleteBtn/DeleteBtn';
import DragToMove from './DragToMove/DragToMove';
import {
  COMPONENT_TYPES,
  CONTAINER_40_SLUG,
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

  const {
    isOver,
    setNodeRef: setDroppableNodeRef,
  } = useDroppable({
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
    isDragging
  };
}

export function Draggable({ id, styles, piece, onSelect }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useCollidableDraggable({
    id,
    data: { ...piece },
  });

  const { collisions } = useDndContext();

  const { setShowCollision } = useContext(PageDataContext);

  // Filter out the droppable element from collisions
  const filteredCollisions = collisions?.filter(
    (collision) => collision.id !== 'droppable'
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
    selectedComponents,
    show3d,
    handleDeleteSelected,
    containerHeightIsStandard,
    slug,
    selectedElevation,
  } = useContext(PageDataContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    onSelect();
  };

  const isAnyItemSelected = selectedComponents.some(
    (component) => component.isSelected
  );

  // This is for adjusting the top value  based on the container height
  const objTop = () => {
    if (containerHeightIsStandard) {
      if (
        slug !== CONTAINER_40_SLUG &&
        piece.objType !== COMPONENT_TYPES.ELECTRICAL
      ) {
        return piece.position.y;
      } else {
        return piece.position.y / 1.4;
      }
    } else {
      if (slug !== CONTAINER_40_SLUG) {
        return piece.position.y * 5.28;
      } else {
        return piece.position.y * 2.57;
      }
    }
  };

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const imgSrc = isFloorPlanView ? piece.floorPlanImg : piece.imgName;

  const isFixed = piece.fixed;

  // Render on corresponding elevation or render on floor plan view
  if (!piece.elevation.includes(selectedElevation) && !isFloorPlanView) {
    return null;
  }

  // This calculates the CSS positions based on the piece's position and elevation
  const calculateCSSPos = () => {
    if (isFloorPlanView) {
      if (isFixed) {
        if (piece.fixedSide === ELEVATION_NAMES.RIGHT) {
          return {
            bottom: '0',
            right: `${toScale(piece.position.x, scaleFactor)}px`,
            transform: `rotate(90deg) translateX(${piece.position.y}px)`,
          };
        } else if (piece.fixedSide === ELEVATION_NAMES.BACK) {
          return {
            top: `${piece.position.y}px`,
            right: '0',
            transform: 'translateX(50%)',
          };
        } else {
          return {
            left: `${toScale(piece.position.x, scaleFactor)}px`,
            top: "50%",
            transform: "translateY(-50%)"
          };
        }
      } else {
        if (piece.elevation[0].name === ELEVATION_NAMES.LEFT) {
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
            left: `${toScale((piece.position.x + DIMENSIONS.BOUNDARIES.x), scaleFactor)}px`,
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
    } else {
      return {
        left: `${piece.position.x}px`,
        top: `${objTop()}px`,
      };
    }
  };

  const CustomStyle = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    width: `${toScale(piece.objWidth, scaleFactor)}px`,
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
  };

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
          src={generateImgSrc(imgSrc)}
          alt={piece.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </div>
      {isAnyItemSelected && !show3d && (
        <DeleteBtn
          onDeleteSelected={handleDeleteSelected}
          isFloorPlanView={isFloorPlanView}
        />
      )}
      {isHovered && !show3d && !isAnyItemSelected && !piece.fixed && (
        <DragToMove isFloorPlanView={isFloorPlanView} />
      )}
    </>
  );
}
