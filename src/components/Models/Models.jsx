import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
} from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
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

export function Models() {
  const {
    selectedComponents,
    showExterior,
    selectedContainer,
    setThreeDModelLoaded,
    containerHeightIsStandard,
    cameraReady,
    setCameraReady,
  } = useContext(PageDataContext);
  const { containerData } = useContext(Library2dDataContext);

  const { EXTERIOR_CAM_POS, INTERIOR_CAM_POS, INTERIOR_CAM_ROT } =
    useContext(Library3dDataContext);

  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setThreeDModelLoaded(true);
    }
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

  const [isOrbiting, setIsOrbiting] = useState(false);
  const orbitRef = useRef();

  function CameraRig() {
    const { camera } = useThree();
    const targetPosition = new Vector3(...cameraPos);
    const lookAtPosition = new Vector3(...cameraRot);

    useFrame(() => {
      camera.fov = camFov;
      camera.updateProjectionMatrix();

      if (!isOrbiting && !cameraReady) {
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

  const [doorBoundingBoxes, setDoorBoundingBoxes] = useState([]);
  const [windowBoundingBoxes, setWindowBoundingBoxes] = useState([]);
  const [ventBoundingBoxes, setVentBoundingBoxes] = useState([]);
  const [exhaustFanBoundingBox, setExhaustFanBoundingBox] = useState(null);

  const handleExhaustFanBoundingBox = useCallback((data) => {
    setExhaustFanBoundingBox(data);
  }, []);

  const handleDoorBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      // Adjust the bounding box height for personnel doors
      if (typeof data.size.y === 'number') {
        const doorName = doors[index]?.name;

        if (
          doorName === COMPONENT_NAMES.PERSONNEL_LHR ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR ||
          doorName === COMPONENT_NAMES.PERSONNEL_LHR_GLASS ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR_GLASS ||
          doorName === COMPONENT_NAMES.PERSONNEL_LHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_LHR_SECURITY_GLASS ||
          doorName === COMPONENT_NAMES.PERSONNEL_RHR_SECURITY_GLASS
        ) {
          if (
            data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
            data.selectedElevation.name === ELEVATION_NAMES.LEFT
          ) {
            updatedData = {
              ...updatedData,
              size: new Vector3(data.size.x - 2, data.size.y - 3, data.size.z),
              center: new Vector3(
                data.center.x,
                data.center.y - 2,
                data.center.z
              ),
            };
          } else {
            updatedData = {
              ...updatedData,
              size: new Vector3(data.size.x, data.size.y - 3, data.size.z - 2),
              center: new Vector3(
                data.center.x,
                data.center.y - 2,
                data.center.z
              ),
            };
          }
        } else if (doors[index].isRollUp) {
          updatedData = {
            ...updatedData,
            size: new Vector3(
              data.size.x - 2.3,
              data.size.y - 1.5,
              data.size.z
            ),
            center: new Vector3(
              data.center.x,
              data.center.y - 0.8,
              data.center.z
            ),
          };
        }
      }

      setDoorBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
    },
    [doors, COMPONENT_NAMES]
  );

  const handleWindowBoundingBox = useCallback((index, data) => {
    let updatedData = { ...data };

    if (
      data.selectedElevation.name === ELEVATION_NAMES.RIGHT ||
      data.selectedElevation.name === ELEVATION_NAMES.LEFT
    ) {
      updatedData = {
        ...updatedData,
        size: new Vector3(data.size.x - 2, data.size.y - 1.7, data.size.z),
        center: new Vector3(
          data.center.x - 0.1,
          data.center.y - 0.1,
          data.center.z
        ),
      };
    } else {
      updatedData = {
        ...updatedData,
        size: new Vector3(data.size.x, data.size.y - 1.7, data.size.z - 1.7),
        center: new Vector3(data.center.x, data.center.y - 0.1, data.center.z),
      };
    }

    setWindowBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
  }, []);

  const handleVentBoundingBox = useCallback((index, data) => {
    setVentBoundingBoxes((prev) => ({ ...prev, [index]: data }));
  }, []);

  const ContainerShell = () => {
    if (selectedContainer === containerData[0]) {
      if (containerHeightIsStandard) {
        return <ContainerShell10Standard />;
      } else {
        return null;
      }
    } else if (selectedContainer === containerData[1]) {
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

  return (
    <div
      id='canvas-container'
      style={{ width: 'auto', height: '100vh', position: 'relative' }}
    >
      <Canvas shadows camera={{ position: cameraPos, fov: camFov }}>
        <color attach='background' args={['#fdfdf7']} />
        <Amp />
        <RoofVent />
        <AirConditioner />
        <ExhaustFan onBoundingBoxChange={handleExhaustFanBoundingBox} />
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
