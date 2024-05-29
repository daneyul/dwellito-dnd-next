import React from "react";
import GenericDoor from "./GenericDoor";

const Lhr = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={["SM_PDoor_LockBoxLHR_01_1", "SM_PDoor_LockBoxLHR_01_2"]}
    materialNodes={["Door", "Metall"]}
    customPosition={[0.559, 1.43, -0.014]}
    customRotation={[-Math.PI / 2, 0, 0]}
    customScale={[-1, 1, 1]}
  />
);

const Rhr = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      "SM_PDoor_LockBoxRHR_01_1",
      "SM_PDoor_LockBoxRHR_01_2",
      "SM_PDoor_LockBoxRHR_01_3",
    ]}
    materialNodes={["Door", "Glass", "Metall"]}
    customPosition={[0.559, 1.43, -0.01]}
    customRotation={[-Math.PI / 2, 0, 0]}
  />
);

const French = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_1",
      "P202-1-503_6ft_6ft8in_Height_French_Door_White_and_Black_Frame_2",
    ]}
    materialNodes={["Blk_Handle_FD", "Wht_FD"]}
    customPosition={[0.81, 1.83, -0.007]}
  />
);

const Rollup6 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      `SM_RollUp_Door_6'x7'4"_1`,
      `SM_RollUp_Door_6'x7'4"_2`,
    ]}
    materialNodes={["Metal_01"]}
    customPosition={[3.84, 2.02, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const Rollup8 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      `SM_RollUp_Door_8'x7'4"_1`,
      `SM_RollUp_Door_8'x7'4"_2`,
    ]}
    materialNodes={["Metal_01"]}
    customPosition={[3.84, 2.02, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

const Rollup10 = ({ component, onBoundingBoxChange }) => (
  <GenericDoor
    component={component}
    onBoundingBoxChange={onBoundingBoxChange}
    modelPath={`/models/doors/${component.model}.glb`}
    geometryNodes={[
      `SM_RollUp_Door_8'x7'4"_1`,
      `SM_RollUp_Door_8'x7'4"_2`,
    ]}
    materialNodes={["Metal_01"]}
    customPosition={[3.84, 2.02, -0.03]}
    customRotation={[-Math.PI, 0, -Math.PI]}
  />
);

export { Lhr, Rhr, French, Rollup6, Rollup8, Rollup10 };