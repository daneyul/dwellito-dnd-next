const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
}

const calcRotation = (elevation, elevationData) => {
  switch (elevation) {
    // Left
    case elevationData[2]:
      return degrees[180];
    // Front
    case elevationData[3]:
      return degrees[270]
    // Right
    case elevationData[0]:
      return 0
    // Back
    case elevationData[1]:
      return degrees[90]
    default:
      break;
  }
}

const calcPosition = (elevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS) => {
  switch (elevation) {
    // Left
    case elevationData[2]:
      return leftSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS });
    // Front
    case elevationData[3]:
      return frontSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS });
    // Right
    case elevationData[0]:
      return rightSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS });
    // Back
    case elevationData[1]:
      return backSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS });
    default:
      break;
  }
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
const leftSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS }) => {
  let xPosition = (DIMENSIONS.CONTAINER.SIDE.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX;
  let yPosition = -DIMENSIONS.CONTAINER.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY + 0.4;
  let zPosition = -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const frontSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS }) => {
  let xPosition = 0 + adjustForX;
  let yPosition = (DIMENSIONS.CONTAINER.FRONT.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY;
  let zPosition = -(parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const backSideCoordinates = ({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS }) => {
  let xPosition = DIMENSIONS.CONTAINER.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX;
  let yPosition = -distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS + adjustForY;
  let zPosition = -(parseFloat(distanceObject.top) + 1) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}

const adjustForX = -30;
const adjustForY = 20;

export {
  calcRotation,
  calcPosition,
  adjustForX,
  adjustForY
}