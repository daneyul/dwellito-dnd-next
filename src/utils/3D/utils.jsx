import { CONTAINER_SIZE_10, CONTAINER_SIZE_20, CONTAINER_SIZE_40, ELEVATION_NAMES } from '../constants/names/names';
import { DIMENSIONS } from '../constants/dimensions/dimensions';
import { containerElevationData } from '../constants/components/elevations/containerElevationData';
import { elevationData } from '../constants/components/elevations/elevationData';

const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
};

const calcRotation = (elevation, selectedBase) => {
  const matchingElevation = containerElevationData.find(
    (item) =>
      item.homePlan === selectedBase.slug && item.name === elevation.name
  );

  if (matchingElevation) {
    switch (matchingElevation.name) {
      case ELEVATION_NAMES.LEFT:
        return degrees[180];
      case ELEVATION_NAMES.FRONT:
        return degrees[270];
      case ELEVATION_NAMES.RIGHT:
        return 0;
      case ELEVATION_NAMES.BACK:
        return degrees[90];
      default:
        break;
    }
  }

  return null;
};

const calcElecRotation = (twoDimDegrees) => {
  // Normalize the degrees to a value between 0 and 360
  const normalizedDegrees = twoDimDegrees % 360;

  // Calculate the corresponding 3D rotation in radians
  const radians = (normalizedDegrees * Math.PI) / -180;

  return radians;
};

const rightSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };
  const adjustForZ = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(parseFloat(distanceObject.top) + 4);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(parseFloat(distanceObject.top) + 4);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(parseFloat(distanceObject.top / 1.4) + 4);
    }
  };

  let xPosition =
    distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX();
  let yPosition = 0 + adjustForY() - 0.1;
  let zPosition = adjustForZ() / SCALE_FACTOR_FOR_CALCULATIONS;

  return [xPosition, zPosition, yPosition];
};
const leftSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
  width,
}) => {
  const adjustForX = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };
  const adjustForZ = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(parseFloat(distanceObject.top) + 4);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(parseFloat(distanceObject.top) + 4);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(parseFloat(distanceObject.top / 1.4) + 4);
    }
  };

  let xPosition = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return (
        distanceObject.right / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() +
        width + 0.6
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return (
        distanceObject.right / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() +
        width + 0.6
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return (
        distanceObject.right / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() +
        width + 0.6
      );
    }
  };
  let yPosition = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return (
        -DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY() -
        0.2
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return (
        -DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY() -
        0.2
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return (
        -DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY() -
        0.2
      );
    }
  };
  let zPosition = adjustForZ() / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition(), zPosition, yPosition()];
};
const frontSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };
  let xPosition = 0 + adjustForX();
  let yPosition = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return (
        (DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH - distanceObject.left) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return (
        (DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH - distanceObject.left) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return (
        (DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH - distanceObject.left) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    }
  };
  let zPosition =
    -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition, zPosition, yPosition()];
};
const backSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };

  let xPosition = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return (
        DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() + 0.2
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return (
        DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() + 0.5
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return (
        DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForX() + 1.2
      );
    }
  };
  let yPosition =
    -distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY() - 0.9;
  let zPosition =
    -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition(), zPosition, yPosition];
};

const electricalCoordinates = (
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase
) => {
  const adjustForX = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  };
  const adjustForY = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  };

  let xPosition =
    distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX();

  let yPosition = () => {
    if (selectedBase.slug === CONTAINER_SIZE_10) {
      return (
        (DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH - distanceObject.top) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_20) {
      return (
        -(DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH - distanceObject.top) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    } else if (selectedBase.slug === CONTAINER_SIZE_40) {
      return (
        (DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH - distanceObject.top) /
          SCALE_FACTOR_FOR_CALCULATIONS +
        adjustForY()
      );
    }
  };

  return [xPosition, 0, yPosition()];
};

const calcPosition = ({
  elevation,
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
  width
}) => {
  const matchingElevation = elevationData.find(
    (item) =>
      item.homePlan === selectedBase.slug && item.name === elevation.name
  );

  if (matchingElevation) {
    switch (matchingElevation.name) {
      case ELEVATION_NAMES.LEFT:
        return leftSideCoordinates({
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase,
          width,
        });
      case ELEVATION_NAMES.FRONT:
        return frontSideCoordinates({
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase,
        });
      case ELEVATION_NAMES.RIGHT:
        return rightSideCoordinates({
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase,
        });
      case ELEVATION_NAMES.BACK:
        return backSideCoordinates({
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase,
        });
      case ELEVATION_NAMES.FLOOR_PLAN:
        return electricalCoordinates(
          distanceObject,
          SCALE_FACTOR_FOR_CALCULATIONS,
          selectedBase
        );
      default:
        break;
    }
  }

  return null;
};

export { calcRotation, calcPosition, calcElecRotation };
