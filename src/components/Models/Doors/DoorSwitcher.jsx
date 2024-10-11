import React from 'react';
import CustomCubes from './customCubes/componentMap';
import AtAndS from './atAndS/componentMap';
import CompactCottages from './compactCottages/componentMap';

const Door = ({ onBoundingBoxChange, component, supplier }) => {
  const componentMap = {
    ...CustomCubes,
    ...AtAndS,
    ...CompactCottages,
  };

  const DoorComponent = componentMap[component.name];
  
  return DoorComponent ? (
    <DoorComponent
      component={component}
      onBoundingBoxChange={onBoundingBoxChange}
      supplier={supplier}
    />
  ) : null;
};

export default Door;
