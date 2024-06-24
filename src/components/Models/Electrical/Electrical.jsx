import AirConditioner from "./AirConditioner";
import Amp from "./Amp";
import ExhaustFan from "./ExhaustFan";
import RoofVent from "./RoofVent";

const Electrical = ({ handleExhaustFanBoundingBox }) => {
  return (
    <>
      <Amp />
      <RoofVent />
      <AirConditioner />
      <ExhaustFan onBoundingBoxChange={handleExhaustFanBoundingBox} />
    </>
  );
};

export default Electrical;