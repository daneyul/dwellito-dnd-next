import React from 'react';
import GenericVent from '../GenericVent';

const LouverVent = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericVent
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/vents/${component.model}.glb`}
    customPosition={[0.05, 2.32, -0.015]}
    customRotation={[0, 0, 0]}
    customScale={2.5}
  />
);

const ExhaustShutter = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericVent
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/vents/${component.model}.glb`}
    customPosition={[0.05, 1.74, 0]}
    customRotation={[0, 0, 0]}
    customScale={2.5}
  />
);

export { LouverVent, ExhaustShutter };
