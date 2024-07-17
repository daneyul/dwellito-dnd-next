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
  HdHcRollup10,
  HdHcRollup12,
  HdHcRollup15,
  HdHcRollup6,
  HdHcRollup8,
  HdStRollup10,
  HdStRollup15,
  HdStRollup6,
  HdStRollup8,
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
import { COMPONENT_NAMES } from '@/utils/constants/names';

export default function Door({ onBoundingBoxChange, component }) {
  switch (component.name) {
    case COMPONENT_NAMES.PERSONNEL_LHR:
      return (
        <Lhr component={component} onBoundingBoxChange={onBoundingBoxChange} />
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
        <Rhr component={component} onBoundingBoxChange={onBoundingBoxChange} />
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
    case COMPONENT_NAMES.HD_HC_ROLL_UP_6:
      return (
        <HdHcRollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_HC_ROLL_UP_8:
      return (
        <HdHcRollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_HC_ROLL_UP_10:
      return (
        <HdHcRollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_HC_ROLL_UP_12:
      return (
        <HdHcRollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_HC_ROLL_UP_15:
      return (
        <HdHcRollup15
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ST_ROLL_UP_6:
      return (
        <HdStRollup6
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ST_ROLL_UP_8:
      return (
        <HdStRollup8
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ST_ROLL_UP_10:
      return (
        <HdStRollup10
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ST_ROLL_UP_12:
      return (
        <HdHcRollup12
          component={component}
          onBoundingBoxChange={onBoundingBoxChange}
        />
      );
    case COMPONENT_NAMES.HD_ST_ROLL_UP_15:
      return (
        <HdStRollup15
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
