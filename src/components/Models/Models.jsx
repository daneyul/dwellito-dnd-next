import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  OrthographicCamera,
} from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import ShippingContainer from "./ShippingContainer";
import { useContext, useEffect, useRef } from "react";
import Door from "./Door";
import { PageDataContext } from "src/app/page";
import { COMPONENT_TYPES } from "@/utils/2D/library";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import * as THREE from 'three'

const Models = () => {
  const { selectedComponents } = useContext(PageDataContext);
  const doors = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.DOOR
  );
  const cameraPos = [127, 38, 69];
  const cameraRot = [-0.32, 0.58, 0.18];
  const cameraTar = [-452, -222, -703];

  const CameraLogger = () => {
    const { camera } = useThree();
    const targetRef = useRef(new THREE.Vector3());
  
    useEffect(() => {
      const logCameraPosition = () => {
        console.log("Position:", camera.position);
        console.log("Rotation:", camera.rotation);
    
        // Calculate the camera target
        const target = new THREE.Vector3();
        camera.getWorldDirection(target);
        target.multiplyScalar(1000).add(camera.position);  // Adjust scalar as needed based on your scene scale
        console.log("Target:", target);
    
        // Optionally store the camera state
        // localStorage.setItem('cameraState', JSON.stringify({position: camera.position.toArray(), rotation: camera.rotation.toArray(), target: target.toArray()}));
      };
    
      logCameraPosition();
    }, [camera]);
  
    return null;
  };

  return (
    <div
      id="canvas-container"
      style={{ width: "auto", height: "100vh", position: "relative" }}
    >
      <Canvas
        shadows
        camera={{ position: cameraPos, fov: 35, near: 1, far: 500 }}
      >
        <color attach="background" args={["#fdfdf7"]} />

        <ShippingContainer />
        {doors.map((door, index) => (
          <Door key={index} component={door} />
        ))}

        {/** Soft shadows */}
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
          scale={150}
          position={[0, -0.3, 0]}
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
        {/* <EffectComposer disableNormalPass multisampling={0}>
          <N8AO
            halfRes
            color="black"
            aoRadius={2}
            intensity={1}
            aoSamples={6}
            denoiseSamples={4}
          />
          <SMAA />
        </EffectComposer> */}
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
        <CameraLogger />
        {/* <OrthographicCamera
          makeDefault
          position={cameraPos}
          near={0.1}
          far={100}
          left={-50}
          right={50}
          top={50}
          bottom={-50}
        /> */}
      </Canvas>
    </div>
  );
};

export default Models;
