import React from 'react';
import GenericWindow from '../GenericWindow';

const HorizontalSlider = ({ component, onBoundingBoxChange, supplier }) => (
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

const VerticalSlider36x53 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.3, 0]}
    customScale={2.5}
  />
);

const VerticalSlider30x60 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.13, 0]}
    customScale={2.5}
  />
);

const SecurityBars = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customPosition={[-0.02, 1.85, 0]}
    customScale={2.5}
  />
);

const Skylight = ({
  component,
  onBoundingBoxChange,
  supplier,
  containerHeightIsStandard,
}) => {
  const yPos = containerHeightIsStandard ? 2.45 : 2.75;
  return (
    <GenericWindow
      component={component}
      onBoundingBoxChange={onBoundingBoxChange}
      modelPath={`/models/${supplier}/windows/${component.model}.glb`}
      customPosition={[1.35, yPos, 1.15]}
      customScale={100}
      customRotation={[0, Math.PI / 2, 0]}
    />
  );
};

export {
  HorizontalSlider,
  VerticalSlider46x27,
  VerticalSlider36x53,
  VerticalSlider30x60,
  SecurityBars,
  Skylight,
};
