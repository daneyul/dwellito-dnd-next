import React from 'react';
import GenericShedWindow from '../GenericShedWindow';

const Window24x24 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0, 20.2, 0.9]}
  />
);

const Window30x36 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0, 17.8, 0.5]}
  />
);

const Window48x24 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0,20.2, 0.5]}
  />
);

const Window48x48 = ({ component, onBoundingBoxChange, supplier, onSelect }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0, 15.3, 0.5]}
    onSelect={onSelect}
  />
);

const Window48x60 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0, 13, 0.5]}
  />
);

const Window60x48 = ({ component, onBoundingBoxChange, supplier }) => (
  <GenericShedWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/${supplier}/windows/${component.model}.glb`}
    customScale={0.2}
    customPosition={[0, 15.4, 0.5]}
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
