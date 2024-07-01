import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { checkDistance } from '@/utils/2D/utils';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import { calcPosition } from '@/utils/3D/utils';
import { elevationData } from '@/utils/constants/elevationData';
import { COMPONENT_NAMES } from '@/utils/constants/names';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';

const Outlet = ({ component }) => {
  const {
    selectedComponents,
    selectedContainer,
    scaleFactor,
  } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);

  const { nodes, materials } = useGLTF(`/models/electrical/outlet.glb`);

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.OUTLET
    )
  ) {
    return null;
  }

  const selectedElevation = component.elevation[0];

  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    selectedContainer,
    scaleFactor,
  });

  return (
    <group
      dispose={null}
      scale={10}
      position={calcPosition(
        selectedElevation,
        distanceObject,
        elevationData,
        SCALE_FACTOR_FOR_CALCULATIONS,
        selectedContainer
      )}
      rotation={[0, Math.PI, 0]}
    >
      <group position={[0.035, 0.5, 0]} scale={100}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wall_PlugSocket.geometry}
          material={materials.White_PVC}
          scale={0.01}
        />
      </group>
    </group>
  );
};

export default Outlet;
