import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import * as THREE from 'three';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { PageDataContext } from '@/components/Content/Content';
import useGLTFModels from '@/utils/hooks/useGLTFModels';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  ventBoundingBoxes,
  exhaustFanBoundingBox,
  doors,
  windows,
  vents,
}) {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const {
    exteriorFinish,
    interiorIsPlywood,
    interiorIsDrywall,
    interiorIsSprayFoamCeiling,
    interiorIsSprayFoamCeilingWalls,
    selectedContainer,
    selectedContainerHeight,
    containerSize,
  } = useContext(PageDataContext);

  const {
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
    beigePaint,
    plywoodMaterial,
    drywallMaterial,
    sprayFoamMaterial,
  } = useGLTFModels();

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

  // Container nodes
  const { nodes: cRightNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`
  );
  const { nodes: cBackNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`
  );
  const { nodes: cLeftNodes } = useGLTF(
    `/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`
  );

  // Drywall nodes
  const { nodes: dRightNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`
  );
  const { nodes: dLeftNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`
  );
  const { nodes: dBackNodes } = useGLTF(
    `/models/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`
  );

  // Plywood nodes
  const { nodes: pRightNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`
  );
  const { nodes: pLeftNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`
  );
  const { nodes: pBackNodes } = useGLTF(
    `/models/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`
  );

  // Sprayfoam nodes
  const { nodes: sRightNodes } = useGLTF(
    `/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`
  );
  const { nodes: sLeftNodes } = useGLTF(
    `/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`
  );
  const { nodes: sBackNodes } = useGLTF(
    `/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`
  );

  // Baseboard nodes
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
        <group
          key={door.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
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
        <group
          key={window.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
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
        <group
          key={vent.id}
          position={[bbox.center.x, bbox.center.y, bbox.center.z]}
        >
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

  const exhaustFanBoundingBoxGeometry = useMemo(() => {
    if (!exhaustFanBoundingBox) return null; // Ensure bbox is defined
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
  }, [exhaustFanBoundingBox]);

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        {interiorIsSprayFoamCeiling ||
        interiorIsSprayFoamCeilingWalls ? null : (
          <Base
            geometry={baseboard.mesh_0.geometry}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          >
            <meshStandardMaterial color='black' />
          </Base>
        )}
        {interiorIsDrywall ? (
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
        {interiorIsPlywood ? (
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
        {interiorIsSprayFoamCeilingWalls ? (
          <>
            {Object.keys(sBackNodes).map((key) => (
              <Base
                key={key}
                geometry={sBackNodes[key].geometry}
                material={sprayFoamMaterial['Sprayfoam']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(sRightNodes).map((key) => (
              <Base
                key={key}
                geometry={sRightNodes[key].geometry}
                material={sprayFoamMaterial['Sprayfoam']}
                scale={10}
                position={[adjustForX, 0, adjustForY]}
              />
            ))}
            {Object.keys(sLeftNodes).map((key) => (
              <Base
                key={key}
                geometry={sLeftNodes[key].geometry}
                material={sprayFoamMaterial['Sprayfoam']}
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
        {exhaustFanBoundingBoxGeometry}
      </Geometry>
    </mesh>
  );
}
