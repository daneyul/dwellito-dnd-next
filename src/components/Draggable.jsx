/* eslint-disable @next/next/no-img-element */
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useDndContext, useDraggable, useDroppable } from '@dnd-kit/core';
import { toScale, generateImgSrc, calculateCSSPos } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
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

const Draggable = memo(({ id, styles, piece, onSelect, onHover, onLeave }) => {
  const {
    scaleFactor,
    containerHeightIsStandard,
    slug,
    supplier,
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

  // This is for adjusting the top value based on the container height
  const adjForContainerHeight = (value) => {
    if (containerHeightIsStandard) {
      if (slug !== CONTAINER_SIZE_40) {
        return value;
      } else {
        return value / 1.5;
      }
    } else {
      if (slug !== CONTAINER_SIZE_40) {
        return value + toScale(12, scaleFactor);
      } else {
        return value / 1.5 + toScale(12, scaleFactor);
      }
    }
  };

  const imgSrc = useMemo(() => {
    if (piece.objType === COMPONENT_TYPES.ELECTRICAL) {
      if (isFloorPlanView) {
        if (
          piece.name === COMPONENT_NAMES.WRAP_LIGHT ||
          piece.name === COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE
        ) {
          if (slug === CONTAINER_SIZE_10) {
            return piece.floorPlanImg.TEN;
          } else if (slug === CONTAINER_SIZE_20) {
            return piece.floorPlanImg.TWENTY;
          } else if (slug === CONTAINER_SIZE_40) {
            return piece.floorPlanImg.FORTY;
          }
        } else {
          return piece.floorPlanImg;
        }
      } else if (
        piece.alwaysShowOn &&
        piece.alwaysShowOn.includes(selectedElevation.name)
      ) {
        if (!!piece.fixedSide && selectedElevation.name !== piece.fixedSide) {
          return piece.sideImg;
        } else {
          return piece.frontImg;
        }
      } else {
        return piece.frontImg;
      }
    } else if (piece.name === COMPONENT_NAMES.ROOF_VENT) {
      if (isFloorPlanView) {
        return piece.floorPlanImg;
      } else if (
        !!piece.fixedSide &&
        selectedElevation.name !== piece.fixedSide
      ) {
        return piece.sideImg;
      } else {
        return piece.frontImg;
      }
    } else if (piece.name === COMPONENT_NAMES.SKYLIGHT) {
      if (selectedElevation.name === ELEVATION_NAMES.BACK) {
        return piece.frontImg;
      } else if (
        selectedElevation.name === ELEVATION_NAMES.RIGHT ||
        selectedElevation.name === ELEVATION_NAMES.LEFT
      ) {
        return piece.sideImg;
      }
    } else if (selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN) {
      return piece.floorPlanImg;
    } else {
      return piece.imgName;
    }
  }, [piece, selectedElevation, isFloorPlanView, slug]);

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
    if (
      selectedElevation.name !== piece.fixedSide &&
      !!piece.objThickness &&
      !isFloorPlanView
    ) {
      return toScale(piece.objThickness, scaleFactor);
    } else {
      if (
        piece.name === COMPONENT_NAMES.WRAP_LIGHT ||
        piece.name === COMPONENT_NAMES.WHITE_STRIP_LIGHT_FIXTURE
      ) {
        if (slug === CONTAINER_SIZE_10) {
          return toScale(piece.objWidth.TEN, scaleFactor);
        } else if (slug === CONTAINER_SIZE_20) {
          return toScale(piece.objWidth.TWENTY, scaleFactor);
        } else if (slug === CONTAINER_SIZE_40) {
          return toScale(piece.objWidth.FORTY, scaleFactor);
        }
      } else {
        return toScale(piece.objWidth, scaleFactor);
      }
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
});

export default Draggable;
