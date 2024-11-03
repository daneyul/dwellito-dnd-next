/* eslint-disable react-hooks/rules-of-hooks */
import { checkDistance } from '@/utils/2D/containers/utils';
import { calcPosition } from '@/utils/3D/containers/utils';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { useContext, useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const calcElecRotationDegrees = (twoDimDegrees) => {
  // Normalize the degrees to a value between 0 and 360
  const normalizedDegrees = twoDimDegrees % 360;
  return normalizedDegrees;
};

const calcElecRotationRadians = (twoDimDegrees) => {
  // Normalize the degrees to a value between 0 and 360
  const normalizedDegrees = twoDimDegrees % 360;

  // Calculate the corresponding 3D rotation in radians
  const radians = (normalizedDegrees * Math.PI) / -180;

  return radians;
};

const Heater = ({ component }) => {
  const { selectedComponents, selectedContainer, scaleFactor, supplier } =
    useContext(ContainerDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
    )
  ) {
    return null;
  }

  const { nodes, materials } = useGLTF(`/models/${supplier}/electrical/heater.glb`);

  const heaterRef = useRef();
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (heaterRef.current) {
      // Create a bounding box for the heater
      const boundingBox = new THREE.Box3().setFromObject(heaterRef.current);

      // Calculate the size of the bounding box
      const size = boundingBox.getSize(new THREE.Vector3());

      // Calculate the actual length of the heater considering the scaling factor
      const actualLength = size.z;
      setLength(actualLength);
    }
  }, [heaterRef]);

  const selectedElevation = component.elevation[0];

  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    selectedContainer,
    scaleFactor,
  });

  const rotationDegrees = calcElecRotationDegrees(component.rotate);
  const rotationRadians = calcElecRotationRadians(component.rotate);
  const basePosition = calcPosition({
    elevation: selectedElevation,
    distanceObject,
    SCALE_FACTOR_FOR_CALCULATIONS: 4,
    selectedBase: selectedContainer
  });

  // Adjust the position based on the rotation
  let adjustedPosition = [...basePosition];

  if (rotationDegrees === 90) {
    // 90 degrees clockwise
    adjustedPosition[2] -= length / 2; // translate along y-axis
    adjustedPosition[0] += length / 2; // translate along x-axis
  } else if (rotationDegrees === 180) {
    // 180 degrees clockwise
    adjustedPosition[0] += length; // translate along x-axis
  } else if (rotationDegrees === 270) {
    // 270 degrees clockwise
    adjustedPosition[2] += length / 2; // translate along y-axis
    adjustedPosition[0] += length / 2; // translate along x-axis
  }

  return (
    <>
      <group
        ref={heaterRef}
        dispose={null}
        scale={10}
        position={adjustedPosition}
        rotation={[0, rotationRadians, 0]}
      >
        <group position={[0.953, 0.2, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['P605-1-01_-_2000W_Baseboard_Heater_1'].geometry}
              material={materials.Material__116}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['P605-1-01_-_2000W_Baseboard_Heater_2'].geometry}
              material={materials.Material__118}
            />
          </group>
        </group>
      </group>
    </>
  );
};

export default Heater;
