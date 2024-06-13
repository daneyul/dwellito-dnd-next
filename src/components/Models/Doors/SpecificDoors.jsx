import React from 'react';
import GenericDoor from './GenericDoor';

const LhrSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
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
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const RhrSecurityGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.559, 1.43, -0.03]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const Double = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.81, 1.73, -0.007]}
  />
);

const Sliding6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.81, 1.83, 0]}
  />
);

const HdRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
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
    customPosition={[6.152, 1.66, 3.235]}
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
    customPosition={[4.578, 2.03, -0.073]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcHcRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.073]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcHcRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.073]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcStRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.073]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcStRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.073]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcStRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.073]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcStRollup12 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.073]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
  />
);

const EcStRollup15 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.073]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollup
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
