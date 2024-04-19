"use client";
import React, { useState, useEffect, createContext } from "react";

import {
  checkCloseness,
  checkCollision,
  snapToIncrement,
} from "@/utils/2D/utils";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import {
  DEFAULT_COMPONENTS,
  DEFAULT_ELEVATION,
  snapToGridModifier,
  COMPONENT_TYPES,
} from "@/utils/2D/library";
import HomeContent from "./pageContext";
import Logo from "@/components/Logo";
import Viewer from "./pageContext";
import Sidebar from "@/components/Sidebar/Sidebar";

export const PageDataContext = createContext();

const PageDataProvider = ({ children }) => {
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
    <PageDataContext.Provider
      value={{
        selectedComponents,
        setSelectedComponents,
        selectedElevation,
        setSelectedElevation,
        orderTotal,
        setOrderTotal,
        handleDragStart,
        handleDragEnd,
        handleSelect,
        handleDeleteSelected,
        isAnyItemSelected,
        showCollision,
        selectedElevation,
        setSelectedElevation,
        selectedComponents,
        draggableRefs,
        hasCollisions,
        setHasCollisions,
        modifiers,
        isAnyItemSelected,
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

const Home = () => {
  return (
    <PageDataProvider>
      <div style={{ position: "absolute", top: "2rem", left: "2rem" }}>
        <Logo />
      </div>
      <Viewer />
      {/* <div style={{ display: "flex" }}>
        <Viewer />
        <Sidebar />
      </div> */}
    </PageDataProvider>
  );
};

export default Home;
