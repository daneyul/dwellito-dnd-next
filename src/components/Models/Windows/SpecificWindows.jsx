import React from "react";
import GenericWindow from "./GenericWindow";

const WoSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/windows/${component.model}.glb`}
    geometryNodes={[
      "SM_Window_48x36_01_No_Security_1",
      "SM_Window_48x36_01_No_Security_2",
    ]}
    materialNodes={["Material__104", "Metal"]}
    customPosition={[0.745, 2.225, -0.13]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const WSecurity = ({ component, onBoundingBoxChange }) => (
  <GenericWindow
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/windows/${component.model}.glb`}
    geometryNodes={[
      "SM_Window_48x36_Hinged_Security_01_1",
      "SM_Window_48x36_Hinged_Security_01_2",
    ]}
    materialNodes={["Material__104", "Metal"]}
    customPosition={[0.655, 2.238, -0.02]}
  />
);

export { WoSecurity, WSecurity };
