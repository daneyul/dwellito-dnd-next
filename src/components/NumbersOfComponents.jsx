import { numOfDoors, numOfGarageDoors, numOfVents, numOfWindows } from "../utils/utils";

const NumbersOfComponents = ({ selectedComponents }) => {
  return (
    <div>
      <p>Number of Doors: {numOfDoors({ selectedComponents })}</p>
      <p>Number of Windows: {numOfWindows({ selectedComponents })}</p>
      <p>Number of Vents: {numOfVents({ selectedComponents })}</p>
      <p>Number of Garage Doors: {numOfGarageDoors({ selectedComponents })}</p>
    </div>
  );
}

export default NumbersOfComponents;