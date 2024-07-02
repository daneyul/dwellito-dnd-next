import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { droppableWidth, generateImgSrc, toScale } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  DROPPABLE_BACK,
  DROPPABLE_LEFT,
  DROPPABLE_MIDDLE,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { Draggable } from './Draggable';
import { DIMENSIONS } from '@/utils/constants/dimensions';

const MultipleDroppables = ({ isAnyItemSelected }) => {
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

  const heater = selectedComponents.find(
    (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
  );
  const outlet = selectedComponents.find(
    (component) => component.name === COMPONENT_NAMES.OUTLET
  );

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
    border: '1px solid blue',
  };

  const filterComponents = ({ elevationName, isLeft }) => {
    if (isLeft) {
      return selectedComponents.filter(
        (piece) =>
          piece.elevation.some(
            (elevation) => elevation.name === elevationName
          ) ||
          (piece.objType === COMPONENT_TYPES.ELECTRICAL &&
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
        width: `${toScale(
          droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
          scaleFactor
        )}px`,
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
          borderColor: 'red',
          position: 'absolute',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
          )}px`,
          height: `${toScale(12, scaleFactor)}px`,
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
            isAnyItemSelected={isAnyItemSelected}
            allowedDropContainers={piece.allowedDropContainers}
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
        {filterComponents({ elevationName: ELEVATION_NAMES.RIGHT }).map(
          (piece) => (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              isAnyItemSelected={isAnyItemSelected}
              allowedDropContainers={piece.allowedDropContainers}
            />
          )
        )}
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
        {filterComponents({ elevationName: ELEVATION_NAMES.BACK }).map(
          (piece) => (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              isAnyItemSelected={isAnyItemSelected}
              allowedDropContainers={piece.allowedDropContainers}
            />
          )
        )}
      </div>
      <div
        ref={setMiddleDroppableRef}
        style={{
          ...CustomStyle,
          borderColor: 'brown',
          position: 'absolute',
          width: `${toScale(
            droppableWidth(selectedElevation, DIMENSIONS, selectedContainer),
            scaleFactor
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
            isAnyItemSelected={isAnyItemSelected}
            allowedDropContainers={piece.allowedDropContainers}
          />
        ))}
      </div>
    </section>
  );
};

export default MultipleDroppables;
