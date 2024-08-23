import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import CustomCubesAirConditioner from './customCubes/AirConditioner';
import Amp from './customCubes/Amp';
import ExhaustFan from './customCubes/ExhaustFan';
import Heater from './customCubes/Heater';
import Outlet from './customCubes/Outlet';
import RoofVent from './customCubes/RoofVent';
import AtAndSAirConditioner from './atAndS/AirConditioner';

const Electrical = ({ supplierSlug, outlet, heater, handleExhaustFanBoundingBox }) => {
  if (supplierSlug === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    return (
      <>
        <Outlet component={outlet} />
        <Heater component={heater} />
        <Amp />
        <RoofVent />
        <CustomCubesAirConditioner />
        <ExhaustFan onBoundingBoxChange={handleExhaustFanBoundingBox} />
      </>
    );
  } else if (supplierSlug === SUPPLIER_SLUGS.AT_AND_S) {
    return (
      <AtAndSAirConditioner />
    );
  }
  return null;
};

export default Electrical;
