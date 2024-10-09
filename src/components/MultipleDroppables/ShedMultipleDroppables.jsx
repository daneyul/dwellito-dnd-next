import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../../utils/2D/utils';
import {
  COMPONENT_TYPES,
  DROPPABLE_BACK,
  DROPPABLE_FRONT,
  DROPPABLE_LEFT,
  DROPPABLE_RIGHT,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import Draggable from '../Draggable';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedMultipleDroppables = ({
  setHoveredPiece,
  setShowCollision,
  handleSelect,
  selectedComponent,
}) => {
  const {
    scaleFactor,
    selectedElevation,
    selectedComponents,
    draggableRefs,
    supplier,
    floorPlan,
  } = useContext(ShedDataContext);

  const objectHeight = selectedElevation.objHeight;

  const { setNodeRef: setLeftDroppableRef } = useDroppable({
    id: DROPPABLE_LEFT,
  });
  const { setNodeRef: setRightDroppableRef } = useDroppable({
    id: DROPPABLE_RIGHT,
  });
  const { setNodeRef: setFrontDroppableRef } = useDroppable({
    id: DROPPABLE_FRONT,
  });
  const { setNodeRef: setBackDroppableRef } = useDroppable({
    id: DROPPABLE_BACK,
  });

  const CustomStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
  };

  const filterComponents = ({ elevationName }) => {
    return selectedComponents.filter((piece) =>
      piece.elevation.some(
        (elevation) =>
          elevation.name === elevationName &&
          piece.objType !== COMPONENT_TYPES.ROOF
      )
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
        src={generateImgSrc(supplier, floorPlan.imgName)}
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
        }).map((piece) => {
          return (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              onHover={() => setHoveredPiece(piece)}
              onLeave={() => setHoveredPiece(null)}
              setShowCollision={setShowCollision}
              selectedComponent={selectedComponent}
            />
          );
        })}
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
          (piece) => {
            return (
              <Draggable
                piece={piece}
                key={piece.id}
                id={piece.id}
                onSelect={() => handleSelect(piece.id)}
                ref={draggableRefs[piece.id]}
                onHover={() => setHoveredPiece(piece)}
                onLeave={() => setHoveredPiece(null)}
                setShowCollision={setShowCollision}
                selectedComponent={selectedComponent}
              />
            );
          }
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
              setShowCollision={setShowCollision}
              selectedComponent={selectedComponent}
            />
          )
        )}
      </div>
      <div
        ref={setFrontDroppableRef}
        style={{
          ...CustomStyle,
          position: 'absolute',
          width: toScale(18, scaleFactor),
          height: `${toScale(objectHeight, scaleFactor)}px`,
          left: 0,
        }}
      >
        {filterComponents({ elevationName: ELEVATION_NAMES.FRONT }).map(
          (piece) => (
            <Draggable
              piece={piece}
              key={piece.id}
              id={piece.id}
              onSelect={() => handleSelect(piece.id)}
              ref={draggableRefs[piece.id]}
              onHover={() => setHoveredPiece(piece)}
              onLeave={() => setHoveredPiece(null)}
              setShowCollision={setShowCollision}
              selectedComponent={selectedComponent}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ShedMultipleDroppables;
