import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { PageDataContext } from '@/components/Content/Content';
import {
  getExteriorPaint,
  useFlooringGLTFModels,
} from '@/utils/hooks/useGLTFModels';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { FLOORING_OPTIONS } from '@/utils/constants/components/flooringData';
import CustomCubes from './Interiors/Standard/CustomCubes';

export default function ContainerShell40Standard({
  paint
}) {

  const {
    exteriorFinish,
    interiorFinishes,
    selectedContainer,
    flooring,
    selectedContainerHeight,
    hasLighting,
    containerSize,
    supplier
  } = useContext(PageDataContext);

  // Load all 3d objects
  const { nodes, materials } = useGLTF(
    `/models/container/${containerSize()}/${selectedContainerHeight}/container-shell.glb`
  );

  const exteriorPaint = useMemo(() => {
    return getExteriorPaint(supplier, exteriorFinish, paint);
  }, [supplier, exteriorFinish, paint]);

  const ref = useRef();

  const adjustForX = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  }, [selectedContainer.name, DIMENSIONS]);

  const adjustForY = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  }, [selectedContainer.name, DIMENSIONS]);

  const Lighting = () => {
    return (
      <group
        position={[6.077, 1.138, -4.275]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['40FT_Container_Exterior_Blank_Whole_1'].geometry}
            material={materials.Emissive_Light}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['40FT_Container_Exterior_Blank_Whole_3'].geometry}
            material={materials.White_Mtl}
          />
        </group>
      </group>
    );
  };

  const containerMesh = (
    <group
      dispose={null}
      scale={[10, 10, 10]}
      position={[adjustForX, 0, adjustForY]}
      ref={ref}
    >
      <group
        position={[11.748, 4.727, -1.682]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['40FT_Container_Exterior_Blank_Ceiling'].geometry}
          material={exteriorPaint}
          scale={0.01}
        />
      </group>
      <group
        position={[6.077, 1.138, -4.275]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[1, 0.915, 1]}
      >
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['40FT_Container_Exterior_Blank_Whole_2'].geometry}
            material={exteriorPaint}
          />
        </group>
      </group>
      {hasLighting ? <Lighting /> : null}
      <CustomCubes
        interiorFinishes={interiorFinishes}
        containerSize={containerSize}
        selectedContainerHeight={selectedContainerHeight}
        flooring={flooring}
        supplier={supplier}
      />
    </group>
  );

  return containerMesh;
}
