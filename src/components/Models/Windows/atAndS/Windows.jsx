import React from 'react';
import GenericContainerWindow from '../GenericContainerWindow';

const HorizontalSlider46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customBackPosition={[0.25, 1.95, 0]}
    customScale={2.5}
  />
);

const HorizontalSliderSecurity46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customBackPosition={[0.32, 1.95, 0]}
    customScale={2.5}
  />
);

const VerticalSlider46x27 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.95, 0]}
    customBackPosition={[0.24, 1.95, 0]}
    customScale={2.5}
  />
);

const HorizontalSlider47x12 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericContainerWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 2.32, 0]}
    customBackPosition={[0.23, 2.32, 0]}
    customScale={2.5}
  />
);

export {
  HorizontalSlider46x27,
  HorizontalSliderSecurity46x27,
  VerticalSlider46x27,
  HorizontalSlider47x12
};
