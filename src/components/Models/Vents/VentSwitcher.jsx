import { Vent12, Vent20, Vent24 } from './SpecificVents';
import { COMPONENT_NAMES } from '@/utils/constants/names';

export default function Vent({ onBoundingBoxChange, component, supplier }) {
  switch (component.name) {
    case COMPONENT_NAMES.VENT_12:
      return (
        <Vent12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
          supplier={supplier}
        />
      );
    case COMPONENT_NAMES.VENT_20:
      return (
        <Vent20
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
          supplier={supplier}
        />
      );
    case COMPONENT_NAMES.VENT_24:
      return (
        <Vent24
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
          supplier={supplier}
        />
      );
    default:
      return null;
  }
}
