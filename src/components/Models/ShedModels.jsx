/* eslint-disable react-hooks/rules-of-hooks */
import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useContext, useEffect, useMemo, useRef } from 'react';
import { EffectComposer, N8AO, SMAA } from '@react-three/postprocessing';
import { Vector3 } from 'three';
import {
  COMPONENT_TYPES,
  SHED_12x24,
  SHED_12x32,
} from '@/utils/constants/names/names';
import {
  EXTERIOR_CAM_POS,
  INTERIOR_CAM_POS,
} from '@/utils/constants/camera/camPos';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import Door from './Doors/DoorSwitcher';
import { useBoundingBoxes } from '@/utils/hooks/sheds/useBoundingBoxes';
import Window from './Windows/WindowSwitcher';
import { CsgGeometries } from './Containers/CsgGeometries/Shed/CsgGeometries';
import { useExteriorPaint } from '@/utils/hooks/sheds/useGLTFModels';
import { Shed as Shed12x24 } from './Sheds/one-story/12x24/Shed';
import { Shed as Shed12x32 } from './Sheds/one-story/12x32/Shed';

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

export function ShedModels() {
  const {
    selectedComponents,
    showExterior,
    setThreeDModelLoaded,
    cameraReady,
    setCameraReady,
    supplier,
    show3d,
    exteriorFinish,
    shedSize,
  } = useContext(ShedDataContext);

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
        (comp) => comp.objType === COMPONENT_TYPES.WINDOW
      ),
    [selectedComponents, COMPONENT_TYPES]
  );

  const exteriorCamPos = () => {
    return EXTERIOR_CAM_POS.ONE_STORY;
  };

  const interiorCamPos = () => {
    return INTERIOR_CAM_POS.ONE_STORY;
  };

  const camFov = showExterior ? 35 : 20;
  const cameraPos = showExterior ? exteriorCamPos() : interiorCamPos();
  const cameraRot = [0, 0, 0];

  const orbitRef = useRef();

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
    });
  }

  const {
    doorBoundingBoxes,
    windowBoundingBoxes,
    handleDoorBoundingBox,
    handleWindowBoundingBox,
  } = useBoundingBoxes({ doors, windows });

  const exteriorPaint = useMemo(() => {
    return useExteriorPaint(supplier, exteriorFinish);
  }, [supplier, exteriorFinish]);

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
          <CsgGeometries
            doors={doors}
            windows={windows}
            doorBoundingBoxes={doorBoundingBoxes}
            windowBoundingBoxes={windowBoundingBoxes}
            exteriorPaint={exteriorPaint}
          />
          {getShedComponent(shedSize, exteriorPaint)}
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
              key={window.id}
              component={window}
              onBoundingBoxChange={(data) =>
                handleWindowBoundingBox(index, data)
              }
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
            enablePan={true}
            enableRotate={true}
            dampingFactor={0.15}
          />
        </Canvas>
      </div>
    </div>
  );
}
