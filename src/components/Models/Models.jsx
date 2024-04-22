import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import ShippingContainer from "./ShippingContainer";
import Environment from "../../utils/3D/Environment";
import { useContext, useEffect, useRef } from "react";
import Door from "./Door";
import { PageDataContext } from "src/app/page";
import { COMPONENT_TYPES } from "@/utils/2D/library";

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
  const { selectedComponents } = useContext(PageDataContext);
  const doors = selectedComponents.filter((component) => component.objType === COMPONENT_TYPES.DOOR);
  return (
    <div
      id="canvas-container"
      style={{ width: "auto", height: "100vh", position: "relative" }}
    >
      <Canvas shadows camera={{ position: [-75, 75, 75], fov: 35 }}>
        <color attach="background" args={["white"]} />
        <ShippingContainer />
        {doors.map((door) => (
          <Door key={door.id} component={door} />
        ))}
        <Environment />
        <OrbitControls makeDefault />
        <ControlledCamera />
      </Canvas>
    </div>
  );
};

export default Models;
