import { checkDistance } from '@/utils/2D/containers/utils';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { calcPosition } from '@/utils/3D/containers/utils';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
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

const Outlet = ({ component }) => {
  const { selectedComponents, selectedContainer, scaleFactor, supplier } =
    useContext(ContainerDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.OUTLET
    )
  ) {
    return null;
  }

  const { nodes, materials } = useGLTF(`/models/${supplier}/electrical/outlet.glb`);

  const outletRef = useRef();
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (outletRef.current) {
      // Create a bounding box for the outlet
      const boundingBox = new THREE.Box3().setFromObject(outletRef.current);

      // Calculate the size of the bounding box
      const size = boundingBox.getSize(new THREE.Vector3());

      // Calculate the actual length of the outlet considering the scaling factor
      const actualLength = size.z;
      setLength(actualLength);
    }
  }, [outletRef]);

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
    SCALE_FACTOR_FOR_CALCULATIONS: DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
    selectedBase: selectedContainer
  });

  // Adjust the position based on the rotation
  let adjustedPosition = [...basePosition];

  if (rotationDegrees === 90) {
    // 90 degrees clockwise
    adjustedPosition[2] -= length / 2; // translate along z-axis
    adjustedPosition[0] += length / 2; // translate along x-axis
  } else if (rotationDegrees === 180) {
    // 180 degrees clockwise
    adjustedPosition[0] += length; // translate along x-axis
  } else if (rotationDegrees === 270) {
    // 270 degrees clockwise
    adjustedPosition[2] += length / 2; // translate along z-axis
    adjustedPosition[0] -= length / 2; // translate along x-axis
  }

  return (
    <>
      <group
        ref={outletRef}
        dispose={null}
        scale={10}
        position={adjustedPosition}
        rotation={[0, rotationRadians, 0]}
      >
        <group
          position={[0.035, 0.5, 0]}
          scale={100}
          rotation={[0, Math.PI, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wall_PlugSocket.geometry}
            material={materials.White_PVC}
            scale={0.01}
          />
        </group>
      </group>
    </>
  );
};

export default Outlet;
