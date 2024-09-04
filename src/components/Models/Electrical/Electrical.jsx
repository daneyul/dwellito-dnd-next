import { COMPONENT_NAMES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import CustomCubesAirConditioner from './customCubes/AirConditioner';
import Amp from './customCubes/Amp';
import ExhaustFan from './customCubes/ExhaustFan';
import Heater from './customCubes/Heater';
import Outlet from './customCubes/Outlet';
import RoofVent from './customCubes/RoofVent';
import AtAndSAirConditioner from './atAndS/AirConditioner';
import SwivelFloodLight from './atAndS/SwivelFloodLight';
import { useMemo } from 'react';
import SconceWallLight from './atAndS/SconceWallLight';
import EmergencyLight from './atAndS/EmergencyLight';

const Electrical = ({
  supplierSlug,
  handleExhaustFanBoundingBox,
  selectedComponents,
}) => {
  const outlet = useMemo(() =>
    selectedComponents.find(
      (component) => component.name === COMPONENT_NAMES.OUTLET
    )
  );
  const heater = useMemo(() =>
    selectedComponents.find(
      (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
    )
  );
  const floodLights = useMemo(() =>
    selectedComponents.filter(
      (component) =>
        component.name === COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT
    ),
  [selectedComponents]);
  const sconceLights = useMemo(() =>
    selectedComponents.filter(
      (component) => component.name === COMPONENT_NAMES.MODERN_FARMHOUSE_OUTDOOR_WALL_SCONCE
    ),
  [selectedComponents]);
  const emergencyLights = useMemo(() =>
    selectedComponents.filter(
      (component) => component.name === COMPONENT_NAMES.EMERGENCY_LIGHT
    ),
  [selectedComponents]);

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
      <>
        <AtAndSAirConditioner />
        {floodLights.length > 0 && floodLights.map((component) => (
          <SwivelFloodLight key={component.id} component={component} />
        ))}
        {sconceLights.length > 0 && sconceLights.map((component) => (
          <SconceWallLight key={component.id} component={component} />
        ))}
        {emergencyLights.length > 0 && emergencyLights.map((component) => (
          <EmergencyLight key={component.id} component={component} />
        ))}
      </>
    );
  }
  return null;
};

export default Electrical;
