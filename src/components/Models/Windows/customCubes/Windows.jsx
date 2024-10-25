import React from 'react';
import GenericContainerWindow from '../GenericContainerWindow';

const WoSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[0.703, 2.17, -0.05]}
    customBackPosition={[0.92, 2.17, -0.05]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const WSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customBackPosition={[1.54, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

export { WoSecurity, WSecurity };
