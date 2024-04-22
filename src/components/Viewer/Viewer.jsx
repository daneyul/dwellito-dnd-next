import Collision from "@/components/Collision/Collision";
import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";
import { DndContext } from "@dnd-kit/core";
import { useContext, useEffect } from "react";
import { PageDataContext } from "../../app/page";
import { checkDistance, droppableWidth, toScale } from "@/utils/2D/utils";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import ChevronLeftBlack from "../ChevronLeftBlack";
import ChevronRightBlack from "../ChevronRightBlack";
import style from "./viewer.module.scss";
import { elevationData } from "@/utils/2D/library";
import ToggleView from "../ToggleView/ToggleView";
import Models from "../Models/Models";

const Viewer = () => {
  const {
    selectedComponents,
    selectedElevation,
    setSelectedElevation,
    modifiers,
    handleDragStart,
    handleDragEnd,
    handleSelect,
    handleDeleteSelected,
    showCollision,
    draggableRefs,
    isAnyItemSelected,
    selectedElevationIndex,
    setSelectedElevationIndex,
    show3d,
  } = useContext(PageDataContext);

  const LeftArrow = () => {
    return (
      <div className={style.left} onClick={handlePrevious}>
        <ChevronLeftBlack />
      </div>
    );
  };

  const RightArrow = () => {
    return (
      <div className={style.right} onClick={handleNext}>
        <ChevronRightBlack />
      </div>
    );
  };

  const handleNext = () => {
    setSelectedElevationIndex(
      (prevIndex) => (prevIndex + 1) % elevationData.length
    );
  };

  const handlePrevious = () => {
    setSelectedElevationIndex(
      (prevIndex) =>
        (prevIndex - 1 + elevationData.length) % elevationData.length
    );
  };

  useEffect(() => {
    setSelectedElevation(elevationData[selectedElevationIndex]);
  }, [selectedElevationIndex, setSelectedElevation]);

  return (
    <>
      <div
        style={{
          width: "66.66%",
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {show3d ? (
          <Models />
        ) : (
          <>
            <Collision showCollision={showCollision} />
            <DndContext
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              modifiers={modifiers}
            >
              <Droppable selectedElevation={selectedElevation}>
                <div
                  style={{
                    width: `${toScale(droppableWidth(selectedElevation))}px`,
                    height: "100%",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {selectedComponents
                    .filter((piece) =>
                      piece.elevation.includes(selectedElevation)
                    )
                    .map((piece) => {
                      console.log(checkDistance({
                        component: piece,
                        selectedElevation,
                      }))
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
            {selectedElevationIndex > 0 && <LeftArrow />}
            {selectedElevationIndex < elevationData.length - 1 && (
              <RightArrow />
            )}
            {isAnyItemSelected && (
              <DeleteBtn onDeleteSelected={handleDeleteSelected} />
            )}
          </>
        )}
        <ToggleView />
      </div>
    </>
  );
};

export default Viewer;
