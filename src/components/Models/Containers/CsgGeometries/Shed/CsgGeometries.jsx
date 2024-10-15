import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  doors,
  windows,
  exteriorPaint
}) {
  const { selectedShedHeight } =
    useContext(ShedDataContext);

  const adjustForX = -(
    DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.WIDTH / 2
  );

  const adjustForY =
    DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR.THREE_D.DEPTH / 2;

  const exteriorNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/exterior.glb`
  ).nodes;
  const interiorNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/interior.glb`
  ).nodes;

  const csg = useRef();

  const doorBoundingBoxGeometries = useMemo(() => {
    return doors.map((door, index) => {
      const bbox = doorBoundingBoxes[index];
      if (!bbox) return null;
      return (
        <group
          key={door.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          </Subtraction>
        </group>
      );
    });
  }, [doors, doorBoundingBoxes]);

  const windowBoundingBoxGeometries = useMemo(() => {
    return windows.map((window, index) => {
      const bbox = windowBoundingBoxes[index];
      if (!bbox) return null;
      return (
        <group
          key={window.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          </Subtraction>
        </group>
      );
    });
  }, [windows, windowBoundingBoxes]);

  return (
    <group ref={csg}>
      <mesh receiveShadow castShadow>
        <Geometry useGroups>
          <Base
            geometry={exteriorNodes.Exterior_wall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
          >
            <meshStandardMaterial map={exteriorPaint} />
          </Base>
          <Base
            geometry={interiorNodes.interior_wall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
          />
          {doorBoundingBoxGeometries}
          {windowBoundingBoxGeometries}
        </Geometry>
      </mesh>
    </group>
  );
}
