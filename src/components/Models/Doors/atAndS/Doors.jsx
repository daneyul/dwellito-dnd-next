import React from 'react';
import GenericContainerDoor from '../GenericContainerDoor';

const SteelDoor = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const VisionLite = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const Rollup7 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.61, 0.01]}
    customScale={2.5}
    isRollUp={true}
  />
);

const Rollup8 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.215, 0.01]}
    customScale={2.5}
    isRollUp={true}
  />
);

const GlassGarage = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.02, 0.48, -0.009]}
    customScale={2.5}
    isRollUp={true}
  />
);

export {
  SteelDoor,
  VisionLite,
  Rollup7,
  Rollup8,
  GlassGarage
};
