import Collision from '@/components/Collision/Collision';
import { Droppable } from '@/components/Droppable';
import { Draggable } from '@/components/Draggable';
import { DndContext } from '@dnd-kit/core';
import { useContext, useEffect } from 'react';
import { checkDistance, droppableWidth, toScale } from '@/utils/2D/utils';
import ChevronLeftBlack from '../ChevronLeftBlack';
import ChevronRightBlack from '../ChevronRightBlack';
import style from './viewer.module.scss';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import { PageDataContext } from '../Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import ElevationToggle from '../ElevationToggle/ElevationToggle';

const Viewer = () => {
  const {
    selectedComponents,
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
            onDragEnd={handleDragEnd}
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
                  transform: 'translateX(-50%)'
                }}
              >
                {selectedComponents
                  .filter((piece) =>
                    piece.elevation.includes(selectedElevation)
                  )
                  .map((piece) => {
                    return (
                      <Draggable
                        piece={piece}
                        key={piece.id}
                        id={piece.id}
                        imgName={piece.imgName}
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
