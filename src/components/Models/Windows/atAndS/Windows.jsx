import React from 'react';
import GenericWindow from '../GenericWindow';

const HorizontalSlider = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[0.703, 2.17, -0.05]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const VerticalSlider46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

const VerticalSlider36x53 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

const VerticalSlider30x60 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

const SecurityBars = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

const Skylight = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[1.35, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

export {
  HorizontalSlider,
  VerticalSlider46x27,
  VerticalSlider36x53,
  VerticalSlider30x60,
  SecurityBars,
  Skylight,
};
