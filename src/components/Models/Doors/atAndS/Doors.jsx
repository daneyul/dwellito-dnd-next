import React from 'react';
import GenericDoor from '../GenericDoor';

const GlidingPatio = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customPosition={[0.99, 1.6, -0.015]}
    customScale={10}
    isRollUp={false}
  />
);

export {
  GlidingPatio
};
