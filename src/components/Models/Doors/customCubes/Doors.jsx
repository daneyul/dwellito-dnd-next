import React from 'react';
import GenericContainerDoor  from '../GenericContainerDoor';

const LhrSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    customBackPosition={[1.35, 1.6, -0.015]}
    isHrDoor={true}
  />
);

const LhrSecurityGlass = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    customBackPosition={[1.35, 1.6, -0.015]}
    isHrDoor={true}
  />
);

const RhrSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    customBackPosition={[1.35, 1.6, -0.015]}
    isHrDoor={true}
  />
);

const RhrSecurityGlass = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    customBackPosition={[1.35, 1.6, -0.015]}
    isHrDoor={true}
  />
);

const Double = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.81, 1.78, -0.007]}
    customBackPosition={[0.8, 1.78, -0.007]}
  />
);

const Sliding6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.81, 1.78, 0]}
    customBackPosition={[0.8, 1.78, 0]}
  />
);

const HdHcRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdHcRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdHcRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdHcRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.67, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdHcRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.628, 1.66, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);
const HdStRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.66, 1.77, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdStRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.66, 1.77, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdStRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.66, 1.77, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdStRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.66, 1.77, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const HdStRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[4.66, 1.77, 3.235]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcHcRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.83, 2.22]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcHcRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.83, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcHcRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.83, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcHcRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.83, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcHcRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.83, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcStRollup6 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[2.76, 2.12, 1.48]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcStRollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.81, 2.22]}
    customRotation={[Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcStRollup10 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.81, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcStRollup12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.81, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
  />
);

const EcStRollup15 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[5.07, 1.81, 2.22]}
    customRotation={[-Math.PI, 0, -Math.PI]}
    customScale={1.2}
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
  EcStRollup15,
};
