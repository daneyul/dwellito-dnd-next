import React from 'react';
import GenericWindow from './GenericWindow';

const WoSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[0.703, 2.17, -0.05]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const WSecurity = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.322, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

export { WoSecurity, WSecurity };
