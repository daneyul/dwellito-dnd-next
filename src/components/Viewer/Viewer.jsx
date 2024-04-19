import Collision from "@/components/Collision/Collision";
import { Droppable } from "@/components/Droppable";
import Logo from "@/components/Logo";
import Selector from "@/components/Selector/Selector";
import { Draggable } from "@/components/Draggable";
import { DndContext } from "@dnd-kit/core";
import { useContext } from "react";
import { PageDataContext } from "../../app/page";
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
    isAnyItemSelected,
  } = useContext(PageDataContext);

  return (
    <>
      <div
        style={{
          width: "66.66%",
          position: "sticky",
          marginTop: "10rem",
        }}
      >
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
        {isAnyItemSelected && (
        <DeleteBtn onDeleteSelected={handleDeleteSelected} />
      )}
      </div>
      {/* <Footer
        orderTotal={orderTotal}
        selectedElevation={selectedElevation}
        setSelectedElevation={setSelectedElevation}
        selectedComponents={selectedComponents}
      />
      <Models /> */}
    </>
  );
};

export default Viewer;
