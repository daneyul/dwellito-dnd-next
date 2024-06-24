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
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import debounce from 'lodash.debounce';

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
  } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);

  const [tempPositions, setTempPositions] = useState({});

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

  const showLeftArrow = selectedElevationIndex > 0 && !show3d;
  const showRightArrow =
    selectedElevationIndex < mappedElevations.length - 1 && !show3d;

  const debouncedUpdatePosition = useCallback(
    debounce((id, delta) => {
      setTempPositions((prev) => ({
        ...prev,
        [id]: {
          x: (prev[id]?.x || 0) + delta.x,
          y: (prev[id]?.y || 0) + delta.y,
        },
      }));
    }, 50), // Adjust debounce delay as needed
    []
  );

  const handleDragMove = (event) => {
    const { id, delta } = event;
    debouncedUpdatePosition(id, delta);
  };

  const handleDragEndEnhanced = (event) => {
    const { id } = event;
    const tempPos = tempPositions[id];
    if (tempPos) {
      setSelectedComponents((prevComponents) =>
        prevComponents.map((piece) => {
          if (piece.id === id) {
            return {
              ...piece,
              position: {
                x: piece.position.x + tempPos.x,
                y: piece.position.y + tempPos.y,
              },
            };
          }
          return piece;
        })
      );
      setTempPositions((prev) => {
        const newPos = { ...prev };
        delete newPos[id];
        return newPos;
      });
    }
    handleDragEnd(event); // Perform collision and closeness checks
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
          <Collision showCollision={showCollision} />
          <DndContext
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
            onDragEnd={handleDragEndEnhanced}
            modifiers={modifiers}
          >
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
                    />
                  );
                })}
              </div>
            </Droppable>
          </DndContext>
        </div>
        {showLeftArrow && <LeftArrow />}
        {showRightArrow && <RightArrow />}
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
};

export default Viewer;
