import { ELEVATION_NAMES } from '../../constants/names/names';
import { DIMENSIONS } from '../../constants/dimensions/dimensions';
import { shedElevationData } from '../../constants/components/elevations/shedElevationData';
import { elevationData } from '../../constants/components/elevations/elevationData';

const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
};

const calcRotation = (elevation, selectedBase) => {
  const matchingElevation = shedElevationData.find(
    (item) =>
      item.homePlan === selectedBase.slug && item.name === elevation.name
  );

  if (matchingElevation) {
    switch (matchingElevation.name) {
      case ELEVATION_NAMES.LEFT:
        return degrees[270];
      case ELEVATION_NAMES.FRONT:
        return 0;
      case ELEVATION_NAMES.RIGHT:
        return degrees[90];
      case ELEVATION_NAMES.BACK:
        return degrees[180];
      default:
        break;
    }
  }

  return null;
};

const frontSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  };
  const adjustForY = () => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;
  };
  const adjustForZ = () => {
    return -(parseFloat(distanceObject.top));
  };

  let xPosition =
    distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX();
  let yPosition = 0 + adjustForY() - 0.1;
  let zPosition = adjustForZ() / SCALE_FACTOR_FOR_CALCULATIONS;

  return [xPosition, zPosition, yPosition];
};
const backSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
  width,
}) => {
  const adjustForX = () => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  };
  const adjustForY = () => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2
  };
  const adjustForZ = () => {
    return -(parseFloat(distanceObject.top));
  };

  let xPosition = () => {
    return (
      distanceObject.right / SCALE_FACTOR_FOR_CALCULATIONS +
      adjustForX() +
      width
    )
  };
  let yPosition = () => {
    return (
      -DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + 
      adjustForY()
    )
  };
  let zPosition = adjustForZ() / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition(), zPosition, yPosition()];
};
const leftSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  };
  const adjustForY = () => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;
  };
  let xPosition = 0 + adjustForX();
  let yPosition = () => {
    return (
      (DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.FRONT.WIDTH - distanceObject.left) /
        SCALE_FACTOR_FOR_CALCULATIONS +
      adjustForY()
    )
  };
  let zPosition =
    -(parseFloat(distanceObject.top)) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition, zPosition, yPosition()];
};
const rightSideCoordinates = ({
  distanceObject,
  SCALE_FACTOR_FOR_CALCULATIONS,
  selectedBase,
}) => {
  const adjustForX = () => {
    return -(DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2);
  };
  const adjustForY = () => {
    return DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;
  };

  let xPosition = () => {
    return (
      DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS +
      adjustForX()
    )
  };

  let yPosition =
    -distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY();

  let zPosition =
    -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [xPosition(), zPosition, yPosition];
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

export { calcRotation, calcPosition };
