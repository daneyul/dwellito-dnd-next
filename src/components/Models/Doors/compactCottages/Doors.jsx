import React from 'react';
import GenericShedDoor  from '../GenericShedDoor';

const ExteriorDoor1 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-0.5, 5, 0.3]}
  />
);

const ExteriorDoor2 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-4.8, 5, 0.3]}
  />
);


export {
  ExteriorDoor1,
  ExteriorDoor2,
};
