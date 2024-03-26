"use client";
import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

import { DndContext } from "@dnd-kit/core";
import {
  checkCloseness,
  checkCollision,
  checkDistance,
  droppableWidth,
  snapToIncrement,
  toScale,
} from "@/utils/utils";
import { Draggable } from "@/components/Draggable";
import { Droppable } from "@/components/Droppable";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
  DEFAULT_COMPONENTS,
  DEFAULT_ELEVATION,
  snapToGridModifier,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
} from "@/utils/library";
import Selector from "@/components/Selector/Selector";
import Footer from "@/components/Footer/Footer";
import Logo from "@/components/Logo";
import DeleteBtn from "@/components/DeleteBtn/DeleteBtn";
import Collision from "@/components/Collision/Collision";

export default function Home() {
  const [hasCollisions, setHasCollisions] = useState(false);
  const [, setIsTooClose] = useState(false);
  const [showCollision, setShowCollision] = useState(false);
  const [selectedComponents, setSelectedComponents] =
    useState(DEFAULT_COMPONENTS);
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [modifiers, setModifiers] = useState([]);
  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});

  const [orderTotal, setOrderTotal] = useState(0);

  // Calculate the total price of all selected components
  useEffect(() => {
    const total = selectedComponents.reduce(
      (accumulator, currentComponent) => accumulator + currentComponent.price,
      0
    );
    setOrderTotal(total);
  }, [selectedComponents]);

  // For each elevation change, reset the isSelected state for all components
  useEffect(() => {
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) => ({
        ...component,
        isSelected: false,
      }))
    );
  }, [selectedElevation]);

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

  // Deselect components when clicking outside the component
  useEffect(() => {
    function handleClickOutside(event) {
      const isInsideDraggable = Object.values(draggableRefs).some(
        (ref) => ref.current && ref.current.contains(event.target)
      );

      if (!isInsideDraggable) {
        setSelectedComponents((currentComponents) =>
          currentComponents.map((component) => ({
            ...component,
            isSelected: false,
          }))
        );
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [draggableRefs]);

  const handleDragStart = (event) => {
    const { active } = event;
    const draggedItem = selectedComponents.find(
      (item) => item.id === active.id
    );

    const defaultModifiers = [restrictToParentElement, snapToGridModifier];

    const doorWindowModifiers = [...defaultModifiers, restrictToHorizontalAxis];

    if (draggedItem && draggedItem.objType === COMPONENT_TYPES.DOOR) {
      setModifiers([...doorWindowModifiers, snapToIncrement(11)]);
    } else if (draggedItem && draggedItem.objType === COMPONENT_TYPES.WINDOW) {
      setModifiers([...doorWindowModifiers, snapToIncrement(6)]);
    } else {
      setModifiers([defaultModifiers]);
    }
  };

  const handleDragEnd = (event) => {
    const draggedId = event.active.id;
    let updatedPieces = selectedComponents.map((piece) => {
      if (piece.id === draggedId) {
        // Apply the drag delta to update the position
        return {
          ...piece,
          position: {
            x: piece.position.x + event.delta.x,
            y: piece.position.y + event.delta.y,
          },
        };
      }
      return piece;
    });

    // Reset collision and closeness states before checking
    updatedPieces = updatedPieces.map((piece) => ({
      ...piece,
      isColliding: false,
      isTooClose: false,
    }));

    // Check each piece for collisions and closeness with the newly positioned dragged piece
    updatedPieces.forEach((piece, index) => {
      if (piece.id !== draggedId) {
        const draggedPiece = updatedPieces.find(({ id }) => id === draggedId);

        // Check for collisions and update the state accordingly
        if (
          draggedPiece &&
          checkCollision(draggedPiece, piece, selectedElevation)
        ) {
          updatedPieces[index].isColliding = true;
          const draggedPieceIndex = updatedPieces.findIndex(
            ({ id }) => id === draggedId
          );
          updatedPieces[draggedPieceIndex].isColliding = true;
        }

        // Check for closeness and update the state accordingly
        if (
          draggedPiece &&
          checkCloseness(draggedPiece, piece, selectedElevation)
        ) {
          updatedPieces[index].isTooClose = true;
          const draggedPieceIndex = updatedPieces.findIndex(
            ({ id }) => id === draggedId
          );
          updatedPieces[draggedPieceIndex].isTooClose = true;
        }
      }
    });

    // Update the component state with the pieces after checks
    setSelectedComponents(updatedPieces);

    // Update any other relevant state, such as flags for collision or closeness
    const collisionDetected = updatedPieces.some((piece) => piece.isColliding);
    const closenessDetected = updatedPieces.some((piece) => piece.isTooClose);
    setHasCollisions(collisionDetected);
    setIsTooClose(closenessDetected);
  };

  const handleSelect = (selectedId) => {
    setSelectedComponents((prevComponents) =>
      prevComponents.map((component) => {
        // Check if the current component is the one being selected
        if (component.id === selectedId) {
          // Toggle the isSelected state for the component
          return { ...component, isSelected: !component.isSelected };
        } else {
          // Set isSelected to false for all other components
          return { ...component, isSelected: false };
        }
      })
    );
  };

  const handleDeleteSelected = () => {
    setSelectedComponents((prevComponents) =>
      prevComponents.filter((component) => !component.isSelected)
    );
  };

  const isAnyItemSelected = selectedComponents.some(
    (component) => component.isSelected
  );

  return (
    <>
      <div style={{ display: "flex", padding: "2rem", position: "relative" }}>
        <Logo />
      </div>
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
      <div style={{ marginTop: "10rem" }}>
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
                .filter((piece) => piece.elevations.includes(selectedElevation))
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
      <div
        id="canvas-container"
        style={{ width: "100vw", height: "500px", position: "relative" }}
      >
        <Canvas>
          <ambientLight intensity={0.5} />
          <Thing />
          <Thing2 />
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
