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
import {
  Library3dDataContext,
  Library3dDataProvider,
} from "@/utils/3D/3dLibraryContext";
import {
  Library2dDataContext,
  Library2dDataProvider,
} from "@/utils/2D/2dLibraryContext";

export const PageDataContext = createContext();

const PageDataProvider = ({ children, data }) => {
  const slug = data.slug;

  const {
    DEFAULT_COMPONENTS,
    snapToGridModifier,
    COMPONENT_TYPES,
    elevationData,
    containerData,
    ELEVATION_NAMES,
  } = useContext(Library2dDataContext);
  
  const { INTERIOR_FINISH_OPTIONS, EXTERIOR_FINISH_OPTIONS, FLOORING_OPTIONS } =
    useContext(Library3dDataContext);

  const DEFAULT_ELEVATION = elevationData.find(
    (item) => item.name === ELEVATION_NAMES.RIGHT && item.homePlan === slug
  );

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
  const [exteriorFinish, setExteriorFinish] = useState(
    EXTERIOR_FINISH_OPTIONS[0]
  );
  const [interiorFinish, setInteriorFinish] = useState(
    INTERIOR_FINISH_OPTIONS[0]
  );
  const [flooring, setFlooring] = useState(
    FLOORING_OPTIONS[0]
  );
  const selectedContainer = containerData.find(
    (container) => container.slug === slug
  );
  const containerId = selectedContainer.id;
  const [mappedElevations, setMappedElevations] = useState(
    elevationData.filter((elevation) => {
      if (elevation.homePlan === selectedContainer.slug) {
        return elevation;
      }
    })
  );
  const [scaleFactor, setScaleFactor] = useState();

  useEffect(() => {
    if (selectedContainer.slug === containerData[2].slug) {
      setScaleFactor(1.75);
    } else {
      setScaleFactor(2.5);
    }
  }, [selectedContainer, containerData]);

  const toggleOrder = () => {
    setShowYourOrder(!showYourOrder);
  };

  // Calculate the total price of all selected components
  useEffect(() => {
    const total =
      selectedComponents.reduce(
        (accumulator, currentComponent) => accumulator + currentComponent.price,
        0
      ) + interiorFinish.price;
    setOrderTotal(total);
  }, [selectedComponents, interiorFinish]);

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
      setModifiers([...doorWindowModifiers, snapToIncrement(11 * scaleFactor)]);
    } else if (draggedItem && draggedItem.objType === COMPONENT_TYPES.WINDOW) {
      setModifiers([...doorWindowModifiers, snapToIncrement(6 * scaleFactor)]);
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
          checkCollision(draggedPiece, piece, selectedElevation, scaleFactor)
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
          checkCloseness(draggedPiece, piece, selectedElevation, scaleFactor)
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
        setShow3d,
        exteriorFinish,
        setExteriorFinish,
        interiorFinish,
        setInteriorFinish,
        showExterior,
        setShowExterior,
        mappedElevations,
        setMappedElevations,
        selectedContainer,
        containerId,
        slug,
        scaleFactor,
        setScaleFactor,
        flooring,
        setFlooring
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
