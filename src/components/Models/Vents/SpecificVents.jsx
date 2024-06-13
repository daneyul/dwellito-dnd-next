import React from 'react';
import GenericVent from './GenericVent';

const Vent12 = ({ component, onBoundingBoxChange }) => (
  <GenericVent
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/vents/${component.model}.glb`}
    customPosition={[0, 2.4, 0]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const Vent20 = ({ component, onBoundingBoxChange }) => (
  <GenericVent
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/vents/${component.model}.glb`}
    customPosition={[0.25, 2.2, -0.04]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const Vent24 = ({ component, onBoundingBoxChange }) => (
  <GenericVent
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/vents/${component.model}.glb`}
    customPosition={[0.3, 2.1, -0.04]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

export { Vent12, Vent20, Vent24 };
