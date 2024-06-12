import {
  Double,
  LhrSecurity,
  LhrSecurityGlass,
  RhrSecurity,
  RhrSecurityGlass,
  Rollup10,
  Rollup12,
  Rollup15,
  Rollup6,
  Rollup8,
  Sliding6,
} from './SpecificDoors';
import { COMPONENT_NAMES } from '@/utils/constants';

export default function Door({ onBoundingBoxChange, component }) {
  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_DOOR_LHR_SECURITY:
      return (
        <LhrSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_DOOR_LHR_SECURITY_GLASS:
      return (
        <LhrSecurityGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_DOOR_RHR_SECURITY:
      return (
        <RhrSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_DOOR_RHR_SECURITY_GLASS:
      return (
        <RhrSecurityGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.SLIDING_GLASS_DOOR_6:
      return (
        <Sliding6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.DOUBLE_DOOR:
      return (
        <Double
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.ROLL_UP_DOOR_6:
      return (
        <Rollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.ROLL_UP_DOOR_8:
      return (
        <Rollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.ROLL_UP_DOOR_10:
      return (
        <Rollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.ROLL_UP_DOOR_12:
      return (
        <Rollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.ROLL_UP_DOOR_15:
      return (
        <Rollup15
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    default:
      return null;
  }
}
