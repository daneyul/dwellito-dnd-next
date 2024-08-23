import React from 'react';
import GenericDoor from '../GenericDoor';

const GlidingPatio = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.735, 0]}
    customScale={2.5}
    isRollUp={false}
  />
);

const SteelDoor = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const VisionLite = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.7, 0.04]}
    customScale={2.5}
    isRollUp={false}
  />
);

const Rollup = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, 0.61, 0.04]}
    customScale={2.5}
    isRollUp={true}
  />
);

const GlassGarage = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.04, -0.02, 0.04]}
    customScale={2.5}
    isRollUp={true}
  />
);

export {
  GlidingPatio,
  SteelDoor,
  VisionLite,
  Rollup,
  GlassGarage
};
