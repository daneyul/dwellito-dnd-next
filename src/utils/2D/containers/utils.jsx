import { v4 as uuid } from 'uuid';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  ELEVATION_NAMES,
  INTERIOR_FINISH_NAMES,
  SUPPLIER_SLUGS,
} from '../../constants/names/names';
import { ventComponents } from '../../constants/components/vents/vents';
import { DIMENSIONS } from '../../constants/dimensions/dimensions';

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
  DIMENSIONS,
  selectedContainer,
  scaleFactor,
}) => {
  if (!component) {
    return null;
  }

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN;
  const isLeft = selectedElevation.name === ELEVATION_NAMES.LEFT;
  const isBack = selectedElevation.name === ELEVATION_NAMES.BACK;

  // Use the function to get dynamic width
  const droppableWidthValue = selectedContainer
    ? droppableWidth(selectedElevation, DIMENSIONS, selectedContainer)
    : 0;

  const boundaries = () => {
    // Could have floor plan view set as a default if electrical
    if (isFloorPlanView) {
      if (component.fixedSide) {
        if (
          component.fixedSide === ELEVATION_NAMES.RIGHT ||
          component.fixedSide === ELEVATION_NAMES.LEFT
        ) {
          return DIMENSIONS.CONTAINER_BOUNDARIES.x;
        } else {
          return DIMENSIONS.CONTAINER_BACK_BOUNDARIES.x;
        }
      } else {
        return 0;
      }
    } else {
      if (isBack) {
        return DIMENSIONS.CONTAINER_BACK_BOUNDARIES.x;
      } else {
        return DIMENSIONS.CONTAINER_BOUNDARIES.x;
      }
    }
  };

  const left = deScale(component?.position.x, scaleFactor) + boundaries();
  const right =
    droppableWidthValue -
    (deScale(component?.position.x, scaleFactor) + component.objWidth) +
    boundaries();
  const top = deScale(component?.position.y, scaleFactor);

  return {
    left: isLeft ? Math.round(right * 100) / 100 : Math.round(left * 100) / 100,
    right: isLeft
      ? Math.round(left * 100) / 100
      : Math.round(right * 100) / 100,
    top: Math.round(top * 100) / 100,
  };
};

export const handleAddComponent = ({
  item,
  setSelectedComponents,
  selectedElevation,
  floorPlan,
  supplier,
}) => {
  // If item is a can light or wrap light, remove the opposite type before adding
  const isCanLight = item.isCanLight;
  const isWrapLight = item.isWrapLight;

  setSelectedComponents((prevSelectedComponents) => {
    let updatedComponents = prevSelectedComponents;

    if (isCanLight) {
      // Remove wrap light if can light is selected
      updatedComponents = updatedComponents.filter(
        (component) => !component.isWrapLight
      );
    } else if (isWrapLight) {
      // Remove can light if wrap light is selected
      updatedComponents = updatedComponents.filter(
        (component) => !component.isCanLight
      );
    }

    // Check if the item is fixed and already selected, if so, deselect it
    if (item.fixed && updatedComponents.some((c) => c.name === item.name)) {
      return updatedComponents.filter(
        (component) => component.name !== item.name
      );
    }

    // Create new item to be added with unique ID and position
    const newItem = {
      ...item,
      id: uuid(),
      position: { ...item.position },
      elevation: [...item.elevation, selectedElevation],
    };

    // Additional logic for specific types, e.g., roofs or specific supplier requirements
    const isRoof = item.objType === COMPONENT_TYPES.ROOF;
    const isRoofVent = item.name === COMPONENT_NAMES.ROOF_VENT;
    const roofVentObjData = ventComponents.find(
      (component) => component.name === COMPONENT_NAMES.ROOF_VENT
    );
    const isCottageDoor =
      item.objType === COMPONENT_TYPES.DOOR &&
      supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES;

    const roofVent = {
      ...roofVentObjData,
      position: { ...roofVentObjData.position },
      elevation: [floorPlan],
    };

    if (isRoof) {
      // Remove existing roof items and add the new roof
      updatedComponents = updatedComponents.filter(
        (component) => component.objType !== COMPONENT_TYPES.ROOF
      );
      return [...updatedComponents, newItem];
    } else if (isRoofVent) {
      // Remove existing roof vent items and add the new roof vent
      updatedComponents = updatedComponents.filter(
        (component) => component.name !== COMPONENT_NAMES.ROOF_VENT
      );
      return [...updatedComponents, roofVent];
    } else if (isCottageDoor) {
      // Remove existing doors and add the new cottage door
      updatedComponents = updatedComponents.filter(
        (component) => component.objType !== COMPONENT_TYPES.DOOR
      );
      return [...updatedComponents, newItem];
    } else {
      // Add the new item normally
      return [...updatedComponents, newItem];
    }
  });
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

export const DROPPABLE_FLOOR_PLAN_WIDTH = (DIMENSIONS, selectedContainer) => {
  if (selectedContainer.slug === CONTAINER_SIZE_10) {
    return (
      DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
    return (
      DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
    return (
      DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  }
};

export const DROPPABLE_SIDE_WIDTH_WITH_BOUNDARIES = (
  DIMENSIONS,
  selectedContainer
) => {
  if (selectedContainer.slug === CONTAINER_SIZE_10) {
    return (
      DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
    return (
      DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
    return (
      DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH -
      DIMENSIONS.CONTAINER_BOUNDARIES.x * 2
    );
  }
};
export const DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES = (
  DIMENSIONS,
  selectedContainer
) => {
  if (selectedContainer.slug === CONTAINER_SIZE_10) {
    return (
      DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH -
      DIMENSIONS.CONTAINER_BACK_BOUNDARIES.x * 2.7
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
    return (
      DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH -
      DIMENSIONS.CONTAINER_BACK_BOUNDARIES.x * 2.7
    );
  } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
    return (
      DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH -
      DIMENSIONS.CONTAINER_BACK_BOUNDARIES.x * 2.7
    );
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
    return 0;
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
    case ELEVATION_NAMES.FRONT:
      return DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES(
        DIMENSIONS,
        selectedContainer
      );
    case ELEVATION_NAMES.FLOOR_PLAN:
      return DROPPABLE_FLOOR_PLAN_WIDTH(DIMENSIONS, selectedContainer);
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

// This calculates the CSS positions based on the piece's position and elevation
export const calculateContainerComponentCSSPos = ({
  isFloorPlanView,
  isFixed,
  piece,
  scaleFactor,
  adjForContainerHeight,
  selectedElevation,
  supplier,
  selectedContainer,
}) => {
  let transform = '';
  let positionStyles = {};

  if (isFloorPlanView) {
    if (isFixed) {
      if (piece.fixedSide === ELEVATION_NAMES.RIGHT) {
        transform = `rotate(90deg) translateX(10px)`;
        positionStyles = {
          bottom: '0',
          right: `${adjForContainerHeight(
            piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
          )}px`,
        };
      } else if (piece.fixedSide === ELEVATION_NAMES.BACK) {
        transform = 'translateX(50%)';
        positionStyles = {
          bottom: `${adjForContainerHeight(
            piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
          )}px`,
          right: '0',
        };
      } else if (piece.name === COMPONENT_NAMES.ROOF_VENT) {
        transform = 'translateY(-50%)';
        positionStyles = {
          left: `${
            piece.position.x +
            toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
          }px`,
          top: '50%',
        };
      } else if (piece.isWrapLight || piece.isCanLight) {
        transform = 'translateY(-50%) translateX(-50%)';
        positionStyles = {
          left: `50%`,
          top: '50%',
        };
      }
    } else {
      if (piece.moveableInFloorPlan) {
        positionStyles = {
          left: `${piece.position.x}px`,
          top: `${piece.position.y}px`,
        };
      } else if (piece.elevation[0].name === ELEVATION_NAMES.LEFT) {
        transform = 'translateY(-100%)';
        if (
          piece.name === COMPONENT_NAMES.WINDOW ||
          piece.name === COMPONENT_NAMES.WINDOW_SECURITY
        ) {
          positionStyles = {
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            top: '16px',
          };
        } else if (piece.isRollUp && supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
          positionStyles = {
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            top: '50px',
          };
        } else if (piece.isRollUp && supplier === SUPPLIER_SLUGS.AT_AND_S) {
          positionStyles = {
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            top: '10px',
          };
        } else if (piece.objType === COMPONENT_TYPES.VENT) {
          if (piece.name === COMPONENT_NAMES.LOUVER_VENT) {
            positionStyles = {
              left: `${
                piece.position.x +
                toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
              }px`,
              top: '6px',
            };
          } else {
            positionStyles = {
              left: `${
                piece.position.x +
                toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
              }px`,
              top: '8px',
            };
          }
        } else if (piece.isExteriorLight) {
          positionStyles = {
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            top: '3px',
          };
        } else {
          positionStyles = {
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            top: '10px',
          };
        }
      } else if (piece.elevation[0].name === ELEVATION_NAMES.RIGHT) {
        transform = 'translateY(100%)';
        if (
          piece.name === COMPONENT_NAMES.WINDOW ||
          piece.name === COMPONENT_NAMES.WINDOW_SECURITY
        ) {
          positionStyles = {
            bottom: '14px',
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
          };
        } else if (piece.isRollUp && supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
          positionStyles = {
            bottom: `${adjForContainerHeight(48)}px`,
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
          };
        } else if (piece.isRollUp && supplier === SUPPLIER_SLUGS.AT_AND_S) {
          positionStyles = {
            bottom: '10px',
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
          };
        } else if (piece.isExteriorLight) {
          positionStyles = {
            bottom: '2px',
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
          };
        } else {
          positionStyles = {
            bottom: '10px',
            left: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
          };
        }
      } else if (piece.elevation[0].name === ELEVATION_NAMES.BACK) {
        if (piece.isExteriorLight) {
          transform = `rotate(270deg) translateX(100%) translateY(calc(100% - 12px))`;
          positionStyles = {
            bottom: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            right: `-10px`,
            transformOrigin: 'right bottom',
          };
        } else if (
          piece.name === COMPONENT_NAMES.WINDOW ||
          piece.name === COMPONENT_NAMES.WINDOW_SECURITY
        ) {
          transform = `rotate(270deg) translateX(50%) translateY(calc(100% - 12px))`;
          positionStyles = {
            bottom: `${toScale(
              DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH / 2,
              scaleFactor
            )}px`,
            right: `2px`,
            transformOrigin: 'right bottom',
          };
        } else if (
          piece.objType === COMPONENT_TYPES.DOOR ||
          piece.objType === COMPONENT_TYPES.WINDOW
        ) {
          transform = `rotate(270deg) translateX(50%) translateY(calc(100% - 12px))`;
          positionStyles = {
            bottom: `${toScale(
              DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH / 2,
              scaleFactor
            )}px`,
            right: `-4px`,
            transformOrigin: 'right bottom',
          };
        } else {
          transform = `rotate(270deg) translateX(100%) translateY(calc(100% - 12px))`;
          positionStyles = {
            bottom: `${
              piece.position.x +
              toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
            }px`,
            right: `-4px`,
            transformOrigin: 'right bottom',
          };
        }
      } else if (piece.elevation[0].name === ELEVATION_NAMES.FRONT) {
        transform = 'translateY(100%)';
        positionStyles = {
          bottom: '10px',
          left: `${
            piece.position.x +
            toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
          }px`,
        };
      }
    }
  } else if (isFixed && !!piece.alwaysShowOn) {
    if (!!piece.fixedSide && selectedElevation.name === piece.fixedSide) {
      // For fixed components on elevation views, show front view
      if (piece.name === COMPONENT_NAMES.EXHAUST_FAN) {
        positionStyles = {
          right: `${adjForContainerHeight(piece.position.x)}px`,
          top: `${adjForContainerHeight(piece.position.y)}px`,
        };
      } else {
        positionStyles = {
          left: `${adjForContainerHeight(piece.position.x)}px`,
          top: `${adjForContainerHeight(piece.position.y)}px`,
        };
      }
    } else if (!piece.fixedSide) {
      if (selectedElevation.name === ELEVATION_NAMES.RIGHT) {
        transform = 'translateY(-100%)';
        positionStyles = {
          left: `${piece.position.x}px`,
          top: '3px',
        };
      } else if (selectedElevation.name === ELEVATION_NAMES.LEFT) {
        transform = 'translateY(-100%)';
        positionStyles = {
          right: `${piece.position.x}px`,
          top: '3px',
        };
      } else if (selectedElevation.name === ELEVATION_NAMES.BACK) {
        transform = 'translateX(-50%) translateY(-100%)';
        positionStyles = {
          left: '50%',
          top: '3px',
        };
      }
    } else if (selectedElevation.name === ELEVATION_NAMES.RIGHT) {
      transform = 'translateX(100%)';
      positionStyles = {
        right: `${
          4 - toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
        }px`,
        top: `${piece.position.y}px`,
      };
    } else if (selectedElevation.name === ELEVATION_NAMES.LEFT) {
      transform = 'translateX(-100%) scaleX(-1)';
      positionStyles = {
        left: `${
          3 - toScale(DIMENSIONS.CONTAINER_BOUNDARIES.x, scaleFactor)
        }px`,
        top: `${piece.position.y}px`,
      };
    } else {
      positionStyles = {
        left: `${piece.position.x}px`,
        top: `${piece.position.y}px`,
      };
    }
  } else {
    if (piece.elevation[0].name === ELEVATION_NAMES.LEFT) {
      positionStyles = {
        right: `${piece.position.x}px`,
        top: `${adjForContainerHeight(piece.position.y)}px`,
      };
    } else if (piece.elevation[0].name === ELEVATION_NAMES.BACK) {
      if (
        piece.objType === COMPONENT_TYPES.DOOR ||
        piece.objType === COMPONENT_TYPES.WINDOW
      ) {
        transform = 'translateX(-50%)';
        positionStyles = {
          left: `${toScale(
            DROPPABLE_BACK_WIDTH_WITH_BOUNDARIES(
              DIMENSIONS,
              selectedContainer
            ) / 2,
            scaleFactor
          )}px`,
          top: `${adjForContainerHeight(piece.position.y)}px`,
        };
      } else {
        positionStyles = {
          left: `${piece.position.x}px`,
          top: `${adjForContainerHeight(piece.position.y)}px`,
        };
      }
    } else {
      positionStyles = {
        left: `${piece.position.x}px`,
        top: `${adjForContainerHeight(piece.position.y)}px`,
      };
    }
  }

  return {
    ...positionStyles,
    transform,
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

export const getInteriorTrimFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.interiorTrim) {
      return jsonSelections.interiorTrim;
    }
  }
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
      return component.priceSurface || component.price;
    } else if (
      interiorFinish.name &&
      interiorFinish.name !== INTERIOR_FINISH_NAMES.NONE
    ) {
      return component.priceRecessed || component.price;
    }
    return component.price;
  } else {
    return component.price;
  }
};

export const getContainerHeightFromUrl = (querySelectionData) => {
  if (querySelectionData) {
    const jsonSelections = base64ToJson(querySelectionData);
    if (jsonSelections && jsonSelections.containerHeight) {
      return jsonSelections.containerHeight;
    }
  }
};
