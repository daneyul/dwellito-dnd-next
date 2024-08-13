import React from 'react';
import GenericDoor from '../GenericDoor';

const GlidingPatio = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0, 0.735, 0]}
    customScale={2.5}
    isRollUp={false}
  />
);

const SteelDoor = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const VisionLite = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const LhrSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    isRollUp={false}
  />
);

export {
  GlidingPatio,
  SteelDoor,
  VisionLite,
  LhrSecurity
};
