import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
  useGLTF,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Profiler,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Door from './Doors/DoorSwitcher';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import Window from './Windows/WindowSwitcher';
import Vent from './Vents/VentSwitcher';
import { CsgGeometries } from './Containers/CsgGeometries';
import { PageDataContext } from '../Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
  CONTAINER_HIGH,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  CONTAINER_STANDARD,
  ELEVATION_NAMES,
} from '@/utils/constants/names';
import ContainerShell10Standard from './Containers/10/ContainerShell10Standard';
import ContainerShell20Standard from './Containers/20/ContainerShell20Standard';
import ContainerShell40Standard from './Containers/40/ContainerShell40Standard';
import ContainerShell20High from './Containers/20/ContainerShell20High';
import ContainerShell40High from './Containers/40/ContainerShell40High';
import Amp from './Electrical/Amp';
import RoofVent from './Electrical/RoofVent';
import AirConditioner from './Electrical/AirConditioner';
import ExhaustFan from './Electrical/ExhaustFan';
import Heater from './Electrical/Heater';
import Outlet from './Electrical/Outlet';
import { preloadContainerModels } from '@/utils/3D/preloadGLTFModel';
import { useBoundingBoxes } from '@/utils/hooks/useBoundingBoxes';

export function Models() {
  const {
    selectedComponents,
    showExterior,
    selectedContainer,
    setThreeDModelLoaded,
    containerHeightIsStandard,
    cameraReady,
    setCameraReady,
    slug,
  } = useContext(PageDataContext);
  const { containerData } = useContext(Library2dDataContext);

  const { EXTERIOR_CAM_POS, INTERIOR_CAM_POS, INTERIOR_CAM_ROT } =
    useContext(Library3dDataContext);

  const { progress } = useProgress();

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
  const heater = useMemo(() =>
    selectedComponents.find(
      (component) => component.name === COMPONENT_NAMES.BASEBOARD_HEATER
    )
  );
  const outlet = useMemo(() =>
    selectedComponents.find(
      (component) => component.name === COMPONENT_NAMES.OUTLET
    )
  );

  const exteriorCamPos = () => {
    if (selectedContainer === containerData[0]) {
      return EXTERIOR_CAM_POS.TEN;
    } else if (selectedContainer === containerData[1]) {
      return EXTERIOR_CAM_POS.TWENTY;
    } else if (selectedContainer === containerData[2]) {
      return EXTERIOR_CAM_POS.FORTY;
    }
  };

  const interiorCamPos = () => {
    if (selectedContainer === containerData[0]) {
      return INTERIOR_CAM_POS.TEN;
    } else if (selectedContainer === containerData[1]) {
      return INTERIOR_CAM_POS.TWENTY;
    } else if (selectedContainer === containerData[2]) {
      return INTERIOR_CAM_POS.FORTY;
    }
  };

  const interiorCamRot = () => {
    if (selectedContainer === containerData[0]) {
      return INTERIOR_CAM_ROT.TEN;
    } else if (selectedContainer === containerData[1]) {
      return INTERIOR_CAM_ROT.TWENTY;
    } else if (selectedContainer === containerData[2]) {
      return INTERIOR_CAM_ROT.FORTY;
    }
  };

  const camFov = showExterior ? 35 : 80;
  const cameraPos = showExterior ? exteriorCamPos() : interiorCamPos();
  const cameraRot = showExterior ? [0, 0, 0] : interiorCamRot();

  const orbitRef = useRef();

  function CameraRig() {
    const { camera } = useThree();
    const targetPosition = new Vector3(...cameraPos);
    const lookAtPosition = new Vector3(...cameraRot);

    useFrame(() => {
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
      }
    });

    // Make sure OrbitControls is enabled/disabled based on the camera readiness
    const controls = orbitRef.current;
    if (controls) {
      controls.enabled = cameraReady && showExterior;
    }
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
    } else if (selectedContainer === containerData[2]) {
      if (containerHeightIsStandard) {
        return <ContainerShell40Standard />;
      } else {
        return <ContainerShell40High />;
      }
    }
  };

  useEffect(() => {
    if (slug === CONTAINER_10_SLUG) {
      preloadContainerModels(CONTAINER_SIZE_10, CONTAINER_STANDARD);
    } else if (slug === CONTAINER_20_SLUG) {
      if (containerHeightIsStandard) {
        preloadContainerModels(CONTAINER_SIZE_20, CONTAINER_STANDARD);
      } else {
        preloadContainerModels(CONTAINER_SIZE_20, CONTAINER_HIGH);
      }
    } else if (slug === CONTAINER_40_SLUG) {
      if (containerHeightIsStandard) {
        preloadContainerModels(CONTAINER_SIZE_40, CONTAINER_STANDARD);
      } else {
        preloadContainerModels(CONTAINER_SIZE_40, CONTAINER_HIGH);
      }
    }
  }, []);

  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(
      `Profiler ID: ${id}
      Phase: ${phase}
      Actual Duration: ${actualDuration}
      Base Duration: ${baseDuration}
      Start Time: ${startTime}
      Commit Time: ${commitTime}
      Interations: ${interactions}
      `
    );
  };

  return (
    <div
      id='canvas-container'
      style={{ width: 'auto', height: '100vh', position: 'relative' }}
    >
      <Canvas shadows camera={{ position: cameraPos, fov: camFov }}>
        <color attach='background' args={['#fdfdf7']} />
          {/* <Outlet component={outlet} />
          <Heater component={heater} />
          <Amp />
          <RoofVent />
          <AirConditioner />
          <ExhaustFan onBoundingBoxChange={handleExhaustFanBoundingBox} /> */}
        <Profiler id='Shell' onRender={onRenderCallback}>
          <ContainerShell />
        </Profiler>
        <Profiler id='Csg' onRender={onRenderCallback}>
          <CsgGeometries
            doors={doors}
            windows={windows}
            vents={vents}
            doorBoundingBoxes={doorBoundingBoxes}
            windowBoundingBoxes={windowBoundingBoxes}
            ventBoundingBoxes={ventBoundingBoxes}
            exhaustFanBoundingBox={exhaustFanBoundingBox}
          />
        </Profiler>
        {doors.map((door, index) => (
          <Door
            key={door.id}
            component={door}
            onBoundingBoxChange={(data) => handleDoorBoundingBox(index, data)}
          />
        ))}
        {windows.map((window, index) => (
          <Window
            key={index}
            component={window}
            onBoundingBoxChange={(data) => handleWindowBoundingBox(index, data)}
          />
        ))}
        {vents.map((vent, index) => (
          <Vent
            key={index}
            component={vent}
            onBoundingBoxChange={(data) => handleVentBoundingBox(index, data)}
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
          enableRotate={showExterior}
          dampingFactor={0.15}
        />
      </Canvas>
    </div>
  );
}
