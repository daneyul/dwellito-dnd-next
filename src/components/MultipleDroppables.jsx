import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { droppableWidth, generateImgSrc, toScale } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import {
  COMPONENT_TYPES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { Draggable } from './Draggable';
import { DIMENSIONS } from '@/utils/constants/dimensions';

const MultipleDroppables = ({ setHoveredPiece }) => {
  const {
    scaleFactor,
    selectedElevation,
    containerHeightIsStandard,
    handleSelect,
    selectedComponents,
    draggableRefs,
    selectedContainer,
    floorPlan,
    slug,
  } = useContext(PageDataContext);

  const containerSize = () => {
    if (slug === CONTAINER_10_SLUG) {
      return DIMENSIONS.CONTAINER.TEN;
    } else if (slug === CONTAINER_20_SLUG) {
      return DIMENSIONS.CONTAINER.TWENTY;
    } else if (slug === CONTAINER_40_SLUG) {
      return DIMENSIONS.CONTAINER.FORTY;
    }
  };

  const objectHeight = containerHeightIsStandard
    ? selectedElevation.objScHeight
    : selectedElevation.objHcHeight;

  const { setNodeRef: setLeftDroppableRef } = useDroppable({
    id: DROPPABLE_LEFT,
  });
  const { setNodeRef: setRightDroppableRef } = useDroppable({
    id: DROPPABLE_RIGHT,
  });
  const { setNodeRef: setBackDroppableRef } = useDroppable({
    id: DROPPABLE_BACK,
  });
  const { setNodeRef: setMiddleDroppableRef } = useDroppable({
    id: DROPPABLE_MIDDLE,
  });

  const CustomStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
  };

  const filterComponents = ({ elevationName, isLeft }) => {
    if (isLeft) {
      return selectedComponents.filter(
        (piece) =>
          piece.elevation.some(
            (elevation) => elevation.name === elevationName
          ) ||
          (piece.objType === COMPONENT_TYPES.ELECTRICAL &&
            !piece.ceilingOnly &&
            (piece.fixedSide === elevationName ||
              !piece.fixedSide ||
              !piece.alwaysShowOn))
      );
    } else {
      return selectedComponents.filter(
        (piece) =>
          piece.elevation.some(
            (elevation) => elevation.name === elevationName
          ) ||
          (piece.objType === COMPONENT_TYPES.ELECTRICAL &&
            piece.fixedSide === elevationName)
      );
    }
  };

  const filterFixedCeilingComponents = () => {
    return selectedComponents.filter(
      (piece) =>
        piece.objType === COMPONENT_TYPES.ELECTRICAL &&
        piece.fixed &&
        !piece.fixedSide
    );
  };

  return (
    <section
      style={{
        position: 'relative',
        width: `${toScale(floorPlan.objWidth, scaleFactor)}px`,
        height: `${toScale(objectHeight, scaleFactor)}px`,
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <img
        src={generateImgSrc(floorPlan.imgScName)}
        style={{ position: 'absolute', width: '100%', height: 'auto' }}
      />
      <div
        ref={setLeftDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
          )}px`,
          height: `${toScale(24, scaleFactor)}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {filterComponents({
          elevationName: ELEVATION_NAMES.LEFT,
          isLeft: true,
        }).map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
            onHover={() => setHoveredPiece(piece)}
            onLeave={() => setHoveredPiece(null)}
          />
        ))}
      </div>
      <div
        ref={setRightDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          bottom: '0',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
          )}px`,
          height: toScale(24, scaleFactor),
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        {filterComponents({ elevationName: ELEVATION_NAMES.RIGHT }).map(
          (piece) => (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              onHover={() => setHoveredPiece(piece)}
              onLeave={() => setHoveredPiece(null)}
            />
          )
        )}
      </div>
      <div
        ref={setBackDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: `${toScale(24, scaleFactor)}px`,
          height: `${toScale(
            containerSize().FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2,
            scaleFactor
          )}px`,
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {filterComponents({ elevationName: ELEVATION_NAMES.BACK }).map(
          (piece) => (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              onHover={() => setHoveredPiece(piece)}
              onLeave={() => setHoveredPiece(null)}
            />
          )
        )}
      </div>
      <div
        ref={setMiddleDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: `${toScale(
            containerSize().FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2
          )}px`,
          height: `${toScale(24, scaleFactor)}px`,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        {filterFixedCeilingComponents().map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
            onHover={() => setHoveredPiece(piece)}
            onLeave={() => setHoveredPiece(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default MultipleDroppables;