import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
} from '@react-three/drei';
import style from './mobileModels.module.scss';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useMemo, useRef } from 'react';
import Door from './Doors/DoorSwitcher';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import Window from './Windows/WindowSwitcher';
import { CsgGeometries } from './Containers/CsgGeometries/CsgGeometries';
import { PageDataContext } from '../Content/Content';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  ELEVATION_NAMES,
  SUPPLIER_SLUGS,
} from '@/utils/constants/names/names';
import ContainerShell20Standard from './Containers/20/ContainerShell20Standard';
import { useBoundingBoxes } from '@/utils/hooks/useBoundingBoxes';
import { useExteriorGLTFModels } from '@/utils/hooks/useGLTFModels';
import { MOBILE_CAM_POS } from '@/utils/constants/camera/camPos';
import { handleAddComponent } from '@/utils/2D/utils';
import { componentData } from '@/utils/constants/componentData';
import ContainerShell10Standard from './Containers/10/ContainerShell10Standard';
import ContainerShell20High from './Containers/20/ContainerShell20High';
import ContainerShell40Standard from './Containers/40/ContainerShell40Standard';
import ContainerShell40High from './Containers/40/ContainerShell40High';
import { containerData } from '@/utils/constants/containerData';

export function MobileModels() {
  const {
    selectedComponents,
    cameraReady,
    setCameraReady,
    supplier,
    mappedElevations,
    floorPlan,
    setSelectedComponents,
    selectedContainer,
    containerHeightIsStandard,
  } = useContext(PageDataContext);

  const doorName = () => {
    if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
      return COMPONENT_NAMES.PERSONNEL_LHR_SECURITY;
    } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
      return COMPONENT_NAMES.STEEL_DOOR;
    }
  };

  const windowName = () => {
    if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
      return COMPONENT_NAMES.WINDOW;
    } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
      return COMPONENT_NAMES.HORIZONTAL_SLIDER_WINDOW;
    }
  };

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );
  const leftElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.LEFT
  );
  const door = componentData.find((door) => door.name === doorName());
  const window = componentData.find((window) => window.name === windowName());
  const modifiedWindow = {
    ...window,
    position: {
      ...window.position,
      x: 300,
    },
  };
  const modifiedWindow2 = {
    ...window,
    position: {
      ...window.position,
      x: 300,
    },
  };
  
  useEffect(() => {
    if (selectedContainer.size === CONTAINER_SIZE_10) {
      handleAddComponent({
        item: door,
        setSelectedComponents,
        selectedElevation: rightElevation,
        floorPlan,
      });
    } else {
      handleAddComponent({
        item: door,
        setSelectedComponents,
        selectedElevation: rightElevation,
        floorPlan,
      });
      handleAddComponent({
        item: modifiedWindow,
        setSelectedComponents,
        selectedElevation: rightElevation,
        floorPlan,
      });
      handleAddComponent({
        item: modifiedWindow2,
        setSelectedComponents,
        selectedElevation: leftElevation,
        floorPlan,
      });
    }
  }, []);

  const doors = useMemo(
    () =>
      selectedComponents.filter(
        (comp) => comp.objType === COMPONENT_TYPES.DOOR
      ),
    [selectedComponents, COMPONENT_TYPES]
  );
  const windows = useMemo(
    () =>
      selectedComponents.filter(
        (component) => component.objType === COMPONENT_TYPES.WINDOW
      ),
    [selectedComponents, COMPONENT_TYPES]
  );

  const camFov = 35;
  const cameraPos = MOBILE_CAM_POS;
  const cameraRot = [0, 10, 0];

  const orbitRef = useRef();

  function CameraRig() {
    const { camera } = useThree();
    const targetPosition = new Vector3(...cameraPos);

    useFrame(() => {
      const lookAtPosition = new Vector3(...cameraRot);

      camera.fov = camFov;
      camera.updateProjectionMatrix();

      if (!cameraReady) {
        camera.position.lerp(targetPosition, 0.1);
        camera.lookAt(lookAtPosition);

        // Check if the camera is close enough to the target position
        if (camera.position.distanceTo(targetPosition) < 0.01) {
          camera.position.copy(targetPosition); // Optionally lock the position
          setCameraReady(true); // Set the camera as ready
        }
      } else {
        camera.lookAt(lookAtPosition);
      }
    });
  }

  const {
    doorBoundingBoxes,
    windowBoundingBoxes,
    handleDoorBoundingBox,
    handleWindowBoundingBox,
  } = useBoundingBoxes({ doors, windows });

  const paint = useExteriorGLTFModels(supplier);

  const ContainerShell = () => {
    if (selectedContainer.size === CONTAINER_SIZE_10) {
      if (containerHeightIsStandard) {
        return <ContainerShell10Standard paint={paint} />;
      } else {
        return null;
      }
    } else if (selectedContainer.size === CONTAINER_SIZE_20) {
      if (containerHeightIsStandard) {
        return <ContainerShell20Standard paint={paint} />;
      } else {
        return <ContainerShell20High paint={paint} />;
      }
    } else if (selectedContainer === containerData[2]) {
      if (containerHeightIsStandard) {
        return <ContainerShell40Standard paint={paint} />;
      } else {
        return <ContainerShell40High paint={paint} />;
      }
    }
  };

  return (
    <div id='canvas-container' className={style.container}>
      <Canvas
        shadows
        camera={{ position: cameraPos, fov: camFov }}
        style={{ borderRadius: '11px' }}
      >
        <color attach='background' args={['#fdfdf7']} />
        <ContainerShell />
        <CsgGeometries
          doors={doors}
          windows={windows}
          doorBoundingBoxes={doorBoundingBoxes}
          windowBoundingBoxes={windowBoundingBoxes}
          paint={paint}
        />
        {doors.map((door, index) => (
          <Door
            key={door.id}
            component={door}
            onBoundingBoxChange={(data) => handleDoorBoundingBox(index, data)}
            supplier={supplier}
          />
        ))}
        {windows.map((window, index) => (
          <Window
            key={index}
            component={window}
            onBoundingBoxChange={(data) => handleWindowBoundingBox(index, data)}
            supplier={supplier}
          />
        ))}
        <ambientLight intensity={0.15} />
        <spotLight
          intensity={0.65}
          angle={0.2}
          penumbra={1}
          position={[140, 140, 140]}
          castShadow
          shadow-mapSize={[720, 720]}
        />
        <spotLight
          intensity={0.65}
          angle={0.2}
          penumbra={1}
          position={[-140, 140, -140]}
          castShadow
          shadow-mapSize={[720, 720]}
        />
        <AccumulativeShadows
          color='#fdfdf7'
          colorBlend={1}
          opacity={1}
          scale={300}
          position={[0, -0.5, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={35}
            ambient={0.5}
            intensity={3}
            position={[-5, 10, -5]}
            size={20}
          />
        </AccumulativeShadows>
        <Environment files='/adamsbridge.hdr' />
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO
            halfRes
            color='black'
            aoRadius={2}
            intensity={1}
            aoSamples={6}
            denoiseSamples={4}
          />
          <SMAA />
        </EffectComposer>
        <CameraRig />
        <OrbitControls
          makeDefault
          ref={orbitRef}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          enablePan={false}
          enableRotate={true}
          dampingFactor={0.15}
        />
      </Canvas>
    </div>
  );
}
