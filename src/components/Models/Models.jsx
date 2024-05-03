import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import ShippingContainer from "./ShippingContainer";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import Door from "./Doors/Door";
import { PageDataContext } from "src/app/page";
import { COMPONENT_TYPES } from "@/utils/2D/library";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import { Vector3 } from "three";
import Window from "./Windows/Window";
import Vent from "./Vents/Vent";
import { Test } from "./Test";
import { TestDoor } from "./TestDoor";

const Models = () => {
  const { selectedComponents, color, interior, showExterior } =
    useContext(PageDataContext);
  const doors = useMemo(
    () =>
      selectedComponents.filter(
        (comp) => comp.objType === COMPONENT_TYPES.DOOR
      ),
    [selectedComponents]
  );
  const windows = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.WINDOW
  );
  const vents = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.VENT
  );
  const exteriorCamPos = [100, 50, 100];
  const interiorCamPos = [28.68, 12, -0.88];
  const interiorCamRot = [2.15, 12, 5.65];
  const camFov = showExterior ? 35 : 54;
  const cameraPos = showExterior ? exteriorCamPos : interiorCamPos;
  const cameraRot = showExterior ? [0, 0, 0] : interiorCamRot;

  const [isOrbiting, setIsOrbiting] = useState(false);
  const [cameraReady, setCameraReady] = useState(true);
  const orbitRef = useRef();
  const containerRef = useRef();

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

  // const [boundingBoxes, setBoundingBoxes] = useState({});

  // const handleBoundingBox = useCallback((index, data) => {
  //   setBoundingBoxes((prev) => ({ ...prev, [index]: data }));
  // }, []);

  return (
    <>
      <div
        id="canvas-container"
        style={{ width: "auto", height: "100vh", position: "relative" }}
      >
        <Canvas shadows camera={{ position: cameraPos, fov: camFov }}>
          <color attach="background" args={["#fdfdf7"]} />
          {/* <Test color={color} /> */}
          <ShippingContainer
            color={color}
            interior={interior}
          />
          {doors.map((door, index) => (
            <Door key={index} component={door} />
          ))}
          {windows.map((window, index) => (
            <Window key={index} component={window} />
          ))}
          {vents.map((vent, index) => (
            <Vent key={index} component={vent} />
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
    </>
  );
};

export default Models;
