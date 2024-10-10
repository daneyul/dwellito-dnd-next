/* eslint-disable @next/next/no-img-element */
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc, calculateCSSPos } from '../../../utils/2D/utils';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  DROPPABLE,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_PARTITIONS,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import { useCombinedRefs } from '@dnd-kit/utilities';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

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

const ShedDraggable = ({
  id,
  styles,
  piece,
  onSelect,
  onHover,
  onLeave,
  setShowCollision,
  selectedComponent
}) => {
  
  if (piece.objType === COMPONENT_TYPES.ROOF) return null;

  const {
    scaleFactor,
    supplier,
    selectedElevation,
    isFloorPlanView,
  } = useContext(ShedDataContext);

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
    DROPPABLE_PARTITIONS,
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

  const handleMouseDown = useCallback(
    (e) => {
      e.stopPropagation();
      onSelect();
    },
    [onSelect]
  );

  const imgSrc = useMemo(() => {
    return piece.imgName;
  }, [piece]);

  const isFixed = piece.fixed;

  // Render on corresponding elevation or render on floor plan view
  if (
    !piece.alwaysShowOn?.includes(selectedElevation.name) &&
    !piece.elevation.some(
      (elevation) => elevation.id === selectedElevation.id
    ) &&
    !isFloorPlanView
  ) {
    return null;
  }

  const imgWidth = () => {
    return toScale(piece.objThickness, scaleFactor);
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

  const isRight = piece.elevation[0].name === ELEVATION_NAMES.RIGHT;
  const isLeft = piece.elevation[0].name === ELEVATION_NAMES.LEFT;
  const isBack = piece.elevation[0].name === ELEVATION_NAMES.BACK;

  const determineTransformX = (dragTransform) => {
    if (isFloorPlanView) {
      if (isRight) {
        return dragTransform?.x;
      } else if (isLeft) {
        return -dragTransform?.x;
      } else if (isBack) {
        return -dragTransform?.y;
      } else {
        return dragTransform?.x;
      }
    } else {
      return dragTransform?.x;
    }
  };

  const determineTransformY = (dragTransform) => {
    if (isFloorPlanView) {
      if (isRight || isLeft) {
        return dragTransform?.y;
      } else if (isBack) {
        return 0;
      } else {
        return dragTransform?.y;
      }
    } else {
      return dragTransform?.y;
    }
  };

  const combinedTransforms = [
    calculatedPos.transform,
    dragTransform
      ? `translate3d(${determineTransformX(
          dragTransform
        )}px, ${determineTransformY(dragTransform)}px, 0)`
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
          src={generateImgSrc(supplier, imgSrc)}
          alt={piece.name}
          style={{
            width: `${imgWidth()}px`,
            height: 'auto',
            objectFit: 'fill',
            transform: `rotate(${piece.rotate}deg)`,
            boxShadow:
              isHovered || piece.id === selectedComponent?.id
                ? '0px 4px 30px 0px rgba(128, 129, 238, 0.19)'
                : 'none',
            border:
              isHovered || piece.id === selectedComponent?.id
                ? '1px solid #2A2CB1'
                : '1px solid transparent',
            boxSizing: 'border-box',
          }}
        />
      </div>
    </>
  );
};

export default ShedDraggable;
