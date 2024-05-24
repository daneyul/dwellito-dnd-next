"use client";
import React, { useState, useEffect, createContext, useContext } from "react";

import {
  checkCloseness,
  checkCollision,
  snapToIncrement,
} from "@/utils/2D/utils";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import Logo from "@/components/Logo";
import Viewer from "@/components/Viewer/Viewer";
import Sidebar from "@/components/Sidebar/Sidebar";
import PriceTotal from "@/components/PriceTotal/PriceTotal";
import { Library3dDataProvider } from "@/utils/3D/3dLibraryContext";
import { Library2dDataContext, Library2dDataProvider } from "@/utils/2D/2dLibraryContext";

export const PageDataContext = createContext();

const PageDataProvider = ({ children, data }) => {
  // API Data
  // const supplierData = data?.supplierData[0];
  // const thumbnailsData = data?.thumbnailsData;

  // 2D Library
  const {
    DEFAULT_COMPONENTS,
    DEFAULT_ELEVATION,
    snapToGridModifier,
    COMPONENT_TYPES,
    DIMENSIONS,
    INTERIOR_OPTIONS,
    colors
  } = useContext(Library2dDataContext);

  const [show3d, setShow3d] = useState(false);
  const [showExterior, setShowExterior] = useState(true);
  const [hasCollisions, setHasCollisions] = useState(false);
  const [showYourOrder, setShowYourOrder] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [, setIsTooClose] = useState(false);
  const [showCollision, setShowCollision] = useState(false);
  const [selectedComponents, setSelectedComponents] =
    useState(DEFAULT_COMPONENTS);
  const [selectedElevation, setSelectedElevation] = useState(DEFAULT_ELEVATION);
  const [selectedElevationIndex, setSelectedElevationIndex] = useState(0);
  const [modifiers, setModifiers] = useState([]);
  const draggableRefs = selectedComponents.reduce((acc, component) => {
    acc[component.id] = React.createRef();
    return acc;
  }, {});
  const [orderTotal, setOrderTotal] = useState(0);
  const [color, setColor] = useState(colors[0].hex);
  const [interior, setInterior] = useState(INTERIOR_OPTIONS[0]);

  const toggleOrder = () => {
    setShowYourOrder(!showYourOrder);
  };

  const toggleView = () => {
    setShow3d(!show3d);
  };

  // Calculate the total price of all selected components
  useEffect(() => {
    const total = selectedComponents.reduce(
      (accumulator, currentComponent) => accumulator + currentComponent.price,
      0
    ) + interior.price;
    setOrderTotal(total);
  }, [selectedComponents, interior]);

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

    // Handles component snapping
    if (draggedItem && draggedItem.objType === COMPONENT_TYPES.DOOR) {
      setModifiers([...doorWindowModifiers, snapToIncrement(11 * DIMENSIONS.SCALE_FACTOR)]);
    } else if (draggedItem && draggedItem.objType === COMPONENT_TYPES.WINDOW) {
      setModifiers([...doorWindowModifiers, snapToIncrement(6 * DIMENSIONS.SCALE_FACTOR)]);
    } else {
      setModifiers([...defaultModifiers]);
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
          checkCollision(draggedPiece, piece, selectedElevation, DIMENSIONS)
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
          checkCloseness(draggedPiece, piece, selectedElevation, DIMENSIONS)
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
        showYourOrder,
        toggleOrder,
        selectedElevationIndex,
        setSelectedElevationIndex,
        zipCode,
        setZipCode,
        show3d,
        toggleView,
        color,
        setColor,
        interior,
        setInterior,
        showExterior,
        setShowExterior,
      }}
    >
      {children}
    </PageDataContext.Provider>
  );
};

const Content = ({ data }) => {
  return (
    <Library2dDataProvider>
      <Library3dDataProvider>
        <PageDataProvider data={data}>
          <div style={{ position: "absolute", top: "2rem", left: "2rem" }}>
            <Logo />
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <Viewer />
            <Sidebar />
            <PriceTotal />
          </div>
        </PageDataProvider>
      </Library3dDataProvider>
    </Library2dDataProvider>
  );
};

export default Content;
