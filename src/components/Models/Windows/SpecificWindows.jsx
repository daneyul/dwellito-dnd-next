import React from 'react';
import GenericWindow from './GenericWindow';

const WoSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/windows/${component.model}.glb`}
    geometryNodes={[
      'P201-1-03_-_48inx36in_-_55inx42in_-_White_Window_Basic_No_Security_1',
      'P201-1-03_-_48inx36in_-_55inx42in_-_White_Window_Basic_No_Security_2',
    ]}
    materialNodes={['Black_Metal', 'Glass']}
    customPosition={[0.703, 2.17, -0.05]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const WSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/windows/${component.model}.glb`}
    geometryNodes={[
      'P201-1-01_-_48inx36in_-_55inx42in_-_White_Window_Hinged_Security_1',
      'P201-1-01_-_48inx36in_-_55inx42in_-_White_Window_Hinged_Security_2',
      'P201-1-01_-_48inx36in_-_55inx42in_-_White_Window_Hinged_Security_3',
    ]}
    materialNodes={['Black_Metal', 'Glass', 'White_Metal']}
    customPosition={[1.322, 2.0, -0.01]}
    customRotation={[0, 0, Math.PI / 2]}
  />
);

export { WoSecurity, WSecurity };
