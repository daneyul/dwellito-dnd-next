import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import style from './DndViewer.module.scss';
import { PageDataContext } from '../Content/Content';
import OutsideDroppable from '../Collision/OutsideDroppable';
import Collision from '../Collision/Collision';
import { DndContext } from '@dnd-kit/core';
import MultipleDroppables from '../MultipleDroppables';
import Droppable from '../Droppable';
import { DraggableContainer } from '../DraggableContainer';
import {
  COMPONENT_NAMES,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import { createSnapModifier } from '@dnd-kit/modifiers';
import useDragHandlers from '@/utils/hooks/useDragHandlers';
import { ConditionalButtons } from '../ConditionalButtons/ConditionalButtons';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';

const DnDViewer = () => {
  const {
    showOutsideDroppableWarning,
    selectedComponents,
    setSelectedComponents,
    draggableRefs,
    show3d,
    selectedElevation,
    setShowOutsideDroppableWarning,
    scaleFactor,
    selectedContainer,
  } = useContext(PageDataContext);

  const [hoveredPiece, setHoveredPiece] = useState(null);
  const [showDragToMove, setShowDragToMove] = useState(false);

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const {
    handleDragStart,
    handleDragEnd,
    handleDragMove,
    handleSelect,
    handleDeleteSelected,
    modifiers,
    hasCollisions,
    showCollision,
    setShowCollision,
    selectedComponent,
    setSelectedComponent
  } = useDragHandlers({
    selectedComponents,
    setSelectedComponents,
    snapToGridModifier: createSnapModifier(DIMENSIONS.GRID_SIZE),
    selectedElevation,
    scaleFactor,
    isFloorPlanView,
    setShowOutsideDroppableWarning,
    selectedContainer,
  });

  const isAnyItemSelected = !!selectedComponent;

  // Deselect components when clicking outside the component
  useEffect(() => {
    if (show3d) return;

    function handleClickOutside(event) {
      const isInsideDraggable = Object.values(draggableRefs).some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!isInsideDraggable) {
        setSelectedComponent(null);
      }
    }
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [draggableRefs]);

  // Delay showing the Collision component when there are collisions
  useEffect(() => {
    let timer;
    if (hasCollisions) {
      timer = setTimeout(() => setShowCollision(true), 500);
    } else {
      setShowCollision(false);
    }

    return () => clearTimeout(timer);
  }, [hasCollisions]);

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

  const isDraggableOnFloorPlan = useMemo(
    () =>
      selectedComponent &&
      (selectedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
        selectedComponent.name === COMPONENT_NAMES.OUTLET ||
        selectedComponent.name === COMPONENT_NAMES.INDOOR_OUTDOOR_FAN),
    [selectedComponent]
  );

  const handleRotate = useCallback(() => {
    setSelectedComponents((prevComponents) =>
      prevComponents.map((piece) => {
        if (piece.id === selectedComponent.id) {
          return {
            ...piece,
            rotate: piece.rotate + 90,
          };
        }
        return piece;
      })
    );
  }, [selectedComponent, setSelectedComponents]);

  return (
    <div
      style={{
        visibility: show3d ? 'hidden' : 'visible',
        position: 'absolute',
        width: "100%"
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
          <MultipleDroppables
            handleSelect={handleSelect}
            setHoveredPiece={setHoveredPiece}
            setShowCollision={setShowCollision}
            selectedComponent={selectedComponent}
          />
        ) : (
          <Droppable>
            <DraggableContainer
              selectedComponents={selectedComponents}
              handleSelect={handleSelect}
              draggableRefs={draggableRefs}
              setHoveredPiece={setHoveredPiece}
              setShowCollision={setShowCollision}
              selectedComponent={selectedComponent}
            />
          </Droppable>
        )}
      </DndContext>
      {showDragToMove && <DragToMove isFloorPlanView={isFloorPlanView} />}
      <ConditionalButtons
        isAnyItemSelected={isAnyItemSelected}
        show3d={show3d}
        handleDeleteSelected={handleDeleteSelected}
        isDraggableOnFloorPlan={isDraggableOnFloorPlan}
        isFloorPlanView={isFloorPlanView}
        handleRotate={handleRotate}
        selectedComponent={selectedComponent}
      />
    </div>
  );
};

export default DnDViewer;
