import React from 'react';
import GenericWindow from '../GenericWindow';

const HorizontalSlider46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customScale={2.5}
  />
);

const HorizontalSliderSecurity46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customScale={2.5}
  />
);

const VerticalSlider46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customScale={2.5}
  />
);

const HorizontalSlider47x12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 2.32, 0]}
    customScale={2.5}
  />
);

export {
  HorizontalSlider46x27,
  HorizontalSliderSecurity46x27,
  VerticalSlider46x27,
  HorizontalSlider47x12
};
