import React from 'react';
import GenericShedDoor  from '../GenericShedDoor';

const ExteriorDoor1 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-14, 5, 0.8]}
  />
);

const ExteriorDoor2 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const ExteriorDoor3 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);


export {
  ExteriorDoor1,
  ExteriorDoor2,
  ExteriorDoor3,
};
