import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree, extend } from "@react-three/fiber";
import ShippingContainer from "./ShippingContainer";
import Environment from "../../utils/Environment";
import { useEffect, useRef } from "react";
import Door from "./Door";

const ControlledCamera = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  useEffect(() => {
    // This sets the minimum and maximum angles at which the camera can orbit vertically
    const minPolarAngle = Math.PI / 4; // Adjust this value to restrict downward movement
    const maxPolarAngle = Math.PI / 2; // Maximum should be Pi/2, which is the horizon level

    controls.current.minPolarAngle = minPolarAngle;
    controls.current.maxPolarAngle = maxPolarAngle;

    // Optional: Adjust these to limit zoom or distance
    controls.current.minDistance = 10;
    controls.current.maxDistance = 300;
  }, [controls]);

  return <OrbitControls ref={controls} args={[camera, domElement]} />;
};

const Models = () => {
  return (
    <div
      id="canvas-container"
      style={{ width: "100vw", height: "500px", position: "relative" }}
    >
      <Canvas shadows camera={{ position: [-55, 50, 55], fov: 35 }}>
        <color attach="background" args={["white"]} />
        <ShippingContainer />
        <Door />
        <Environment />
        <OrbitControls makeDefault />
        <ControlledCamera />
      </Canvas>
    </div>
  );
};

export default Models;
