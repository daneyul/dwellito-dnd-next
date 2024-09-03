import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import { PageDataContext } from '@/components/Content/Content';
import {
  getExteriorPaint,
} from '@/utils/hooks/useGLTFModels';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';
import CustomCubes from './Interiors/CustomCubes';
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import AtAndS from './Interiors/AtAndS';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  ventBoundingBoxes,
  exhaustFanBoundingBox,
  doors,
  windows,
  vents,
  paint,
}) {
  const {
    exteriorFinish,
    interiorFinishes,
    selectedContainer,
    selectedContainerHeight,
    containerSize,
    supplier,
    interiorTrim
  } = useContext(PageDataContext);

  const size = containerSize();

  const adjustForX = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
    }
  }, [selectedContainer.name, DIMENSIONS]);

  const adjustForY = useMemo(() => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
    }
  }, [selectedContainer.name, DIMENSIONS]);

  const cRightNodes = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`
  ).nodes;
  const cBackNodes = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`
  ).nodes;
  const cLeftNodes = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`
  ).nodes;

  const csg = useRef();

  const exteriorPaint = useMemo(() => {
    return getExteriorPaint(supplier, exteriorFinish, paint);
  }, [supplier, exteriorFinish, paint]);

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

  const ventBoundingBoxGeometries = useMemo(() => {
    if (!ventBoundingBoxes || !vents) return null;

    return vents.map((vent, index) => {
      const bbox = ventBoundingBoxes[index];
      if (!bbox) return null;
      return (
        <group
          key={vent.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          </Subtraction>
        </group>
      );
    });
  }, [vents, ventBoundingBoxes]);

  const exhaustFanBoundingBoxGeometry = useMemo(() => {
    if (!exhaustFanBoundingBox) return null;
    return (
      <group
        position={[
          exhaustFanBoundingBox.center.x,
          exhaustFanBoundingBox.center.y,
          exhaustFanBoundingBox.center.z,
        ]}
      >
        <Subtraction>
          <boxGeometry
            args={[
              exhaustFanBoundingBox.size.x,
              exhaustFanBoundingBox.size.y,
              exhaustFanBoundingBox.size.z,
            ]}
          />
        </Subtraction>
      </group>
    );
  }, [exhaustFanBoundingBox]);

  const CsgInteriors = () => {
    switch (supplier) {
      case SUPPLIER_SLUGS.CUSTOM_CUBES:
        return (
          <CustomCubes
            interiorFinishes={interiorFinishes}
            supplier={supplier}
            size={size}
            selectedContainerHeight={selectedContainerHeight}
            adjustForX={adjustForX}
            adjustForY={adjustForY}
          />
        );
      case SUPPLIER_SLUGS.AT_AND_S:
        return (
          <AtAndS
            interiorFinishes={interiorFinishes}
            interiorTrim={interiorTrim}
            supplier={supplier}
            size={size}
            selectedContainerHeight={selectedContainerHeight}
            adjustForX={adjustForX}
            adjustForY={adjustForY}
          />
        );
      default:
        return null;
    }
  };

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        <CsgInteriors />
        <Base
          geometry={cRightNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cBackNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        <Base
          geometry={cLeftNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
        {doorBoundingBoxGeometries}
        {windowBoundingBoxGeometries}
        {ventBoundingBoxGeometries}
        {exhaustFanBoundingBoxGeometry}
      </Geometry>
    </mesh>
  );
}
