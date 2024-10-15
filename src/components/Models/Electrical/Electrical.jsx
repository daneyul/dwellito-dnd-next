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
import EmergencyLight from './atAndS/EmergencyLight';
import SecurityFloodLight from './atAndS/SecurityFloodLight';

const Electrical = ({
  supplierSlug,
  handleExhaustFanBoundingBox,
  selectedComponents,
}) => {
  if (supplierSlug === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    const outlets = useMemo(() =>
      selectedComponents.filter(
        (component) => component.name === COMPONENT_NAMES.OUTLET
      )
    );
    const heaters = useMemo(() =>
      selectedComponents.filter(
        (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
      )
    );
    return (
      <>
        {outlets.length > 0 &&
          outlets.map((component) => (
            <Outlet key={component.id} component={component} />
          ))}
        {heaters.length > 0 &&
          heaters.map((component) => (
            <Heater key={component.id} component={component} />
          ))}
        <Amp />
        <RoofVent />
        <CustomCubesAirConditioner />
        <ExhaustFan onBoundingBoxChange={handleExhaustFanBoundingBox} />
      </>
    );
  } else if (supplierSlug === SUPPLIER_SLUGS.AT_AND_S) {
    const airConditioners = useMemo(() =>
      selectedComponents.filter(
        (component) => component.name === COMPONENT_NAMES.AIR_CONDITIONER
      )
    );
    const outlets = useMemo(() =>
      selectedComponents.filter(
        (component) => component.name === COMPONENT_NAMES.OUTLET
      )
    );
    const floodLights = useMemo(
      () =>
        selectedComponents.filter(
          (component) =>
            component.name === COMPONENT_NAMES.ADJUSTABLE_SWIVEL_FLOOD_LIGHT
        ),
      [selectedComponents]
    );
    const emergencyLights = useMemo(
      () =>
        selectedComponents.filter(
          (component) => component.name === COMPONENT_NAMES.EMERGENCY_LIGHT
        ),
      [selectedComponents]
    );
    const securityLights = useMemo(
      () =>
        selectedComponents.filter(
          (component) => component.name === COMPONENT_NAMES.SECURITY_FLOOD_LIGHT
        ),
      [selectedComponents]
    );

    return (
      <>
        {airConditioners.length > 0 &&
          airConditioners.map((component) => (
            <AtAndSAirConditioner key={component.id} component={component} />
          ))
        }
        {outlets.length > 0 &&
          outlets.map((component) => (
            <Outlet key={component.id} component={component} />
          ))}
        {floodLights.length > 0 &&
          floodLights.map((component) => (
            <SwivelFloodLight key={component.id} component={component} />
          ))}
        {emergencyLights.length > 0 &&
          emergencyLights.map((component) => (
            <EmergencyLight key={component.id} component={component} />
          ))}
        {securityLights.length > 0 &&
          securityLights.map((component) => (
            <SecurityFloodLight key={component.id} component={component} />
          ))}
      </>
    );
  }
  return null;
};

export default Electrical;
