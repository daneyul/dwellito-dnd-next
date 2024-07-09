import Collision from '@/components/Collision/Collision';
import { Droppable } from '@/components/Droppable';
import { Draggable } from '@/components/Draggable';
import { DndContext } from '@dnd-kit/core';
import { useCallback, useContext, useEffect, useState } from 'react';
import { droppableWidth, toScale } from '@/utils/2D/utils';
import ChevronLeftBlack from '../ChevronLeftBlack';
import ChevronRightBlack from '../ChevronRightBlack';
import style from './viewer.module.scss';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import { PageDataContext } from '../Content/Content';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import debounce from 'lodash.debounce';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import { DIMENSIONS } from '@/utils/constants/dimensions';
import MultipleDroppables from '../MultipleDroppables';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import DragToMove from '../DragToMove/DragToMove';
import OutsideDroppable from '../Collision/OutsideDroppable';
import RotateBtn from '../DeleteBtn/Rotate';

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
    selectedContainer,
    scaleFactor,
    handleDeleteSelected,
    showDragToMove,
    setShowDragToMove,
    showOutsideDroppableWarning
  } = useContext(PageDataContext);

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  const [hoveredPiece, setHoveredPiece] = useState(null);

  const isAnyItemSelected = selectedComponents.some(
    (component) => component.isSelected
  );

  const LeftArrow = () => {
    return (
      <button className={style.left} onClick={handlePrevious}>
        <ChevronLeftBlack />
      </button>
    );
  };

  const RightArrow = () => {
    return (
      <button className={style.right} onClick={handleNext}>
        <ChevronRightBlack />
      </button>
    );
  };

  const handleNext = () => {
    setSelectedElevationIndex(
      (prevIndex) => (prevIndex + 1) % mappedElevations.length
    );
  };

  const handlePrevious = () => {
    setSelectedElevationIndex(
      (prevIndex) =>
        (prevIndex - 1 + mappedElevations.length) % mappedElevations.length
    );
  };

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

  const selectedComponent = selectedComponents.find(
    (component) => component.isSelected
  );
  const isHeaterOrOutlet =
    selectedComponent &&
    (selectedComponent.name === COMPONENT_NAMES.BASEBOARD_HEATER ||
      selectedComponent.name === COMPONENT_NAMES.OUTLET);

  const handleRotate = () => {
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
            onDragEnd={handleDragEnd}
            modifiers={modifiers}
          >
            {isFloorPlanView ? (
              <MultipleDroppables setHoveredPiece={setHoveredPiece} />
            ) : (
              <Droppable>
                <div
                  style={{
                    width: `${toScale(
                      droppableWidth(
                        selectedElevation,
                        DIMENSIONS,
                        selectedContainer
                      ),
                      scaleFactor
                    )}px`,
                    height: '100%',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  {/* Map through selected components and render on corresponding elevation view */}
                  {selectedComponents.map((piece) => {
                    return (
                      <Draggable
                        piece={piece}
                        key={piece.id}
                        id={piece.id}
                        onSelect={() => handleSelect(piece.id)}
                        ref={draggableRefs[piece.id]}
                        onHover={() => setHoveredPiece(piece)}
                        onLeave={() => setHoveredPiece(null)}
                      />
                    );
                  })}
                </div>
              </Droppable>
            )}
          </DndContext>
        </div>
        {showLeftArrow && <LeftArrow />}
        {showRightArrow && <RightArrow />}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            transform: 'translate(-50%, 50%)',
            left: '50%',
            bottom: 'calc(7.5rem + 58px)',
            zIndex: 100,
            gap: '1rem',
          }}
        >
          {isAnyItemSelected && !show3d && (
            <DeleteBtn onDeleteSelected={handleDeleteSelected} />
          )}
          {isHeaterOrOutlet && !show3d && isFloorPlanView && (
            <RotateBtn
              handleRotate={handleRotate}
              component={selectedComponent}
            />
          )}
        </div>
        {showDragToMove && <DragToMove isFloorPlanView={isFloorPlanView} />}
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
};

export default Viewer;
