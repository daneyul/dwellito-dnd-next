import { DIMENSIONS, elevationData } from "../2D/library";
import { SCALE_FACTOR_FOR_CALCULATIONS } from "./library";

const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
}

const calcRotation = (elevation) => {
  console.log(elevation)
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

const calcPosition = (elevation, distanceObject) => {
  switch (elevation) {
    // Left
    case elevationData[2]:
      return leftSideCoordinates({ distanceObject });
    // Front
    case elevationData[3]:
      return frontSideCoordinates({ distanceObject });
    // Right
    case elevationData[0]:
      return rightSideCoordinates({ distanceObject });
    // Back
    case elevationData[1]:
      return backSideCoordinates({ distanceObject });
    default:
      break;
  }

}

const rightSideCoordinates = ({ distanceObject }) => {
  let xPosition = distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS;
  let yPosition = 0;
  let zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const leftSideCoordinates = ({ distanceObject }) => {
  let xPosition = (DIMENSIONS.CONTAINER.SIDE.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS;
  let yPosition = -DIMENSIONS.CONTAINER.FRONT.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS;
  let zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const frontSideCoordinates = ({ distanceObject }) => {
  let xPosition = 0;
  let yPosition = (DIMENSIONS.CONTAINER.FRONT.WIDTH - distanceObject.left) / SCALE_FACTOR_FOR_CALCULATIONS;
  let zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const backSideCoordinates = ({ distanceObject }) => {
  let xPosition = DIMENSIONS.CONTAINER.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS;
  let yPosition = -distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS;
  let zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}

export {
  calcRotation,
  calcPosition
}