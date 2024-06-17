import React, { useContext, useEffect, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import * as THREE from 'three';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { PageDataContext } from '@/components/Content/Content';
import { Library3dDataContext } from '@/utils/3D/3dLibraryContext';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  ventBoundingBoxes,
  doors,
  windows,
  vents
}) {
  const { containerData, DIMENSIONS } = useContext(Library2dDataContext);
  const {
    INTERIOR_FINISH_OPTIONS,
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
    beigePaint,
    plywoodMaterial,
    drywallMaterial
  } = useContext(Library3dDataContext);
  const {
    exteriorFinish,
    interiorFinish,
    selectedContainer,
    selectedContainerHeight,
  } = useContext(PageDataContext);

  const containerSize = () => {
    if (selectedContainer === containerData[0]) {
      return '10';
    } else if (selectedContainer === containerData[1]) {
      return '20';
    } else if (selectedContainer === containerData[2]) {
      return '40';
    }
  };

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

  const { nodes: cRightNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`
  );
  const { nodes: cBackNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`
  );
  const { nodes: cLeftNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`
  );
  const { nodes: dRightNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`
  );
  const { nodes: dLeftNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`
  );
  const { nodes: dBackNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`
  );

  const { nodes: pRightNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`
  );
  const { nodes: pLeftNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`
  );
  const { nodes: pBackNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`
  );

  const { nodes: baseboard } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/baseboard.glb`
  );

  const csg = useRef();

  const exteriorPaint = useMemo(() => {
    switch (exteriorFinish.name) {
      case 'Red':
        return redPaint[exteriorFinish.glbObject];
      case 'White':
        return whitePaint[exteriorFinish.glbObject];
      case 'Green':
        return greenPaint[exteriorFinish.glbObject];
      case 'Blue':
        return bluePaint[exteriorFinish.glbObject];
      case 'Slate Grey':
        return slateGreyPaint[exteriorFinish.glbObject];
      case 'Beige':
        return beigePaint[exteriorFinish.glbObject];
      default:
        return null;
    }
  }, [
    exteriorFinish,
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
  ]);
  
  const doorBoundingBoxGeometries = useMemo(() => {
    return doors.map((door, index) => {
      const bbox = doorBoundingBoxes[index];
      if (!bbox) return null; // Ensure bbox is defined
      return (
        <group key={door.id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
            <mesh>
              <meshStandardMaterial
                attach='material'
                color='white'
                side={THREE.DoubleSide}
              />
            </mesh>
          </Subtraction>
        </group>
      );
    });
  }, [doors, doorBoundingBoxes]);

  const windowBoundingBoxGeometries = useMemo(() => {
    return windows.map((window, index) => {
      const bbox = windowBoundingBoxes[index];
      if (!bbox) return null; // Ensure bbox is defined
      return (
        <group key={window.id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
            <mesh>
              <meshStandardMaterial
                attach='material'
                color='white'
                side={THREE.DoubleSide}
              />
            </mesh>
          </Subtraction>
        </group>
      );
    });
  }, [windows, windowBoundingBoxes]);

  const ventBoundingBoxGeometries = useMemo(() => {
    return vents.map((vent, index) => {
      const bbox = ventBoundingBoxes[index];
      if (!bbox) return null; // Ensure bbox is defined
      return (
        <group key={vent.id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
          <Subtraction>
            <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
            <mesh>
              <meshStandardMaterial
                attach='material'
                color='white'
                side={THREE.DoubleSide}
              />
            </mesh>
          </Subtraction>
        </group>
      );
    });
  }, [vents, ventBoundingBoxes]);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        <Base
          geometry={baseboard.mesh_0.geometry}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        >
          <meshStandardMaterial color='black' />
        </Base>
        {interiorFinish === INTERIOR_FINISH_OPTIONS[1] ? (
          <>
            {Object.keys(dBackNodes).map((key) => (
              <Base
                key={key}
                geometry={dBackNodes[key].geometry}
                material={drywallMaterial['Drywall_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(dRightNodes).map((key) => (
              <Base
                key={key}
                geometry={dRightNodes[key].geometry}
                material={drywallMaterial['Drywall_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(dLeftNodes).map((key) => (
              <Base
                key={key}
                geometry={dLeftNodes[key].geometry}
                material={drywallMaterial['Drywall_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
          </>
        ) : null}
        {interiorFinish === INTERIOR_FINISH_OPTIONS[0] ? (
          <>
            {Object.keys(pBackNodes).map((key) => (
              <Base
                key={key}
                geometry={pBackNodes[key].geometry}
                material={plywoodMaterial['Plywood_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(pRightNodes).map((key) => (
              <Base
                key={key}
                geometry={pRightNodes[key].geometry}
                material={plywoodMaterial['Plywood_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(pLeftNodes).map((key) => (
              <Base
                key={key}
                geometry={pLeftNodes[key].geometry}
                material={plywoodMaterial['Plywood_v2']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
          </>
        ) : null}
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
      </Geometry>
    </mesh>
  );
}
