const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
}

const calcRotation = (elevation, elevationData, selectedContainer, ELEVATION_NAMES) => {
  const matchingElevation = elevationData.find(item => item.homePlan === selectedContainer && item.name === elevation);

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
}

const rightSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS }) => {
  let xPosition = distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX;
  let yPosition = 0 + adjustForY - 0.2;
  let zPosition = -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const leftSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer }) => {
  let xPosition = () => {
    if (selectedContainer === `10' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `20' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `40' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    }
  }
  let yPosition = () => {
    if (selectedContainer === `10' Custom Cube`) {
      return -DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY + 0.4
    } else if (selectedContainer === `20' Custom Cube`) {
      return -DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY + 0.4
    } else if (selectedContainer === `40' Custom Cube`) {
      return -DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY + 0.4
    }
  }
  let zPosition = -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition(),
    zPosition,
    yPosition()
  ]
}
const frontSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer }) => {
  let xPosition = 0 + adjustForX;
  let yPosition = () => {
    if (selectedContainer === `10' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.TEN.FRONT.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY
    } else if (selectedContainer === `20' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.TWENTY.FRONT.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY
    } else if (selectedContainer === `40' Custom Cube`) {
      return (DIMENSIONS.CONTAINER.FORTY.FRONT.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY
    }
  }
  let zPosition = -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition()
  ]
}
const backSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer }) => {
  let xPosition = () => {
    if (selectedContainer === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    }
  }
  let yPosition = -distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY;
  let zPosition = -(parseFloat(distanceObject.top) + 1) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition(),
    zPosition,
    yPosition
  ]
}

const adjustForX = -30;
const adjustForY = 20;

const calcPosition = (elevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer, ELEVATION_NAMES) => {
  const matchingElevation = elevationData.find(item => item.homePlan === selectedContainer && item.name === elevation.name);

  if (matchingElevation) {
    switch (matchingElevation.name) {
      case ELEVATION_NAMES.LEFT:
        return leftSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
      case ELEVATION_NAMES.FRONT:
        return frontSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
      case ELEVATION_NAMES.RIGHT:
        return rightSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
      case ELEVATION_NAMES.BACK:
        return backSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
      default:
        break;
    }
  }

  return null;
}

export {
  calcRotation,
  calcPosition,
  adjustForX,
  adjustForY
}