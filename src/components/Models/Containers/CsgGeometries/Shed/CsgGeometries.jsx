/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import {
  ONE_STORY,
  SHED_12x24,
  SHED_12x32,
  SHED_16x24,
  TWO_STORY,
} from '@/utils/constants/names/names';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  doors,
  windows,
  exteriorPaint,
}) {
  const { selectedShedHeight, shedSize, showSecondFloor } =
    useContext(ShedDataContext);

  let shedDimensions;

  switch (selectedShedHeight) {
    case ONE_STORY:
      switch (shedSize) {
        case SHED_12x24:
          shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_TWENTY_FOUR;
          break;
        case SHED_12x32:
          shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO;
          break;
        case SHED_16x24:
          shedDimensions = DIMENSIONS.SHED.ONE_STORY.SIXTEEN_TWENTY_FOUR;
          break;
        default:
          shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO;
      }
      break;
    case TWO_STORY:
      switch (shedSize) {
        case SHED_16x24:
          shedDimensions = DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR;
          break;
        default:
          shedDimensions = DIMENSIONS.SHED.TWO_STORY.SIXTEEN_TWENTY_FOUR;
      }
      break;
    default:
      shedDimensions = DIMENSIONS.SHED.ONE_STORY.TWELVE_THIRTY_TWO;
  }

  const adjustForX = -(shedDimensions.THREE_D.WIDTH / 2);
  const adjustForY = shedDimensions.THREE_D.DEPTH / 2;

  let exteriorFfNodes;
  let interiorFfNodes;

  if (selectedShedHeight === TWO_STORY) {
    exteriorFfNodes = useGLTF(
      `/models/shed/${selectedShedHeight}/${shedSize}/exteriorFf.glb`
    ).nodes;
    interiorFfNodes = useGLTF(
      `/models/shed/${selectedShedHeight}/${shedSize}/interiorFf.glb`
    ).nodes;
  }

  const exteriorGfNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/exteriorGf.glb`
  ).nodes;
  const interiorGfNodes = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/interiorGf.glb`
  ).nodes;

  const csg = useRef();

  const { materials: groundBlockInteriorMaterials } = useGLTF(
    `/models/shed/${selectedShedHeight}/${shedSize}/interiorGf.glb`
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

  const secondFloor = () => {
    if (showSecondFloor) {
      return (
        <>
          <Base
            geometry={exteriorFfNodes.exteriorwall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
          >
            <meshStandardMaterial map={exteriorPaint} />
          </Base>
          <Base
            geometry={interiorFfNodes.interiorwall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
            material={groundBlockInteriorMaterials.GF_interior}
          />
        </>
      );
    }
  };

  return (
    <group ref={csg}>
      <mesh receiveShadow castShadow>
        <Geometry useGroups>
          <Base
            geometry={exteriorGfNodes.exteriorwall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
          >
            <meshStandardMaterial map={exteriorPaint} />
          </Base>
          <Base
            geometry={interiorGfNodes.interiorwall.geometry}
            scale={0.2}
            position={[adjustForX, 0, adjustForY]}
            material={groundBlockInteriorMaterials.GF_interior}
          />
          {secondFloor()}
          {doorBoundingBoxGeometries}
          {windowBoundingBoxGeometries}
        </Geometry>
      </mesh>
    </group>
  );
}
