import { elevationData } from "../2D/library";
import { SCALE_FACTOR_FOR_CALCULATIONS } from "./library";

const degrees = {
  90: Math.PI / 2,
  180: Math.PI,
  270: Math.PI + Math.PI / 2,
}

const calcRotation = (elevation) => {
  switch (elevation) {
    // Left
    case elevationData[0]:
      return degrees[180];
    // Front
    case elevationData[1]:
      return degrees[90]
    // Right
    case elevationData[2]:
      return 0
    // Back
    case elevationData[3]:
      return degrees[270]
    default:
      break;
  }
}

const rightSideCoordinates = ({ distanceObject, objType }) => {
  let xPosition = distanceObject.left / SCALE_FACTOR_FOR_CALCULATIONS;
  let yPosition = 0;
  let zPosition = (parseFloat(distanceObject.top) + 4) / SCALE_FACTOR_FOR_CALCULATIONS;
  
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const leftSideCoordinates = () => {
  let xPosition = 0;
  let yPosition = 0;
  let zPosition = 0;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const frontSideCoordinates = () => {
  let xPosition = 0;
  let yPosition = 0;
  let zPosition = 0;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}
const backSideCoordinates = () => {
  let xPosition = 0;
  let yPosition = 0;
  let zPosition = 0;
  return [
    xPosition,
    zPosition,
    yPosition
  ]
}

export {
  calcRotation
}