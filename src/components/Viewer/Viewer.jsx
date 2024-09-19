import Collision from '@/components/Collision/Collision';
import { DndContext } from '@dnd-kit/core';
import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import { PageDataContext } from '../Content/Content';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import {
  COMPONENT_NAMES,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import style from './viewer.module.scss';
import MultipleDroppables from '../MultipleDroppables';
import DragToMove from '../DragToMove/DragToMove';
import OutsideDroppable from '../Collision/OutsideDroppable';
import { LeftArrow, RightArrow } from '../Arrows/Arrows';
import { DraggableContainer } from '../DraggableContainer';
import { ConditionalButtons } from '../ConditionalButtons/ConditionalButtons';
import Droppable from '../Droppable';
import DnDViewer from '../DndViewer/DndViewer';

const Viewer = React.memo(() => {
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
    showOutsideDroppableWarning,
    handleDragMove,
  } = useContext(PageDataContext);

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;
  const [showDragToMove, setShowDragToMove] = useState(false);

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

  const showLeftArrow = selectedElevationIndex > 0 && !show3d;
  const showRightArrow =
    selectedElevationIndex < mappedElevations.length - 1 && !show3d;

  const selectedComponent = useMemo(
    () => selectedComponents.find((component) => component.isSelected),
    [selectedComponents]
  );

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
    <>
      <div className={style.viewer}>
        <div
          style={{
            // visibility: show3d ? 'visible' : 'hidden',
            visibility: 'visible',
            position: 'absolute',
            width: '50%',
          }}
        >
          <Models />
        </div>
        <DnDViewer />
        {showLeftArrow && <LeftArrow handlePrevious={handlePrevious} />}
        {showRightArrow && <RightArrow handleNext={handleNext} />}
        <ConditionalButtons
          isAnyItemSelected={isAnyItemSelected}
          show3d={show3d}
          handleDeleteSelected={handleDeleteSelected}
          isDraggableOnFloorPlan={isDraggableOnFloorPlan}
          isFloorPlanView={isFloorPlanView}
          handleRotate={handleRotate}
          selectedComponent={selectedComponent}
        />
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
});

export default Viewer;
