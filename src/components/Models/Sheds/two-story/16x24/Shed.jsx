import { useGLTF } from '@react-three/drei';
import { useContext, useMemo, useRef } from 'react';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

export const Shed = () => {
  const {
    selectedShedHeight,
    // selectedRoof,
    // supplier,
    // selectedShed,
    // showExterior,
    shedSize,
  } = useContext(ShedDataContext);

  // Load all 3d objects
  const { nodes, materials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/2storey_16x24_GFBlock.glb`
  );

  const ref = useRef();

  const adjustForX = useMemo(() => {
    return -(DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.THREE_D.WIDTH / 2);
  }, [DIMENSIONS]);

  const adjustForY = useMemo(() => {
    return DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR.THREE_D.DEPTH / 2;
  }, [DIMENSIONS]);

  const shedMesh = (
    <>
      <group
        scale={8}
        dispose={null}
        position={[adjustForX, 0, adjustForY]}
        ref={ref}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.trims.geometry}
          material={materials.Vertical_Trim}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GF_floorfinish.geometry}
          material={materials.GF_Flooring}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GF_framing.geometry}
          material={materials.Framing_Wood}
          scale={0.025}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.concrete_foundation.geometry}
          material={materials['Big concrete blocks']}
          scale={0.025}
        />
      </group>
    </>
  );

  return shedMesh;
};
