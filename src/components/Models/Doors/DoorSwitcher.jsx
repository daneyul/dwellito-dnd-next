import React from 'react';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import specificDoors from './SpecificDoors';

const Door = ({ onBoundingBoxChange, component, supplier }) => {
  const componentMap = {
    [COMPONENT_NAMES.PERSONNEL_LHR_SECURITY]: specificDoors.LhrSecurity,
    [COMPONENT_NAMES.PERSONNEL_LHR_SECURITY_GLASS]: specificDoors.LhrSecurityGlass,
    [COMPONENT_NAMES.PERSONNEL_RHR_SECURITY]: specificDoors.RhrSecurity,
    [COMPONENT_NAMES.PERSONNEL_RHR_SECURITY_GLASS]: specificDoors.RhrSecurityGlass,
    [COMPONENT_NAMES.SLIDING_GLASS_6]: specificDoors.Sliding6,
    [COMPONENT_NAMES.DOUBLE_DOOR]: specificDoors.Double,
    [COMPONENT_NAMES.HD_HC_ROLL_UP_6]: specificDoors.HdHcRollup6,
    [COMPONENT_NAMES.HD_HC_ROLL_UP_8]: specificDoors.HdHcRollup8,
    [COMPONENT_NAMES.HD_HC_ROLL_UP_10]: specificDoors.HdHcRollup10,
    [COMPONENT_NAMES.HD_HC_ROLL_UP_12]: specificDoors.HdHcRollup12,
    [COMPONENT_NAMES.HD_HC_ROLL_UP_15]: specificDoors.HdHcRollup15,
    [COMPONENT_NAMES.HD_ST_ROLL_UP_6]: specificDoors.HdStRollup6,
    [COMPONENT_NAMES.HD_ST_ROLL_UP_8]: specificDoors.HdStRollup8,
    [COMPONENT_NAMES.HD_ST_ROLL_UP_10]: specificDoors.HdStRollup10,
    [COMPONENT_NAMES.HD_ST_ROLL_UP_12]: specificDoors.HdStRollup12,
    [COMPONENT_NAMES.HD_ST_ROLL_UP_15]: specificDoors.HdStRollup15,
    [COMPONENT_NAMES.EC_HC_ROLLUP_6_74]: specificDoors.EcHcRollup6,
    [COMPONENT_NAMES.EC_HC_ROLLUP_8_74]: specificDoors.EcHcRollup8,
    [COMPONENT_NAMES.EC_HC_ROLLUP_10_74]: specificDoors.EcHcRollup10,
    [COMPONENT_NAMES.EC_HC_ROLLUP_12_74]: specificDoors.EcHcRollup12,
    [COMPONENT_NAMES.EC_HC_ROLLUP_15_74]: specificDoors.EcHcRollup15,
    [COMPONENT_NAMES.EC_ST_ROLLUP_6_64]: specificDoors.EcStRollup6,
    [COMPONENT_NAMES.EC_ST_ROLLUP_8_64]: specificDoors.EcStRollup8,
    [COMPONENT_NAMES.EC_ST_ROLLUP_10_64]: specificDoors.EcStRollup10,
    [COMPONENT_NAMES.EC_ST_ROLLUP_12_64]: specificDoors.EcStRollup12,
    [COMPONENT_NAMES.EC_ST_ROLLUP_15_64]: specificDoors.EcStRollup15,
    [COMPONENT_NAMES.STEEL_DOOR]: specificDoors.SteelDoor,
    [COMPONENT_NAMES.VISION_LITE]: specificDoors.VisionLite,
    [COMPONENT_NAMES.ROLLUP_DOOR_WHITE]: specificDoors.Rollup,
    [COMPONENT_NAMES.GLASS_GARAGE_DOOR]: specificDoors.GlassGarage
  };

  const DoorComponent = componentMap[component.name];
  
  return DoorComponent ? (
    <DoorComponent
      component={component}
      onBoundingBoxChange={onBoundingBoxChange}
      supplier={supplier}
    />
  ) : null;
};

export default Door;
