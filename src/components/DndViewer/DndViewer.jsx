import { useContext, useEffect, useState } from 'react';
import style from './DndViewer.module.scss';
import { PageDataContext } from '../Content/Content';
import OutsideDroppable from '../Collision/OutsideDroppable';
import Collision from '../Collision/Collision';
import { DndContext } from '@dnd-kit/core';
import MultipleDroppables from '../MultipleDroppables';
import Droppable from '../Droppable';
import { DraggableContainer } from '../DraggableContainer';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { createSnapModifier } from '@dnd-kit/modifiers';
import useDragHandlers from '@/utils/hooks/useDragHandlers';

const DnDViewer = () => {
  const {
    isFloorPlanView,
    showOutsideDroppableWarning,
    selectedComponents,
    setSelectedComponents,
    showCollision,
    draggableRefs,
    show3d,
    isAnyItemSelected,
    selectedElevation,
    scaleFactor,
    setShowOutsideDroppableWarning,
    selectedContainer,
    handleDragStart,
    handleDragEnd,
    handleSelect,
    handleDragMove,
    modifiers
  } = useContext(PageDataContext);

  const [hoveredPiece, setHoveredPiece] = useState(null);
  const [showDragToMove, setShowDragToMove] = useState(false);

  useEffect(() => {
    const shouldShowDragToMove = () => {
      const baseConditions =
        hoveredPiece && !show3d && !isAnyItemSelected && !hoveredPiece?.fixed;

      const additionalConditions =
        hoveredPiece?.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
        hoveredPiece?.name === COMPONENT_NAMES.OUTLET ||
        hoveredPiece?.name === COMPONENT_NAMES.INDOOR_OUTDOOR_FAN;

      return baseConditions && additionalConditions;
    };

    setShowDragToMove(shouldShowDragToMove());
  }, [hoveredPiece, show3d, isAnyItemSelected, setShowDragToMove]);

  return (
    <div
      style={{
        // visibility: show3d ? 'hidden' : 'visible',
        visibility: 'visible',
        position: 'absolute',
        width: '50%',
      }}
      className={style.drawings}
    >
      <OutsideDroppable showWarning={showOutsideDroppableWarning} />
      <Collision showCollision={showCollision} />
      <DndContext
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragEnd={handleDragEnd}
        modifiers={modifiers}
      >
        {isFloorPlanView ? (
          <MultipleDroppables setHoveredPiece={setHoveredPiece} />
        ) : (
          <Droppable>
            <DraggableContainer
              selectedComponents={selectedComponents}
              handleSelect={handleSelect}
              draggableRefs={draggableRefs}
              setHoveredPiece={setHoveredPiece}
            />
          </Droppable>
        )}
      </DndContext>
      {showDragToMove && <DragToMove isFloorPlanView={isFloorPlanView} />}
    </div>
  );
};

export default DnDViewer;
