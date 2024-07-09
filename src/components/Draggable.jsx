/* eslint-disable @next/next/no-img-element */
import React, { useContext, useEffect, useState } from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc, calculateCSSPos, deScale } from '../utils/2D/utils';
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
import { DIMENSIONS } from '@/utils/constants/dimensions';

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
    containerHeightIsStandard,
    slug,
    selectedElevation,
    setShowCollision,
    isFloorPlanView,
  } = useContext(PageDataContext);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform: dragTransform,
  } = useCollidableDraggable({
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
        return value;
      } else {
        return value / 1.5;
      }
    } else {
      if (slug !== CONTAINER_40_SLUG) {
        return value + toScale(12, scaleFactor);
      } else {
        return value / 1.5 + toScale(12, scaleFactor);
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

  const combinedTransforms = [
    calculatedPos.transform,
    dragTransform
      ? `translate3d(${dragTransform.x}px, ${dragTransform.y}px, 0)`
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  const combinedStyles = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    ...calculatedPos,
    transform: combinedTransforms,
    ...styles,
    zIndex: 2000,
  };

  // const showDimensions = dragTransform ? false : !piece.fixed && isHovered;

  // const DimensionIndicators = () => {
  //   {showDimensions && (
  //     <>
  //     <div
  //       style={{
  //         position: 'absolute',
  //         top: '50%',
  //         left: `-${toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)}px`,
  //         width: `${piece.position.x + toScale(DIMENSIONS.BOUNDARIES.x, scaleFactor)}px`,
  //         borderTop: '1px solid black',
  //         transform: 'translateY(-50%)',
  //       }}
  //     />
  //     <div
  //       style={{
  //         position: 'absolute',
  //         top: '50%',
  //         left: `${piece.position.x / 2}px`,
  //         transform: 'translateY(-50%) translateX(-50%)',
  //         backgroundColor: 'black',
  //         color: 'white'
  //       }}
  //     >
  //       {deScale(piece.position.x, scaleFactor)}
  //     </div>
  //   </>
  //   )}
  // }

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
