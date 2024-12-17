import React, { useEffect, useRef } from 'react';
import { TransformControls } from '@react-three/drei';

const CustomTransformControls = ({ mode = 'translate', onDragStart, onDragEnd, children }) => {
  const controlsRef = useRef();

  useEffect(() => {
    if (controlsRef.current) {
      // Traverse the gizmo and hide Z-axis
      controlsRef.current.traverse((child) => {
        if (child.name && child.name.includes('Z')) {
          child.visible = false; // Hide the Z-axis gizmo
        }
      });
    }
  }, []);

  return (
    <TransformControls
      ref={controlsRef}
      mode={mode} // 'translate', 'rotate', or 'scale'
      onMouseDown={onDragStart} // Optional: Disable OrbitControls
      onMouseUp={onDragEnd} // Optional: Re-enable OrbitControls
    >
      {children}
    </TransformControls>
  );
};

export default CustomTransformControls;