import React from 'react';
import GenericShedWindow from '../GenericShedWindow';

const Window24x24 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const Window30x36 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const Window48x24 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const Window48x48 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const Window48x60 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

const Window60x48 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[-13.8, 5, 0.9]}
  />
);

export {
  Window24x24,
  Window30x36,
  Window48x24,
  Window48x48,
  Window48x60,
  Window60x48,
};
