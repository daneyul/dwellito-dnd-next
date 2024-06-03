import React, { useContext, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Base, Geometry, Subtraction } from "@react-three/csg";
import * as THREE from "three";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
import { PageDataContext } from "@/components/Content/Content";

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  ventBoundingBoxes,
}) {
  const { INTERIOR_OPTIONS, containerData, DIMENSIONS } = useContext(Library2dDataContext);
  const { color, interior, selectedContainer } = useContext(PageDataContext);

  const containerSize = () => {
    if (selectedContainer === containerData[0]) {
      return "10"
    } else if (selectedContainer === containerData[1]) {
      return "20"
    } else if (selectedContainer === containerData[2]) {
      return "40"
    }
  }

  const size = containerSize();

  const adjustForX = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2)
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2)
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2)
    }
  }
  const adjustForY = () => {
    if (selectedContainer.name === `10' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2
    } else if (selectedContainer.name === `20' Custom Cube`) {
      return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2
    } else if (selectedContainer.name === `40' Custom Cube`) {
      return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2
    }
  }

  const { materials: exteriorMaterials } = useGLTF(
    `/models/materials/${color.material}.glb`
  );

  const exteriorPaint = exteriorMaterials[color.obj];

  const { materials: plywoodMaterial } = useGLTF(
    "/models/materials/plywood.glb"
  );
  const { materials: drywallMaterial } = useGLTF(
    "/models/materials/drywall.glb"
  );
  const { nodes: cRightNodes } = useGLTF(
    `/models/container/${size}/exterior-right.glb`
  );
  const { nodes: cBackNodes } = useGLTF(
    `/models/container/${size}/exterior-back.glb`
  );
  const { nodes: cLeftNodes } = useGLTF(
    `/models/container/${size}/exterior-left.glb`
  );
  const { nodes: dRightNodes } = useGLTF(
    `/models/drywall/${size}/drywall-right.glb`
  );
  const { nodes: dLeftNodes } = useGLTF(`/models/drywall/${size}/drywall-left.glb`);
  const { nodes: dBackNodes } = useGLTF(`/models/drywall/${size}/drywall-back.glb`);

  const { nodes: pRightNodes } = useGLTF(
    `/models/plywood/${size}/plywood-right.glb`
  );
  const { nodes: pLeftNodes } = useGLTF(`/models/plywood/${size}/plywood-left.glb`);
  const { nodes: pBackNodes } = useGLTF(`/models/plywood/${size}/plywood-back.glb`);

  const csg = useRef();

  const doorBoundingBoxGeometries = useMemo(() => {
    return Object.entries(doorBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [doorBoundingBoxes]);

  const windowBoundingBoxGeometries = useMemo(() => {
    return Object.entries(windowBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [windowBoundingBoxes]);

  const ventBoundingBoxGeometries = useMemo(() => {
    return Object.entries(ventBoundingBoxes).map(([id, bbox]) => (
      <group key={id} position={[bbox.center.x, bbox.center.y, bbox.center.z]}>
        <Subtraction>
          {/* Geometry with bounding box size */}
          <boxGeometry args={[bbox.size.x, bbox.size.y, bbox.size.z]} />
          <mesh>
            {/* Material applied to a mesh, not directly in Subtraction */}
            <meshStandardMaterial
              attach="material"
              color="white"
              side={THREE.DoubleSide}
            />
          </mesh>
        </Subtraction>
      </group>
    ));
  }, [ventBoundingBoxes]);
  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        {interior === INTERIOR_OPTIONS[1] ? (
          <>
            {Object.keys(dBackNodes).map((key) => (
              <Base
                key={key}
                geometry={dBackNodes[key].geometry}
                material={drywallMaterial["White_Drywall_Wall.002"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
            {Object.keys(dRightNodes).map((key) => (
              <Base
                key={key}
                geometry={dRightNodes[key].geometry}
                material={drywallMaterial["White_Drywall_Wall.002"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
            {Object.keys(dLeftNodes).map((key) => (
              <Base
                key={key}
                geometry={dLeftNodes[key].geometry}
                material={drywallMaterial["White_Drywall_Wall.002"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
          </>
        ) : null}
        {interior === INTERIOR_OPTIONS[0] ? (
          <>
            {Object.keys(pBackNodes).map((key) => (
              <Base
                key={key}
                geometry={pBackNodes[key].geometry}
                material={plywoodMaterial["Plywood"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
            {Object.keys(pRightNodes).map((key) => (
              <Base
                key={key}
                geometry={pRightNodes[key].geometry}
                material={plywoodMaterial["Plywood"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
            {Object.keys(pLeftNodes).map((key) => (
              <Base
                key={key}
                geometry={pLeftNodes[key].geometry}
                material={plywoodMaterial["Plywood"]}
                scale={10}
                position={[adjustForX(), 0, adjustForY()]}
              />
            ))}
          </>
        ) : null}
        <Base
          geometry={cRightNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX(), 0, adjustForY()]}
        />
        <Base
          geometry={cBackNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX(), 0, adjustForY()]}
        />
        <Base
          geometry={cLeftNodes.mesh_0.geometry}
          material={exteriorPaint}
          scale={10}
          position={[adjustForX(), 0, adjustForY()]}
        />
        {doorBoundingBoxGeometries}
        {windowBoundingBoxGeometries}
        {ventBoundingBoxGeometries}
      </Geometry>
    </mesh>
  );
}
