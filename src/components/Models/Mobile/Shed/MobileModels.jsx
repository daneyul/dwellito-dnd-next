/* eslint-disable react-hooks/rules-of-hooks */
import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
} from '@react-three/drei';
import style from '../mobileModels.module.scss';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useRef, useMemo } from 'react';
import Door from '../../Doors/DoorSwitcher';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import Window from '../../Windows/WindowSwitcher';
import { CsgGeometries } from '../../Containers/CsgGeometries/Shed/CsgGeometries';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
  SHED_12x24,
  SHED_12x32,
} from '@/utils/constants/names/names';
import { useBoundingBoxes } from '@/utils/hooks/sheds/useBoundingBoxes';
import { MOBILE_CAM_POS } from '@/utils/constants/camera/camPos';
import { handleAddComponent } from '@/utils/2D/sheds/utils';
import { componentData } from '@/utils/constants/componentData';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { useExteriorPaint } from '@/utils/hooks/sheds/useGLTFModels';
import ShedToggleCamera from '@/components/ToggleCamera/ShedToggleCamera';
import { Shed as Shed12x24 } from '../../Sheds/one-story/12x24/Shed';
import { Shed as Shed12x32 } from '../../Sheds/one-story/12x32/Shed';
import { Spinner } from '@radix-ui/themes';

export function MobileModels() {
  const {
    cameraReady,
    setCameraReady,
    supplier,
    mappedElevations,
    selectedComponents,
    setSelectedComponents,
    exteriorFinish,
    shedSize,
  } = useContext(ShedDataContext);

  function Loader() {
    const { progress } = useProgress();
    return (
      <div
        style={{
          textAlign: 'center',
          display: progress === 100 ? 'none' : 'flex',
          position: 'absolute',
          zIndex: 1000,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Spinner size='2' />
      </div>
    );
  }

  // Load fixed components for now
  const doorName = COMPONENT_NAMES.EXTERIOR_DOOR_1;

  const windowName = COMPONENT_NAMES.WINDOW_48_48;

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );
  const leftElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.LEFT
  );
  const frontElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.FRONT
  );
  const door = componentData.find((door) => door.name === doorName);
  const window = componentData.find((window) => window.name === windowName);
  const modifiedDoor = {
    ...door,
    position: {
      ...door.position,
      x: 0,
    },
  };
  const modifiedWindowFront = {
    ...window,
    position: {
      ...window.position,
      x: 0,
    },
  };
  const modifiedWindowRight = {
    ...window,
    position: {
      ...window.position,
      x: 0,
    },
  };
  const modifiedWindowLeft1 = {
    ...window,
    position: {
      ...window.position,
      x: 0,
    },
  };
  const modifiedWindowLeft2 = {
    ...window,
    position: {
      ...window.position,
      x: 490,
    },
  };

  useEffect(() => {
    handleAddComponent({
      item: modifiedDoor,
      setSelectedComponents,
      selectedElevation: frontElevation,
    });
    handleAddComponent({
      item: modifiedWindowFront,
      setSelectedComponents,
      selectedElevation: frontElevation,
    });
    handleAddComponent({
      item: modifiedWindowRight,
      setSelectedComponents,
      selectedElevation: rightElevation,
    });
    handleAddComponent({
      item: modifiedWindowLeft1,
      setSelectedComponents,
      selectedElevation: leftElevation,
    });
    handleAddComponent({
      item: modifiedWindowLeft2,
      setSelectedComponents,
      selectedElevation: leftElevation,
    });
  }, []);

  const doors = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.DOOR
  );
  const windows = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.WINDOW
  );

  const camFov = 35;
  const cameraPos = MOBILE_CAM_POS.SHED;
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
  } = useBoundingBoxes({
    doors,
    windows,
  });

  const exteriorPaint = useMemo(() => {
    return useExteriorPaint(supplier, exteriorFinish);
  }, [supplier, exteriorFinish]);

  function getShedComponent(shedSize, exteriorPaint) {
    const shedComponents = {
      [SHED_12x24]: Shed12x24,
      [SHED_12x32]: Shed12x32,
    };

    const SelectedShed = shedComponents[shedSize] || null;

    if (!SelectedShed) {
      return <p>Invalid shed size selected</p>;
    }

    return <SelectedShed exteriorPaint={exteriorPaint} />;
  }

  return (
    <div
      id='canvas-container'
      className={style.container}
      style={{ minHeight: '300px', position: 'relative' }}
    >
      <Loader />
      <Canvas
        shadows
        camera={{ position: cameraPos, fov: camFov }}
        style={{ borderRadius: '11px', height: '300px' }}
      >
        <color attach='background' args={['#fdfdf7']} />
        {getShedComponent(shedSize, exteriorPaint)}
        <CsgGeometries
          doors={doors}
          windows={windows}
          doorBoundingBoxes={doorBoundingBoxes}
          windowBoundingBoxes={windowBoundingBoxes}
          exteriorPaint={exteriorPaint}
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
      <ShedToggleCamera isMobile={true} />
    </div>
  );
}
