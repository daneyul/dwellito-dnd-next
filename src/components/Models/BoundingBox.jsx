import { useRef, useEffect, useState } from 'react';
import { BoxHelper, Box3, Vector3 } from 'three';
import { useThree } from '@react-three/fiber';

const BoundingBox = ({ children, onReceiveDimensions }) => {
  const meshRef = useRef();
  const { scene } = useThree();
  const [boxSize, setBoxSize] = useState(new Vector3());

  useEffect(() => {
    if (meshRef.current) {
      // Create a bounding box and compute its size
      const box = new Box3().setFromObject(meshRef.current);
      const size = new Vector3();
      box.getSize(size);
      setBoxSize(size);  // Storing the size in state

      if (onReceiveDimensions) {
        onReceiveDimensions(size);
      }

      // Create and add the BoxHelper to visualize the bounding box
      const helper = new BoxHelper(meshRef.current, 'cyan');  // Color can be changed
      scene.add(helper);
      return () => {
        scene.remove(helper);
      };
    }
  }, [scene, onReceiveDimensions]);

  return <group ref={meshRef}>{children}</group>;
};

export default BoundingBox;
