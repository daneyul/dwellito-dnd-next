import React from 'react';
import GenericDoor from '../GenericDoor';

const LhrSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const LhrSecurityGlass = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const RhrSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const RhrSecurityGlass = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

const Double = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.81, 1.78, -0.007]}
    isRollUp={false}
  />
);

const Sliding6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.81, 1.78, 0]}
    isRollUp={false}
  />
);

const HdHcRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdHcRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.6, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdHcRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdHcRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.237, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdHcRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[6.152, 1.66, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);
const HdStRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.63, 2.32, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdStRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.63, 2.32, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdStRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.63, 2.32, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdStRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.63, 2.32, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const HdStRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[6.153, 2.36, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcHcRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.578, 2.03, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

const EcStRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.58, 2.015, -0.082]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
    isRollUp
  />
);

export {
  LhrSecurity,
  LhrSecurityGlass,
  RhrSecurity,
  RhrSecurityGlass,
  Double,
  Sliding6,
  HdHcRollup6,
  HdHcRollup8,
  HdHcRollup10,
  HdHcRollup12,
  HdHcRollup15,
  HdStRollup6,
  HdStRollup8,
  HdStRollup10,
  HdStRollup12,
  HdStRollup15,
  EcHcRollup6,
  EcHcRollup8,
  EcHcRollup10,
  EcHcRollup12,
  EcHcRollup15,
  EcStRollup6,
  EcStRollup8,
  EcStRollup10,
  EcStRollup12,
  EcStRollup15
};
