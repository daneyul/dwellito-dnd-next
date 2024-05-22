import { v4 as uuid } from "uuid";

export const generateImgSrc = (imgName) =>
  `../../../images/CustomContainer/${imgName}`;

export const checkCollision = (item1, item2, selectedElevation, DIMENSIONS) => {
  // First, check if both items are on the selected elevation.
  // This assumes every item has an `elevation` array and that `selectedElevation` is a singular value or an identifier.
  const isOnSelectedElevation =
    item1.elevation.includes(selectedElevation) &&
    item2.elevation.includes(selectedElevation);

  if (!isOnSelectedElevation) {
    // If one or both items are not on the selected elevation, they cannot collide.
    return false;
  }

  const a = {
    left: item1.position.x,
    right:
      item1.position.x + parseInt(item1.objWidth * DIMENSIONS.SCALE_FACTOR, 10),
    top: item1.position.y,
    bottom:
      item1.position.y +
      parseInt(item1.objHeight * DIMENSIONS.SCALE_FACTOR, 10),
  };
  const b = {
    left: item2.position.x,
    right:
      item2.position.x + parseInt(item2.objWidth * DIMENSIONS.SCALE_FACTOR, 10),
    top: item2.position.y,
    bottom:
      item2.position.y +
      parseInt(item2.objHeight * DIMENSIONS.SCALE_FACTOR, 10),
  };

  // Check if any side from A is outside of B
  return !(
    a.right < b.left ||
    a.left > b.right ||
    a.bottom < b.top ||
    a.top > b.bottom
  );
};

// Inches are directly input as pixels, then scaled up
export const toScale = (value, DIMENSIONS) => {
  if (!DIMENSIONS || !DIMENSIONS.SCALE_FACTOR) {
    console.warn("DIMENSIONS or SCALE_FACTOR is undefined:", DIMENSIONS);
    return value; // Return the original value as a fallback
  }
  return value * DIMENSIONS.SCALE_FACTOR;
};

export const deScale = (value, DIMENSIONS) => {
  if (!DIMENSIONS || !DIMENSIONS.SCALE_FACTOR) {
    console.warn("DIMENSIONS or SCALE_FACTOR is undefined:", DIMENSIONS);
    return value; // Return the original value as a fallback
  }
  return value / DIMENSIONS.SCALE_FACTOR;
};


export const checkDistance = ({
  component,
  selectedElevation,
  DIMENSIONS,
  ELEVATION_NAMES,
}) => {
  const droppableWidthValue = droppableWidth(
    selectedElevation,
    DIMENSIONS,
    ELEVATION_NAMES
  ); // Use the function to get dynamic width

  return {
    left: Math.round(
      deScale(component.position.x, DIMENSIONS) + DIMENSIONS.BOUNDARIES.x
    ).toFixed(),
    right: Math.round(
      droppableWidthValue -
        (deScale(component.position.x, DIMENSIONS) + component.objWidth) +
        DIMENSIONS.BOUNDARIES.x
    ).toFixed(),
    top: Math.round(deScale(component.position.y, DIMENSIONS)).toFixed(),
  };
};

export const handleAddComponent = (
  item,
  setSelectedComponents,
  selectedElevation,
  setHasCollisions,
  DIMENSIONS
) => {
  setSelectedComponents((prevSelectedComponents) => {
    const newItem = {
      ...item,
      id: uuid(),
      position: { ...item.position },
      elevation: [...item.elevation, selectedElevation],
    };

    // Check for collision with each previously selected component
    const collisionDetected = prevSelectedComponents.some((component) =>
      checkCollision(newItem, component, selectedElevation, DIMENSIONS)
    );

    if (collisionDetected) {
      setHasCollisions(true);
      console.warn("Collision detected");
      return [...prevSelectedComponents, newItem];
    } else {
      setHasCollisions(false);
      return [...prevSelectedComponents, newItem];
    }
  });
};

export const handleRemoveComponent = (itemToRemove, setSelectedComponents) => {
  setSelectedComponents((prevSelectedComponents) => {
    // Find the last index where the objType matches the item to remove
    const lastIndex = prevSelectedComponents
      .slice()
      .reverse()
      .findIndex((obj) => obj.objType === itemToRemove.objType);
    const indexToRemove =
      lastIndex >= 0 ? prevSelectedComponents.length - 1 - lastIndex : -1;

    // Remove the item from the array
    if (indexToRemove > -1) {
      return [
        ...prevSelectedComponents.slice(0, indexToRemove),
        ...prevSelectedComponents.slice(indexToRemove + 1),
      ];
    }
    return prevSelectedComponents;
  });
};

export const getUniqueElevationObjects = (selectedComponents) => {
  const allElevations = selectedComponents.flatMap(
    (component) => component.elevation
  );

  const uniqueElevationObjects = allElevations.reduce(
    (acc, currentElevation) => {
      if (!acc.some((elevation) => elevation.name === currentElevation.name)) {
        acc.push(currentElevation);
      }
      return acc;
    },
    []
  );

  return uniqueElevationObjects;
};

export const DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES = (DIMENSIONS) => {
  return DIMENSIONS.CONTAINER.SIDE.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
};
export const DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES = (DIMENSIONS) => {
  return DIMENSIONS.CONTAINER.FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
};

export const droppableWidth = (
  selectedElevation,
  DIMENSIONS,
  ELEVATION_NAMES
) => {
  if (!DIMENSIONS || !ELEVATION_NAMES || !selectedElevation) {
    console.warn("Missing necessary parameters:", {
      DIMENSIONS,
      ELEVATION_NAMES,
      selectedElevation,
    });
    return 0; // Or any default value you see fit
  }
  switch (selectedElevation.name) {
    case ELEVATION_NAMES.LEFT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    case ELEVATION_NAMES.RIGHT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    case ELEVATION_NAMES.BACK:
      return DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    default:
      console.warn("Unknown elevation name:", selectedElevation.name);
      return 0; // Or any default value you see fit
  }
};

export const checkCloseness = (item1, item2, selectedElevation) => {
  const closenessThreshold = 6 * DIMENSIONS.SCALE_FACTOR;

  const isOnSelectedElevation =
    item1.elevation.includes(selectedElevation) &&
    item2.elevation.includes(selectedElevation);

  if (!isOnSelectedElevation) {
    return false;
  }

  const a = {
    left: item1.position.x,
    right: item1.position.x + item1.objWidth * DIMENSIONS.SCALE_FACTOR,
    top: item1.position.y,
    bottom: item1.position.y + item1.objHeight * DIMENSIONS.SCALE_FACTOR,
  };
  const b = {
    left: item2.position.x,
    right: item2.position.x + item2.objWidth * DIMENSIONS.SCALE_FACTOR,
    top: item2.position.y,
    bottom: item2.position.y + item2.objHeight * DIMENSIONS.SCALE_FACTOR,
  };

  const tooCloseHorizontally =
    Math.min(a.right, b.right) - Math.max(a.left, b.left) > -closenessThreshold;
  const tooCloseVertically =
    Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > -closenessThreshold;

  return tooCloseHorizontally && tooCloseVertically;
};

export const snapToIncrement =
  (increment) =>
  ({ transform }) => {
    if (transform && typeof transform.x === "number") {
      return {
        ...transform,
        // Only modify x if it's defined and is a number
        x: Math.round(transform.x / toScale(increment)) * toScale(increment),
      };
    }

    return transform;
  };
