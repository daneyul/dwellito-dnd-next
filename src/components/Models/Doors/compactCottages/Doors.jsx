import React from 'react';
import GenericShedDoor  from '../GenericShedDoor';

const ExteriorDoor1 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/12/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-0.5, 5, 0.3]}
  />
);

const ExteriorDoorPorch12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/12/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-4.8, 5, 0.3]}
  />
);

const ExteriorDoorPorch16 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/doors/16/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-4.8, 5, 0.3]}
  />
);


export {
  ExteriorDoor1,
  ExteriorDoorPorch12,
  ExteriorDoorPorch16,
};
