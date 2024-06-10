import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Door from "./Doors/DoorSwitcher";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { Vector3 } from "three";
import Window from "./Windows/WindowSwitcher";
import Vent from "./Vents/VentSwitcher";
import { CsgGeometries } from "./Containers/CsgGeometries";
import { PageDataContext } from "../Content/Content";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import ContainerShell10 from "./Containers/10/ContainerShell10";
import ContainerShell20 from "./Containers/20/ContainerShell20";
import ContainerShell40 from "./Containers/40/ContainerShell40";
import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

export function Models() {
  const {
    selectedComponents,
    showExterior,
    selectedContainer,
    setThreeDModelLoaded,
  } = useContext(PageDataContext);
  const { COMPONENT_TYPES, COMPONENT_NAMES, containerData } =
    useContext(Library2dDataContext);
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
  const [cameraReady, setCameraReady] = useState(true);
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

    useEffect(() => {
      // Make sure OrbitControls is enabled/disabled based on the camera readiness
      const controls = orbitRef.current;
      if (controls) {
        controls.enabled = cameraReady && showExterior;
      }
    }, [cameraReady, showExterior]);
  }

  // This detects when the user is orbiting the camera
  // We want to disable the CameraRig logic when the user is orbiting
  // This will prevent the camera from jumping back to its original position
  useEffect(() => {
    setCameraReady(false);
    const controls = orbitRef.current;
    if (controls) {
      const startOrbiting = () => setIsOrbiting(true);
      const stopOrbiting = () => setIsOrbiting(false);

      controls.addEventListener("start", startOrbiting);
      controls.addEventListener("end", stopOrbiting);

      return () => {
        controls.removeEventListener("start", startOrbiting);
        controls.removeEventListener("end", stopOrbiting);
      };
    }
  }, [orbitRef, showExterior]);

  const [doorBoundingBoxes, setDoorBoundingBoxes] = useState([]);
  const [windowBoundingBoxes, setWindowBoundingBoxes] = useState([]);
  const [ventBoundingBoxes, setVentBoundingBoxes] = useState([]);

  const handleDoorBoundingBox = useCallback(
    (index, data) => {
      let updatedData = { ...data };

      // Adjust the bounding box height for personnel doors
      if (typeof data.size.y === "number") {
        const doorName = doors[index]?.name;

        if (
          doorName === COMPONENT_NAMES.PERSONNEL_DOOR_LHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_DOOR_RHR_SECURITY ||
          doorName === COMPONENT_NAMES.PERSONNEL_DOOR_LHR_SECURITY_GLASS ||
          doorName === COMPONENT_NAMES.PERSONNEL_DOOR_RHR_SECURITY_GLASS
        ) {
          updatedData = {
            ...updatedData,
            size: new Vector3(data.size.x, data.size.y - 3, data.size.z),
            center: new Vector3(
              data.center.x,
              data.center.y - 2,
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

    updatedData = {
      ...updatedData,
      size: new Vector3(data.size.x - 2, data.size.y - 1.7, data.size.z),
      center: new Vector3(
        data.center.x - 0.1,
        data.center.y - 0.1,
        data.center.z
      ),
    };

    setWindowBoundingBoxes((prev) => ({ ...prev, [index]: updatedData }));
  }, []);

  const handleVentBoundingBox = useCallback((index, data) => {
    setVentBoundingBoxes((prev) => ({ ...prev, [index]: data }));
  }, []);

  const ContainerShell = () => {
    if (selectedContainer === containerData[0]) {
      return <ContainerShell10 />;
    } else if (selectedContainer === containerData[1]) {
      return <ContainerShell20 />;
    } else if (selectedContainer === containerData[2]) {
      return <ContainerShell40 />;
    }
  };

  // Update bounding box states when components are removed
  useEffect(() => {
    const doorIds = doors.map((door) => door.id);
    const windowIds = windows.map((window) => window.id);
    const ventIds = vents.map((vent) => vent.id);

    setDoorBoundingBoxes((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => doorIds.includes(key))
      )
    );
    setWindowBoundingBoxes((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => windowIds.includes(key))
      )
    );
    setVentBoundingBoxes((prev) =>
      Object.fromEntries(
        Object.entries(prev).filter(([key]) => ventIds.includes(key))
      )
    );
  }, [doors, windows, vents]);

  return (
    <div
      id="canvas-container"
      style={{ width: "auto", height: "100vh", position: "relative" }}
    >
      <Canvas shadows camera={{ position: cameraPos, fov: camFov }}>
        <color attach="background" args={["#fdfdf7"]} />
        <ContainerShell />
        <CsgGeometries
          doorBoundingBoxes={doorBoundingBoxes}
          windowBoundingBoxes={windowBoundingBoxes}
          ventBoundingBoxes={ventBoundingBoxes}
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
          color="#fdfdf7"
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
        <Environment files="/adamsbridge.hdr" />
        <EffectComposer disableNormalPass multisampling={0}>
          <N8AO
            halfRes
            color="black"
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
        />
      </Canvas>
    </div>
  );
}
