import { PageDataContext } from '@/components/Content/Content';
import { checkDistance } from '@/utils/2D/utils';
import { Box3, Vector3 } from 'three';
import { calcPosition, calcRotation } from '@/utils/3D/utils';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { COMPONENT_NAMES } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';

const AtAndSAirConditioner = ({ component }) => {
  const {
    supplier,
    selectedComponents,
    selectedContainer,
    scaleFactor,
  } = useContext(PageDataContext);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.AIR_CONDITIONER
    )
  ) {
    return null;
  }

  const selectedElevation = component.elevation[0];
  
  const { nodes, materials } = useGLTF(
    `/models/${supplier}/electrical/airconditioner.glb`
  );

  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    selectedContainer,
    scaleFactor,
  });

  const [width, setWidth] = useState(0);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      // Ensure transformations are applied
      ref.current.updateMatrixWorld(true);

      // Recalculate bounding box after transformations are applied
      const bbox = new Box3().setFromObject(ref.current);
      const size = new Vector3();
      const center = new Vector3();
      bbox.getSize(size);
      bbox.getCenter(center);

      setWidth(size.x);
    }
  }, [ref.current]);

  const position = calcPosition(
    selectedElevation,
    distanceObject,
    DIMENSIONS.SCALE_FACTOR_FOR_CALCULATIONS,
    selectedContainer,
    width
  );

  const rotation = useMemo(
    () => [0, calcRotation(selectedElevation, selectedContainer), 0],
    [selectedElevation]
  );

  return (
    <group
      dispose={null}
      scale={10}
      ref={ref}
      position={position}
      rotation={rotation}
    >
      <group position={[0.47, 2.26, -0.04]} rotation={[0, -Math.PI, 0]}>
        <group position={[0.433, 0.275, 0.024]} rotation={[0, Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={
              nodes['P203-1-101_-_6K_BTU_Air_Conditioner_Assembly_v02'].geometry
            }
            material={materials.Zinc}
            scale={0.01}
          />
        </group>
        <group
          position={[0.221, 0.278, 0.154]}
          rotation={[Math.PI, 0, -Math.PI]}
          scale={[0.807, 0.807, 1]}
        >
          <group scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02_1'].geometry
              }
              material={materials.Black_PVC}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02_2'].geometry
              }
              material={materials.Inside_Color}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes['P203-1-101_-_6K_BTU_Air_Conditioner_v02_3'].geometry
              }
              material={materials.White_PVC}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default AtAndSAirConditioner;
