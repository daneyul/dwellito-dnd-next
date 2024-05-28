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
      return DIMENSIONS.CONTAINER.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
    } else if (selectedContainer === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.SIDE.WIDTH / SCALE_FACTOR_FOR_CALCULATIONS + adjustForX
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

const calcPosition = (elevation, distanceObject, elevationData, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer) => {
  switch (elevation) {
    // Left
    case elevationData[2]:
      return leftSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
    // Front
    case elevationData[3]:
      return frontSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
    // Right
    case elevationData[0]:
      return rightSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
    // Back
    case elevationData[1]:
      return backSideCoordinates({ distanceObject, SCALE_FACTOR_FOR_CALCULATIONS, DIMENSIONS, selectedContainer });
    default:
      break;
  }
}

export {
  calcRotation,
  calcPosition,
  adjustForX,
  adjustForY
}