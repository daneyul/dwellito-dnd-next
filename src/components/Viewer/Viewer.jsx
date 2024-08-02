import Collision from '@/components/Collision/Collision';
import { Droppable } from '@/components/Droppable';
import { DndContext } from '@dnd-kit/core';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import { PageDataContext } from '../Content/Content';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import { COMPONENT_NAMES, ELEVATION_NAMES } from '@/utils/constants/names/names';
import MultipleDroppables from '../MultipleDroppables';
import DragToMove from '../DragToMove/DragToMove';
import OutsideDroppable from '../Collision/OutsideDroppable';
import { LeftArrow, RightArrow } from '../Arrows/Arrows';
import { DraggableContainer } from '../DraggableContainer';
import { ConditionalButtons } from '../ConditionalButtons';

const Viewer = () => {
  const {
    selectedComponents,
    setSelectedComponents,
    selectedElevation,
    setSelectedElevation,
    modifiers,
    handleDragStart,
    handleDragEnd,
    handleSelect,
    showCollision,
    draggableRefs,
    selectedElevationIndex,
    setSelectedElevationIndex,
    show3d,
    mappedElevations,
    handleDeleteSelected,
    showDragToMove,
    setShowDragToMove,
    showOutsideDroppableWarning,
    handleDragMove,
  } = useContext(PageDataContext);

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const [hoveredPiece, setHoveredPiece] = useState(null);

  const isAnyItemSelected = selectedComponents.some(
    (component) => component.isSelected
  );

  const handleNext = useCallback(() => {
    setSelectedElevationIndex(
      (prevIndex) => (prevIndex + 1) % mappedElevations.length
    );
  }, [mappedElevations.length, setSelectedElevationIndex]);

  const handlePrevious = useCallback(() => {
    setSelectedElevationIndex(
      (prevIndex) =>
        (prevIndex - 1 + mappedElevations.length) % mappedElevations.length
    );
  }, [mappedElevations.length, setSelectedElevationIndex]);

  useEffect(() => {
    setSelectedElevation(mappedElevations[selectedElevationIndex]);
  }, [selectedElevationIndex, setSelectedElevation]);

  useEffect(() => {
    const shouldShowDragToMove = () => {
      const baseConditions =
        hoveredPiece && !show3d && !isAnyItemSelected && !hoveredPiece?.fixed;

      const additionalConditions =
        hoveredPiece?.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
        hoveredPiece?.name === COMPONENT_NAMES.OUTLET;

      return baseConditions && additionalConditions;
    };

    setShowDragToMove(shouldShowDragToMove());
  }, [hoveredPiece, show3d, isAnyItemSelected, setShowDragToMove]);

  const showLeftArrow = selectedElevationIndex > 0 && !show3d;
  const showRightArrow =
    selectedElevationIndex < mappedElevations.length - 1 && !show3d;

  const selectedComponent = useMemo(
    () => selectedComponents.find((component) => component.isSelected),
    [selectedComponents]
  );

  const isHeaterOrOutlet = useMemo(
    () =>
      selectedComponent &&
      (selectedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
        selectedComponent.name === COMPONENT_NAMES.OUTLET),
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

  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  };

  return (
    <>
      <div
        style={{
          width: 'calc(100vw - 430px)',
          position: 'sticky',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            visibility: show3d ? 'visible' : 'hidden',
            position: 'absolute',
            width: '100%',
          }}
        >
          <Models />
        </div>
        <div
          style={{
            visibility: show3d ? 'hidden' : 'visible',
            position: 'absolute',
            width: '100%',
          }}
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
        </div>
        {showLeftArrow && <LeftArrow handlePrevious={handlePrevious} />}
        {showRightArrow && <RightArrow handleNext={handleNext} />}
        <ConditionalButtons
          isAnyItemSelected={isAnyItemSelected}
          show3d={show3d}
          handleDeleteSelected={handleDeleteSelected}
          isHeaterOrOutlet={isHeaterOrOutlet}
          isFloorPlanView={isFloorPlanView}
          handleRotate={handleRotate}
          selectedComponent={selectedComponent}
        />
        {showDragToMove && <DragToMove isFloorPlanView={isFloorPlanView} />}
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
};

export default Viewer;
