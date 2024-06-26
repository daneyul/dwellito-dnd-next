import { v4 as uuid } from 'uuid';
import { ELEVATION_NAMES } from '../constants/names';

export const generateImgSrc = (imgName) => `../../../images/${imgName}`;

export const checkCollision = (
  item1,
  item2,
  selectedElevation,
  scaleFactor
) => {
  // if (item1.fixed || item2.fixed) { return false };

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
    right: item1.position.x + parseInt(item1.objWidth * scaleFactor, 10),
    top: item1.position.y,
    bottom: item1.position.y + parseInt(item1.objHeight * scaleFactor, 10),
  };
  const b = {
    left: item2.position.x,
    right: item2.position.x + parseInt(item2.objWidth * scaleFactor, 10),
    top: item2.position.y,
    bottom: item2.position.y + parseInt(item2.objHeight * scaleFactor, 10),
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
export const toScale = (value, scaleFactor) => {
  if (!scaleFactor) {
    console.warn('scaleFactor is undefined:');
    return value; // Return the original value as a fallback
  }
  return value * scaleFactor;
};

export const deScale = (value, scaleFactor) => {
  if (!scaleFactor) {
    console.warn('scaleFactor is undefined:');
    return value; // Return the original value as a fallback
  }
  return value / scaleFactor;
};

export const checkDistance = ({
  component,
  selectedElevation,
  DIMENSIONS,
  selectedContainer,
  scaleFactor,
}) => {
  if (!component) { return null; };
  
  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;

  // Use the function to get dynamic width
  const droppableWidthValue = droppableWidth(selectedElevation, DIMENSIONS, selectedContainer);

  const boundaries = isFloorPlanView ? 0 : DIMENSIONS.BOUNDARIES.x;

  return {
    left: deScale(component?.position.x, scaleFactor) + boundaries,
    right:
      droppableWidthValue -
      (deScale(component?.position.x, scaleFactor) + component.objWidth) +
      boundaries,
    top: deScale(component?.position.y, scaleFactor),
  };
};

export const handleAddComponent = (
  item,
  setSelectedComponents,
  selectedElevation,
) => {
  setSelectedComponents((prevSelectedComponents) => {
    const newItem = {
      ...item,
      id: uuid(),
      position: { ...item.position },
      elevation: [...item.elevation, selectedElevation],
    };

    return [...prevSelectedComponents, newItem];
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

export const DROPPABLE_FLOOR_PLAN_WIDTH = (DIMENSIONS, selectedContainer) => {
  if (selectedContainer.name === `10' Custom Cube`) {
    return DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH;
  } else if (selectedContainer.name === `20' Custom Cube`) {
    return DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH;
  } else if (selectedContainer.name === `40' Custom Cube`) {
    return DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH;
  }
};

export const DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES = (
  DIMENSIONS,
  selectedContainer
) => {
  if (selectedContainer.name === `10' Custom Cube`) {
    return DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
  } else if (selectedContainer.name === `20' Custom Cube`) {
    return DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
  } else if (selectedContainer.name === `40' Custom Cube`) {
    return DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
  }
};
export const DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES = (
  DIMENSIONS,
  selectedContainer
) => {
  if (selectedContainer.name === `10' Custom Cube`) {
    return DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
  } else if (selectedContainer.name === `20' Custom Cube`) {
    return (
      DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2
    );
  } else if (selectedContainer.name === `40' Custom Cube`) {
    return DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH - DIMENSIONS.BOUNDARIES.x * 2;
  }
};

export const droppableWidth = (
  selectedElevation,
  DIMENSIONS,
  selectedContainer
) => {
  if (!DIMENSIONS || !selectedElevation) {
    console.warn('Missing necessary parameters:', {
      DIMENSIONS,
      ELEVATION_NAMES,
      selectedElevation,
    });
    return 0; // Or any default value you see fit
  }
  switch (selectedElevation.name) {
    case ELEVATION_NAMES.LEFT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(
        DIMENSIONS,
        selectedContainer
      );
    case ELEVATION_NAMES.RIGHT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(
        DIMENSIONS,
        selectedContainer
      );
    case ELEVATION_NAMES.BACK:
      return DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES(
        DIMENSIONS,
        selectedContainer
      );
    case ELEVATION_NAMES.FLOOR_PLAN:
      return DROPPABLE_FLOOR_PLAN_WIDTH(DIMENSIONS, selectedContainer);
    default:
      console.warn('Unknown elevation name:', selectedElevation.name);
      return 0; // Or any default value you see fit
  }
};

export const checkCloseness = (
  item1,
  item2,
  selectedElevation,
  scaleFactor
) => {
  const closenessThreshold = 6 * scaleFactor;

  const isOnSelectedElevation =
    item1.elevation.includes(selectedElevation) &&
    item2.elevation.includes(selectedElevation);

  if (!isOnSelectedElevation) {
    return false;
  }

  const a = {
    left: item1.position.x,
    right: item1.position.x + item1.objWidth * scaleFactor,
    top: item1.position.y,
    bottom: item1.position.y + item1.objHeight * scaleFactor,
  };
  const b = {
    left: item2.position.x,
    right: item2.position.x + item2.objWidth * scaleFactor,
    top: item2.position.y,
    bottom: item2.position.y + item2.objHeight * scaleFactor,
  };

  const tooCloseHorizontally =
    Math.min(a.right, b.right) - Math.max(a.left, b.left) > -closenessThreshold;
  const tooCloseVertically =
    Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > -closenessThreshold;

  return tooCloseHorizontally && tooCloseVertically;
};

export const snapToIncrement =
  (increment, scaleFactor) =>
  ({ transform }) => {
    if (transform && typeof transform.x === 'number') {
      return {
        ...transform,
        // Only modify x if it's defined and is a number
        x:
          Math.round(transform.x / toScale(increment, scaleFactor)) *
          toScale(increment, scaleFactor),
      };
    }

    return transform;
  };

export const snapToEdgesModifier = ({ transform, active, over }) => {
  if (!over || !active) {
    return transform;
  }

  const overRect = over.rect.current;
  const activeRect = active.rect.current;

  if (!overRect || !activeRect) {
    return transform;
  }

  const snapTo = {
    x: activeRect.width / 2,
    y: activeRect.height / 2,
  };

  const deltaX = transform.x - snapTo.x;
  const deltaY = transform.y - snapTo.y;

  const closestEdge = {
    x: deltaX < overRect.width / 2 ? 0 : overRect.width - activeRect.width,
    y: deltaY < overRect.height / 2 ? 0 : overRect.height - activeRect.height,
  };

  return {
    x: closestEdge.x,
    y: closestEdge.y,
  };
};
