import {
  AccumulativeShadows,
  OrbitControls,
  Environment,
  RandomizedLight,
  OrthographicCamera,
  Loader,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ShippingContainer from "./ShippingContainer";
import { useContext, useEffect, useState } from "react";
import Door from "./Door";
import { PageDataContext } from "src/app/page";
import { COMPONENT_TYPES } from "@/utils/2D/library";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";

const Models = () => {
  const { selectedComponents } = useContext(PageDataContext);
  const doors = selectedComponents.filter(
    (component) => component.objType === COMPONENT_TYPES.DOOR
  );
  const cameraPos = [100, 50, 100];
  // const { progress } = useProgress();
  const [color, setColor] = useState('#F2F2F2'); // Default color

  const colors = [
    { name: 'White', hex: '#F2F2F2' },
    { name: 'Blue', hex: '#003366' },
    { name: 'Green', hex: '#2E8B57' },
    { name: 'Slate Grey', hex: '#6C7B8B' },
    { name: 'Red', hex: '#800000' }
  ];

  return (
    <>
    <div
      id="canvas-container"
      style={{ width: "auto", height: "100vh", position: "relative" }}
    >
      <div style={{ position: 'absolute', zIndex: 10, top: 20, left: 20 }}>
        {colors.map((c, index) => (
          <button
            key={index}
            onClick={() => setColor(c.hex)}
            style={{ backgroundColor: c.hex, width: 50, height: 50, margin: '0 10px', cursor: 'pointer' }}
            title={c.name}
          />
        ))}
      </div>
      <Canvas
        shadows
        camera={{
          position: cameraPos,
          fov: 35,
          near: 1,
          far: 1000,
        }}
      >
        <color attach="background" args={["#fdfdf7"]} />
        <ShippingContainer color={color} />
        {doors.map((door, index) => (
          <Door key={index} component={door} />
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
        <OrbitControls
          makeDefault
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        />
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
    </>
  );
};

export default Models;
