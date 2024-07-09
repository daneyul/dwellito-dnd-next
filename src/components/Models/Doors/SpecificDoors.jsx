import React from 'react';
import GenericDoor from './GenericDoor';

const Lhr = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.01]}
    isRollUp={false}
  />
);

const LhrGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.01]}
    isRollUp={false}
  />
);

const LhrSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const LhrSecurityGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const Rhr = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.01]}
    isRollUp={false}
  />
);

const RhrGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.01]}
    isRollUp={false}
  />
);

const RhrSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const RhrSecurityGlass = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const Double = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.81, 1.73, -0.007]}
    isRollUp={false}
  />
);

const Sliding6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[0.81, 1.78, 0]}
    isRollUp={false}
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
    isRollUp
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
    isRollUp
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
    isRollUp
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
    isRollUp
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
    isRollUp
  />
);

const EcHcRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup12 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup15 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup12 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup15 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

export {
  Lhr,
  LhrGlass,
  LhrSecurity,
  LhrSecurityGlass,
  Rhr,
  RhrGlass,
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
  EcHcRollup12,
  EcHcRollup15,
  EcStRollup6,
  EcStRollup8,
  EcStRollup10,
  EcStRollup12,
  EcStRollup15,
};
