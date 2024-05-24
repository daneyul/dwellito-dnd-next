import Collision from "@/components/Collision/Collision";
import { Droppable } from "@/components/Droppable";
import { Draggable } from "@/components/Draggable";
import { DndContext } from "@dnd-kit/core";
import { useContext, useEffect } from "react";
import { checkDistance, droppableWidth, toScale } from "@/utils/2D/utils";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import ChevronLeftBlack from "../ChevronLeftBlack";
import ChevronRightBlack from "../ChevronRightBlack";
import style from "./viewer.module.scss";
import ToggleView from "../ToggleView/ToggleView";
import Models from "../Models/Models";
import ToggleCamera from "../ToggleCamera/ToggleCamera";
import { PageDataContext } from "../Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

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
  const { elevationData, DIMENSIONS, ELEVATION_NAMES } =
    useContext(Library2dDataContext);

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
          width: "70%",
          position: "sticky",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* <div style={{ visibility: show3d ? "visible" : "hidden", position: "absolute", width: "100%" }}>
          <Models />
        </div>
        <div  style={{ visibility: show3d ? "hidden" : "visible", position: "absolute", width: "100%"}}>
          <Collision showCollision={showCollision} />
          <DndContext
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            modifiers={modifiers}
          >
            <Droppable selectedElevation={selectedElevation}>
              <div
                style={{
                  width: `${toScale(
                    droppableWidth(
                      selectedElevation,
                      DIMENSIONS,
                      ELEVATION_NAMES
                    ),
                    DIMENSIONS
                  )}px`,
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
                    console.log(
                      checkDistance({
                        component: piece,
                        selectedElevation,
                        DIMENSIONS,
                        ELEVATION_NAMES,
                      })
                    );
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
          {selectedElevationIndex < elevationData.length - 1 && <RightArrow />}
          {isAnyItemSelected && (
            <DeleteBtn onDeleteSelected={handleDeleteSelected} />
          )}
        </div> */}
        {show3d ? (
          <div>
            <Models />
          </div>
        ) : (
          <div>
            <Collision showCollision={showCollision} />
            <DndContext
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              modifiers={modifiers}
            >
              <Droppable selectedElevation={selectedElevation}>
                <div
                  style={{
                    width: `${toScale(
                      droppableWidth(
                        selectedElevation,
                        DIMENSIONS,
                        ELEVATION_NAMES
                      ),
                      DIMENSIONS
                    )}px`,
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
                      console.log(
                        checkDistance({
                          component: piece,
                          selectedElevation,
                          DIMENSIONS,
                          ELEVATION_NAMES,
                        })
                      );
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
          </div>
        )}
        <ToggleCamera />
        <ToggleView />
      </div>
    </>
  );
};

export default Viewer;
