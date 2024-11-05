import { v4 as uuid } from 'uuid';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
  INTERIOR_FINISH_NAMES,
  SUPPLIER_SLUGS,
} from '../../constants/names/names';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { componentData } from '@/utils/constants/componentData';

export const generateImgSrc = (supplier, imgName) =>
  `../../../images/${supplier}/${imgName}`;

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
  scaleFactor,
}) => {
  if (!component) {
    return null;
  }

  const droppableWidthValue = droppableWidth(selectedElevation, DIMENSIONS);

  const boundaries = DIMENSIONS.SHED_BOUNDARIES.x;

  const left = deScale(component?.position?.x, scaleFactor) + boundaries;
  const right =
    droppableWidthValue -
    (deScale(component?.position.x, scaleFactor) + component.objWidth) +
    boundaries;
  const top = deScale(component?.position?.y, scaleFactor);

  return {
    left: Math.round(left * 100) / 100,
    right: Math.round(right * 100) / 100,
    top: Math.round(top * 100) / 100,
  };
};

export const handleAddComponent = ({
  item,
  selectedComponents,
  setSelectedComponents,
  selectedElevation,
}) => {
  if (
    item.fixed &&
    selectedComponents?.some((component) => component.name === item.name)
  ) {
    setSelectedComponents((prevSelectedComponents) =>
      prevSelectedComponents.filter((component) => component.name !== item.name)
    );
  } else {
    const newItem = {
      ...item,
      id: uuid(),
      position: { ...item.position },
      elevation: [...item.elevation, selectedElevation],
    };
    const isRoof = item.objType === COMPONENT_TYPES.ROOF;
    const isDoor = item.objType === COMPONENT_TYPES.DOOR;

    const isCottageDoor =
      isDoor && item.supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES;

    setSelectedComponents((prevSelectedComponents) => {
      if (isRoof) {
        // Remove any existing roof items and add the new roof
        const filteredComponents = prevSelectedComponents.filter(
          (component) => component.objType !== COMPONENT_TYPES.ROOF
        );
        return [...filteredComponents, item];
      } else if (isCottageDoor) {
        const filteredComponents = prevSelectedComponents.filter(
          (component) => component.objType !== COMPONENT_TYPES.DOOR
        );
        return [...filteredComponents, newItem];
      } else {
        return [...prevSelectedComponents, newItem];
      }
    });
  }
};

export const getUniqueElevationObjects = (selectedComponents) => {
  const allElevations = selectedComponents.flatMap(
    (component) => component.elevation
  );

  const uniqueElevationObjects = allElevations.reduce(
    (acc, currentElevation) => {
      // Filter out the floor plan elevation
      if (
        currentElevation.name !== ELEVATION_NAMES.FLOOR_PLAN &&
        !acc.some((elevation) => elevation.name === currentElevation.name)
      ) {
        acc.push(currentElevation);
      }
      return acc;
    },
    []
  );

  return uniqueElevationObjects;
};

export const DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES = (DIMENSIONS) => {
  return (
    DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.WIDTH -
    DIMENSIONS.SHED_BOUNDARIES.x * 2
  );
};
export const DROPPABLE_FRONT_WIDTH_WITH_BOUNDARIES = (DIMENSIONS) => {
  return (
    DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.WIDTH -
    DIMENSIONS.SHED_BOUNDARIES.x * 2
  );
};

export const droppableWidth = (selectedElevation, DIMENSIONS) => {
  if (!DIMENSIONS || !selectedElevation) {
    console.warn('Missing necessary parameters:', {
      DIMENSIONS,
      ELEVATION_NAMES,
      selectedElevation,
    });
    return 0;
  }
  switch (selectedElevation.name) {
    case ELEVATION_NAMES.LEFT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    case ELEVATION_NAMES.RIGHT:
      return DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    case ELEVATION_NAMES.BACK:
      return DROPPABLE_FRONT_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    case ELEVATION_NAMES.FRONT:
      return DROPPABLE_FRONT_WIDTH_WITH_BOUNDARIES(DIMENSIONS);
    default:
      console.warn('Unknown elevation name:', selectedElevation.name);
      return 0;
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
  ({ increment, scaleFactor }) =>
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

export const calculateShedComponentCSSPos = ({ piece }) => {
  let transform = '';
  let positionStyles = {};

  positionStyles = {
    left: `${piece.position.x}px`,
    top: `${piece.position.y}px`,
  };

  return {
    ...positionStyles,
    transform,
  };
};

export const jsonToBase64 = (jsonObj) => {
  try {
    // Convert JSON object to string
    const jsonString = JSON.stringify(jsonObj);

    // Encode the JSON string to Base64
    const base64Encoded = btoa(
      encodeURIComponent(jsonString).replace(/%([0-9A-F]{2})/g, (match, p1) => {
        return String.fromCharCode('0x' + p1);
      })
    );

    return base64Encoded;
  } catch (error) {
    console.error('Failed to convert JSON to Base64:', error);
    return null;
  }
};

export const base64ToJson = (base64String) => {
  try {
    // Decode the Base64 string
    const jsonString = decodeURIComponent(
      atob(base64String)
        .split('')
        .map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    // Parse the JSON string to get the JSON object
    const jsonObj = JSON.parse(jsonString);

    return jsonObj;
  } catch (error) {
    console.error('Failed to convert Base64 to JSON:', error);
    return null;
  }
};

export const getSelectionsFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.components) {
      return Object.values(jsonSelections.components);
    }
  }
  return null;
};

export const getInteriorFinishFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.interior) {
      return jsonSelections.interior;
    }
  }
  return null;
};

export const getExteriorFinishFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.exterior) {
      return jsonSelections.exterior;
    }
  }
  return null;
};

export const getFlooringFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.flooring) {
      return jsonSelections.flooring;
    }
  }
  return null;
};

export const getComponentPrice = (component, interiorFinish, isElectrical) => {
  if (isElectrical) {
    if (!interiorFinish || !interiorFinish.name) {
      return 0;
    }
    if (
      interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS ||
      interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING ||
      interiorFinish.name === INTERIOR_FINISH_NAMES.NONE
    ) {
      return component.priceSurface;
    } else if (
      interiorFinish.name &&
      interiorFinish.name !== INTERIOR_FINISH_NAMES.NONE
    ) {
      return component.priceRecessed;
    }
    return component.price;
  } else {
    return component.price;
  }
};
