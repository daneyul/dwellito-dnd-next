import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { ExhaustShutter, LouverVent } from './atAndS/Vents';
import { Vent12, Vent20, Vent24 } from './customCubes/Vents';

const Vent = ({ onBoundingBoxChange, component, supplier }) => {
  const componentMap = {
    [COMPONENT_NAMES.LOUVER_VENT]: LouverVent,
    [COMPONENT_NAMES.EXHAUST_SHUTTER]: ExhaustShutter,
    [COMPONENT_NAMES.VENT_12]: Vent12,
    [COMPONENT_NAMES.VENT_20]: Vent20,
    [COMPONENT_NAMES.VENT_24]: Vent24,
  };

  const VentComponent = componentMap[component.name];

  return VentComponent ? (
    <VentComponent
      component={component}
      onBoundingBoxChange={onBoundingBoxChange}
      supplier={supplier}
    />
  ) : null;
};

export default Vent;