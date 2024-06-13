import {
  Double,
  EcHcRollup10,
  EcHcRollup12,
  EcHcRollup15,
  EcHcRollup6,
  EcHcRollup8,
  EcStRollup10,
  EcStRollup12,
  EcStRollup15,
  EcStRollup6,
  EcStRollup8,
  HdRollup10,
  HdRollup12,
  HdRollup15,
  HdRollup6,
  HdRollup8,
  Lhr,
  LhrGlass,
  LhrSecurity,
  LhrSecurityGlass,
  Rhr,
  RhrGlass,
  RhrSecurity,
  RhrSecurityGlass,
  Sliding6,
} from './SpecificDoors';
import { COMPONENT_NAMES } from '@/utils/constants';

export default function Door({ onBoundingBoxChange, component }) {
  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_LHR:
      return (
        <Lhr
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_LHR_GLASS:
      return (
        <LhrGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_LHR_SECURITY:
      return (
        <LhrSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_LHR_SECURITY_GLASS:
      return (
        <LhrSecurityGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_RHR:
      return (
        <Rhr
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_RHR_GLASS:
      return (
        <RhrGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_RHR_SECURITY:
      return (
        <RhrSecurity
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.PERSONNEL_RHR_SECURITY_GLASS:
      return (
        <RhrSecurityGlass
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.SLIDING_GLASS_6:
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
    case COMPONENT_NAMES.HD_ROLL_UP_6:
      return (
        <HdRollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ROLL_UP_8:
      return (
        <HdRollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ROLL_UP_10:
      return (
        <HdRollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ROLL_UP_12:
      return (
        <HdRollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ROLL_UP_15:
      return (
        <HdRollup15
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_HC_ROLLUP_6_74:
      return (
        <EcHcRollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_HC_ROLLUP_8_74:
      return (
        <EcHcRollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_HC_ROLLUP_10_74:
      return (
        <EcHcRollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_HC_ROLLUP_12_74:
      return (
        <EcHcRollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_HC_ROLLUP_15_74:
      return (
        <EcHcRollup15
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_ST_ROLLUP_6_64:
      return (
        <EcStRollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_ST_ROLLUP_8_64:
      return (
        <EcStRollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_ST_ROLLUP_10_64:
      return (
        <EcStRollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_ST_ROLLUP_12_64:
      return (
        <EcStRollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.EC_ST_ROLLUP_15_64:
      return (
        <EcStRollup15
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    default:
      return null;
  }
}
