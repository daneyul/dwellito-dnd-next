import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_PARTITIONS,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { Draggable } from './Draggable';

const MultipleDroppables = ({ setHoveredPiece }) => {
  const {
    scaleFactor,
    selectedElevation,
    containerHeightIsStandard,
    handleSelect,
    selectedComponents,
    draggableRefs,
    supplier,
    floorPlan,
  } = useContext(PageDataContext);

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
  const { setNodeRef: setParititionsDroppableRef } = useDroppable({
    id: DROPPABLE_PARTITIONS,
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
        piece.objType === COMPONENT_TYPES.ELECTRICAL && piece.fixed && !piece.fixedSide ||
        (piece.name === COMPONENT_NAMES.ROOF_VENT &&
          piece.fixed &&
          !piece.fixedSide)
    );
  };

  const filterPartitions = () => {
    return selectedComponents.filter(
      (piece) =>
        piece.objType === COMPONENT_TYPES.PARTITION
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
        src={generateImgSrc(supplier, floorPlan.imgScName)}
        style={{ position: 'absolute', width: '100%', height: 'auto' }}
      />
      <div
        ref={setLeftDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: `${toScale(floorPlan.objWidth, scaleFactor)}px`,
          height: `${toScale(18, scaleFactor)}px`,
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
          width: `${toScale(floorPlan.objWidth, scaleFactor)}px`,
          height: toScale(18, scaleFactor),
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
          width: toScale(18, scaleFactor),
          height: `${toScale(objectHeight, scaleFactor)}px`,
          right: 0,
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
          width: `${toScale(floorPlan.objWidth, scaleFactor)}px`,
          height: `${toScale(18, scaleFactor)}px`,
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
      <div
        ref={setParititionsDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: `${toScale(floorPlan.objWidth, scaleFactor)}px`,
          height: `${toScale(floorPlan.objScHeight, scaleFactor)}px`,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        {filterPartitions().map((piece) => (
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
