import { useRef } from 'react';
import { Box } from '@react-three/drei';

const BoundingBoxVisual = ({ dimensions, position, visible = true, color, opacity }) => {
  const meshRef = useRef();

  return (
    <Box
      ref={meshRef}
      args={[dimensions.x, dimensions.y, dimensions.z]} // Directly use dimensions as args
      position={[position.x, position.y, position.z]} // Directly set position
      visible={visible}
    >
      <meshStandardMaterial attach="material" color={color} opacity={opacity} transparent />
    </Box>
  );
};

export default BoundingBoxVisual;