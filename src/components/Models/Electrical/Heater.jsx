import { PageDataContext } from '@/components/Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { checkDistance } from '@/utils/2D/utils';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import { calcPosition } from '@/utils/3D/utils';
import { elevationData } from '@/utils/constants/elevationData';
import { COMPONENT_NAMES } from '@/utils/constants/names';
import { useGLTF } from '@react-three/drei';
import { useContext } from 'react';

const Heater = ({ component }) => {
  const {
    selectedComponents,
    selectedContainer,
    scaleFactor,
  } = useContext(PageDataContext);
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const { SCALE_FACTOR_FOR_CALCULATIONS } = useContext(Library3dDataContext);

  const selectedElevation = component.elevation[0];

  const { nodes, materials } = useGLTF(`/models/electrical/heater.glb`);

  const distanceObject = checkDistance({
    component,
    selectedElevation,
    DIMENSIONS,
    selectedContainer,
    scaleFactor,
  });

  if (
    !selectedComponents.some(
      (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
    )
  ) {
    return null;
  }

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
    >
      <group position={[0.953, 0.2, 0.15]} rotation={[-Math.PI / 2, 0, 0]}>
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
  );
};

export default Heater;
