import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { droppableWidth, generateImgSrc, toScale } from '../utils/2D/utils';
import Image from 'next/image';
import { PageDataContext } from './Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { COMPONENT_TYPES, ELEVATION_NAMES } from '@/utils/constants/names';
import { Draggable } from './Draggable';
import { DIMENSIONS } from '@/utils/constants/dimensions';

const MultipleDroppables = () => {
  const {
    scaleFactor,
    selectedElevation,
    containerHeightIsStandard,
    handleSelect,
    selectedComponents,
    draggableRefs,
    selectedContainer,
    floorPlan,
  } = useContext(PageDataContext);

  const objectHeight = containerHeightIsStandard
    ? selectedElevation.objScHeight
    : selectedElevation.objHcHeight;

  const { setNodeRef: setLeftDroppableRef } = useDroppable({
    id: 'droppable-left',
  });
  const { setNodeRef: setRightDroppableRef } = useDroppable({
    id: 'droppable-right',
  });
  const { setNodeRef: setBackDroppableRef } = useDroppable({
    id: 'droppable-back',
  });

  const CustomStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
    border: '1px solid blue', // For visual debugging
  };

  const filterComponents = (elevationName) => {
    return selectedComponents.filter(
      (piece) =>
        piece.elevation.some((elevation) => elevation.name === elevationName) ||
        (piece.objType === COMPONENT_TYPES.ELECTRICAL &&
          piece.fixedSide === elevationName)
    );
  };

  return (
    <section
      style={{
        position: 'relative',
        width: `${toScale(
          droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
          scaleFactor
        )}px`,
        height: `${toScale(objectHeight, scaleFactor)}px`,
        left: '50%',
        top: '50%',
        transform: 'translateX(-50%) translateY(-50%)',
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
          borderColor: 'red',
          position: 'absolute',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
          )}px`,
          height: `${toScale(12, scaleFactor)}px`
        }}
      >
        {filterComponents(ELEVATION_NAMES.LEFT).map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
          />
        ))}
      </div>
      <div
        ref={setRightDroppableRef}
        style={{
          ...CustomStyle,
          borderColor: 'green',
          position: 'absolute',
          bottom: '0',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
          )}px`,
          height: toScale(12, scaleFactor),
        }}
      >
        {filterComponents(ELEVATION_NAMES.RIGHT).map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
          />
        ))}
      </div>
      <div
        ref={setBackDroppableRef}
        style={{
          ...CustomStyle,
          borderColor: 'yellow',
          position: 'absolute',
          width: toScale(12, scaleFactor),
          height: `${toScale(objectHeight, scaleFactor)}px`,
          right: 0,
        }}
      >
        {filterComponents(ELEVATION_NAMES.BACK).map((piece) => (
          <Draggable
            piece={piece}
            key={piece.id}
            id={piece.id}
            onSelect={() => handleSelect(piece.id)}
            ref={draggableRefs[piece.id]}
          />
        ))}
      </div>
    </section>
  );
};

export default MultipleDroppables;
