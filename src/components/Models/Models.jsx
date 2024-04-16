import { Canvas, useThree } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useEffect } from "react";
import { Box3, Vector3 } from 'three';
import Thing from "../Thing";
import Thing2 from "../Thing2";

function CameraSetup() {
  const { camera, scene } = useThree();

  useEffect(() => {
    const box = new Box3().setFromObject(scene);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());

    const maxSize = Math.max(size.x, size.y, size.z);
    const cameraPosition = maxSize * 1.5; // Adjust the multiplier to ensure all objects are visible

    camera.position.set(center.x, center.y, cameraPosition);
    camera.lookAt(center);
    camera.zoom = 1; // Adjust zoom level as needed
    camera.near = 0.1;
    camera.far = cameraPosition * 2;
    camera.updateProjectionMatrix();
  }, [camera, scene]);
}

const Models = () => {
  return (
    <Canvas>
      <OrthographicCamera
        makeDefault
        position={[0, 0, 100]} // Initial position, will be overridden
        near={-100}
        far={100}
      />
      <ambientLight intensity={0.5} />
      <Thing />
      <Thing2 />
      <CameraSetup />
    </Canvas>
  );
}

export default Models;
