import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { SHED_12x24, SHED_12x32 } from '@/utils/constants/names/names';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  doors,
  windows,
  exteriorPaint
}) {
  const { selectedShedHeight, shedSize } =
    useContext(ShedDataContext);

  let shedDimensions;

  switch (shedSize) {
    case SHED_12x24:
      shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR;
      break;
    case SHED_12x32:
      shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO;
      break;
    default:
      shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO;
  }

  const adjustForX = -(shedDimensions.THREE_D.WIDTH / 2);
  const adjustForY = shedDimensions.THREE_D.DEPTH / 2;

  const exteriorNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/exterior.glb`
  ).nodes;
  const interiorNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/interior.glb`
  ).nodes;

  const csg = useRef();

  const { materials: groundBlockInteriorMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/interior.glb`
  );

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
  console.log(exteriorNodes)

  return (
    <group ref={csg}>
      <mesh receiveShadow castShadow>
        <Geometry useGroups>
          <Base
            geometry={shedSize === SHED_12x24 ? exteriorNodes.Exterior_wall.geometry : exteriorNodes.GF_ExteriorWall001.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
          >
            <meshStandardMaterial map={exteriorPaint} />
          </Base>
          <Base
            geometry={shedSize === SHED_12x24 ? interiorNodes.interior_wall.geometry : interiorNodes.GF_interiorwall001.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
            material={groundBlockInteriorMaterials.GF_interior}
          />
          {doorBoundingBoxGeometries}
          {windowBoundingBoxGeometries}
        </Geometry>
      </mesh>
    </group>
  );
}
