import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
  PointerLockControls,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import Door from './Doors/DoorSwitcher';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import Window from './Windows/WindowSwitcher';
import Vent from './Vents/VentSwitcher';
import { CsgGeometries } from './Containers/CsgGeometries/Container/CsgGeometries';
import {
  COMPONENT_TYPES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
} from '@/utils/constants/names/names';
import ContainerShell10Standard from './Containers/10/ContainerShell10Standard';
import ContainerShell20Standard from './Containers/20/ContainerShell20Standard';
import ContainerShell40Standard from './Containers/40/ContainerShell40Standard';
import ContainerShell20High from './Containers/20/ContainerShell20High';
import ContainerShell40High from './Containers/40/ContainerShell40High';
import { useBoundingBoxes } from '@/utils/hooks/containers/useBoundingBoxes';
import {
  EXTERIOR_CAM_POS,
  INTERIOR_CAM_POS,
  INTERIOR_CAM_ROT,
} from '@/utils/constants/camera/camPos';
import Electrical from './Electrical/Electrical';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import { preloadAllModels } from '@/utils/3D/containers/preloadModels';

export function ContainerModels() {
  const {
    selectedComponents,
    showExterior,
    selectedContainer,
    setThreeDModelLoaded,
    containerHeightIsStandard,
    cameraReady,
    setCameraReady,
    supplier,
    show3d,
    containerSize,
    selectedContainerHeight
  } = useContext(ContainerDataContext);

  const { progress } = useProgress();

  useEffect(() => {
    preloadAllModels({
      supplier,
      size: containerSize(),
      selectedContainerHeight,
    });
  }, []);

  useEffect(() => {
    setThreeDModelLoaded(progress === 100);
  }, [progress, setThreeDModelLoaded]);

  useEffect(() => {
    preloadAllModels({ supplier, size: containerSize(), selectedContainerHeight});
  }, [])


  useEffect(() => {
    setThreeDModelLoaded(progress === 100);
  }, [progress, setThreeDModelLoaded]);

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
  const vents = useMemo(
    () =>
      selectedComponents.filter(
        (component) => component.objType === COMPONENT_TYPES.VENT
      ),
    [selectedComponents, COMPONENT_TYPES]
  );

  const exteriorCamPos = () => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return EXTERIOR_CAM_POS.TEN;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return EXTERIOR_CAM_POS.TWENTY;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return EXTERIOR_CAM_POS.FORTY;
    }
  };

  const interiorCamPos = () => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return INTERIOR_CAM_POS.TEN;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return INTERIOR_CAM_POS.TWENTY;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return INTERIOR_CAM_POS.FORTY;
    }
  };

  const interiorCamRot = () => {
    if (selectedContainer.slug === CONTAINER_SIZE_10) {
      return INTERIOR_CAM_ROT.TEN;
    } else if (selectedContainer.slug === CONTAINER_SIZE_20) {
      return INTERIOR_CAM_ROT.TWENTY;
    } else if (selectedContainer.slug === CONTAINER_SIZE_40) {
      return INTERIOR_CAM_ROT.FORTY;
    }
  };

  const camFov = showExterior ? 35 : 80;
  const cameraPos = showExterior ? exteriorCamPos() : interiorCamPos();
  const cameraRot = showExterior ? [0, 0, 0] : interiorCamRot();

  const orbitRef = useRef();
  const controlsRef = useRef();

  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      const canvasContainer = document.getElementById('canvas-container');

      // Check if the clicked element is inside the canvas container
      if (
        !showExterior &&
        canvasContainer &&
        canvasContainer.contains(event.target)
      ) {
        if (isLocked) {
          document.exitPointerLock();
        } else {
          controlsRef.current?.lock(); // Lock only if clicked inside canvas-container
        }
      }
    };

    const handleLockChange = () => {
      setIsLocked(document.pointerLockElement !== null);
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('pointerlockchange', handleLockChange);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('pointerlockchange', handleLockChange);
    };
  }, [showExterior, isLocked]);

  useEffect(() => {
    if (showExterior && isLocked) {
      document.exitPointerLock();
    }
  }, [showExterior, isLocked]);

  function CameraRig() {
    const { camera } = useThree();
    const targetPosition = new Vector3(...cameraPos);
    const lookAtPosition = new Vector3(...cameraRot);

    useFrame(() => {
      camera.fov = camFov;
      camera.updateProjectionMatrix();

      if (!cameraReady) {
        camera.position.lerp(targetPosition, 0.2);
        camera.lookAt(lookAtPosition);

        // Check if the camera is close enough to the target position
        if (camera.position.distanceTo(targetPosition) < 0.01) {
          camera.position.copy(targetPosition); // Optionally lock the position
          setCameraReady(true); // Set the camera as ready
        }
      }

      // Make sure OrbitControls is enabled/disabled based on the camera readiness
      const controls = orbitRef.current;
      if (controls) {
        controls.enabled = cameraReady && showExterior;
      }
    });
  }

  const {
    doorBoundingBoxes,
    windowBoundingBoxes,
    ventBoundingBoxes,
    exhaustFanBoundingBox,
    handleExhaustFanBoundingBox,
    handleDoorBoundingBox,
    handleWindowBoundingBox,
    handleVentBoundingBox,
  } = useBoundingBoxes({ doors, windows, vents });

  const ContainerShell = () => {
    if (selectedContainer.size === CONTAINER_SIZE_10) {
      if (containerHeightIsStandard) {
        return <ContainerShell10Standard />;
      } else {
        return null;
      }
    } else if (selectedContainer.size === CONTAINER_SIZE_20) {
      if (containerHeightIsStandard) {
        return <ContainerShell20Standard />;
      } else {
        return <ContainerShell20High />;
      }
    } else if (selectedContainer.size === CONTAINER_SIZE_40) {
      if (containerHeightIsStandard) {
        return <ContainerShell40Standard />;
      } else {
        return <ContainerShell40High />;
      }
    }
  };

  return (
    <div
      style={{
        visibility: show3d ? 'visible' : 'hidden',
        position: 'absolute',
        width: '100%',
      }}
    >
      <div
        id='canvas-container'
        style={{ width: 'auto', height: '100vh', position: 'relative' }}
      >
        <Canvas shadows camera={{ position: cameraPos, fov: camFov }}>
          <color attach='background' args={['#fdfdf7']} />
          <Electrical
            supplierSlug={supplier}
            handleExhaustFanBoundingBox={handleExhaustFanBoundingBox}
            selectedComponents={selectedComponents}
          />
          <ContainerShell />
          <CsgGeometries
            doors={doors}
            windows={windows}
            vents={vents}
            doorBoundingBoxes={doorBoundingBoxes}
            windowBoundingBoxes={windowBoundingBoxes}
            ventBoundingBoxes={ventBoundingBoxes}
            exhaustFanBoundingBox={exhaustFanBoundingBox}
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
              containerHeightIsStandard={containerHeightIsStandard}
              key={index}
              component={window}
              onBoundingBoxChange={(data) =>
                handleWindowBoundingBox(index, data)
              }
              supplier={supplier}
            />
          ))}
          {vents.map((vent, index) => (
            <Vent
              key={index}
              component={vent}
              onBoundingBoxChange={(data) => handleVentBoundingBox(index, data)}
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
          {!showExterior ? (
            <PointerLockControls
              ref={controlsRef}
              enabled={!showExterior}
              selector='#canvas-container'
            />
          ) : (
            <OrbitControls
              makeDefault
              ref={orbitRef}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              enablePan={false}
              enableRotate={showExterior}
              dampingFactor={0.15}
            />
          )}
        </Canvas>
      </div>
    </div>
  );
}
