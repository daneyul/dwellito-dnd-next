import React from 'react';
import GenericDoor from './GenericDoor';

const LhrSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={['SM_PDoor_LockBoxLHR_01_1', 'SM_PDoor_LockBoxLHR_01_2']}
    materialNodes={['Door', 'Metall']}
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
    customScale={[-1, 1, 1]}
  />
);

const LhrSecurityGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'SM_PDoor_LockBoxLHR_GlassDoor_02_1',
      'SM_PDoor_LockBoxLHR_GlassDoor_02_2',
      'SM_PDoor_LockBoxLHR_GlassDoor_02_3',
    ]}
    materialNodes={['Door', 'Glass', 'Metall']}
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
    customScale={[-1, 1, 1]}
  />
);

const RhrSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'SM_PDoor_LockBoxRHR_01_1',
      'SM_PDoor_LockBoxRHR_01_2',
      'SM_PDoor_LockBoxRHR_01_3',
    ]}
    materialNodes={['Door', 'Metall', 'Metall']}
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const RhrSecurityGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'SM_PDoor_LockBoxRHR_GlassDoor_02_1',
      'SM_PDoor_LockBoxRHR_GlassDoor_02_2',
      'SM_PDoor_LockBoxRHR_GlassDoor_02_3',
    ]}
    materialNodes={['Door', 'Glass', 'Metall']}
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const Double = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_1',
      'P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_2',
    ]}
    materialNodes={['Blk_Handle_FD', 'Wht_FD']}
    customPosition={[0.81, 1.73, -0.007]}
  />
);

const Sliding6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'SM_Wide_Sliding_Glass_Door_6feet_1',
      'SM_Wide_Sliding_Glass_Door_6feet_2',
      'SM_Wide_Sliding_Glass_Door_6feet_3',
    ]}
    materialNodes={['Glass', 'Metal_01', 'Metal_02']}
    customPosition={[0.81, 1.83, 0]}
  />
);

const HdRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'Heavy_Duty_Roll_Up_Door_72in_x_88in_-_80in_x_104in_1',
      'Heavy_Duty_Roll_Up_Door_72in_x_88in_-_80in_x_104in_2',
    ]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const HdRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'Heavy_Duty_Roll_Up_Door_96in_x_88in_-_104in_x_104in_1',
      'Heavy_Duty_Roll_Up_Door_96in_x_88in_-_104in_x_104in_2',
    ]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[4.628, 1.6, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const HdRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'Heavy_Duty_Roll_Up_Door_120in_x_88in_-_128in_x_104in_1',
      'Heavy_Duty_Roll_Up_Door_120in_x_88in_-_128in_x_104in_2',
    ]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const HdRollup12 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'Heavy_Duty_Roll_Up_Door_144in_x_88in_-_152in_x_104in_1',
      'Heavy_Duty_Roll_Up_Door_144in_x_88in_-_152in_x_104in_2',
    ]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[5.237, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const HdRollup15 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={['Heavy_Duty_Roll_Up_Door_180in_x_88in_-_188in_x_104in_1', 'Heavy_Duty_Roll_Up_Door_180in_x_88in_-_188in_x_104in_2']}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[6.152, 1.62, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcHcRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      'Economy_Rollup_Door_-_6ft_-_72in_x_76in_-_76in__x_78in_1',
      'Economy_Rollup_Door_-_6ft_-_72in_x_76in_-_76in__x_78in_2',
    ]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[4.64, 1.272, -0.073]}
    customRotation={[Math.PI, 0, -Math.PI]}
    isRollup
  />
);

const EcHcRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_8x74_1`, `SM_EconRollUp_8x74_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcHcRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_10x74_1`, `SM_EconRollUp_10x74_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcStRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_6x64_1`, `SM_EconRollUp_6x64_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcStRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_8x64_1`, `SM_EconRollUp_8x64_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcStRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_10x64_1`, `SM_EconRollUp_10x64_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcStRollup12 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_12x64_1`, `SM_EconRollUp_12x64_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const EcStRollup15 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[`SM_EconRollUp_15x64_1`, `SM_EconRollUp_15x64_2`]}
    materialNodes={['Metal_01', 'Metal_02_']}
    customPosition={[3.84, 1.99, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

export {
  LhrSecurity,
  LhrSecurityGlass,
  RhrSecurity,
  RhrSecurityGlass,
  Double,
  Sliding6,
  HdRollup6,
  HdRollup8,
  HdRollup10,
  HdRollup12,
  HdRollup15,
  EcHcRollup6,
  EcHcRollup8,
  EcHcRollup10,
  EcStRollup6,
  EcStRollup8,
  EcStRollup10,
  EcStRollup12,
  EcStRollup15,
};
