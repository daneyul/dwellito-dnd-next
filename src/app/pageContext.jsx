import Collision from "@/components/Collision/Collision";
import { Droppable } from "@/components/Droppable";
import Logo from "@/components/Logo";
import Selector from "@/components/Selector/Selector";
import { Draggable } from "@/components/Draggable";
import { DndContext } from "@dnd-kit/core";
import { useContext } from "react";
import { PageDataContext } from "./page";
import { ELEVATION_NAMES } from "@/utils/2D/library";
import { checkDistance, droppableWidth, toScale } from "@/utils/2D/utils";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import Footer from "@/components/Footer/Footer";
import Models from "@/components/Models/Models";

// Create a separate component that will actually consume the context
const Viewer = () => {
  const {
    selectedComponents,
    setSelectedComponents,
    selectedElevation,
    setSelectedElevation,
    orderTotal,
    setOrderTotal,
    modifiers,
    setHasCollisions,
    handleDragStart,
    handleDragEnd,
    handleSelect,
    handleDeleteSelected,
    showCollision,
    draggableRefs,
    isAnyItemSelected
  } = useContext(PageDataContext);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          zIndex: "2",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {selectedElevation.name !== ELEVATION_NAMES.FRONT ? (
          <Selector
            setSelectedComponents={setSelectedComponents}
            setOrderTotal={setOrderTotal}
            selectedElevation={selectedElevation}
            setHasCollisions={setHasCollisions}
          />
        ) : null}
      </div>
      <div style={{ marginTop: "10rem", width: "75%" }}>
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
                .filter((piece) => piece.elevation.includes(selectedElevation))
                .map((piece) => {
                  console.log(
                    checkDistance({ component: piece, selectedElevation })
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
      </div>
      {isAnyItemSelected && (
        <DeleteBtn onDeleteSelected={handleDeleteSelected} />
      )}
      <Footer
        orderTotal={orderTotal}
        selectedElevation={selectedElevation}
        setSelectedElevation={setSelectedElevation}
        selectedComponents={selectedComponents}
      />
      <Models />
    </>
  );
};

export default Viewer;
