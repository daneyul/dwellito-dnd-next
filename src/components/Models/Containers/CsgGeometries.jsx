import React, { useContext, useMemo, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Base, Geometry, Subtraction } from '@react-three/csg';
import { PageDataContext } from '@/components/Content/Content';
import { useInteriorGLTFModels } from '@/utils/hooks/useGLTFModels';
import { DIMENSIONS } from '@/utils/constants/dimensions/dimensions';

export function CsgGeometries({
  doorBoundingBoxes,
  windowBoundingBoxes,
  ventBoundingBoxes,
  exhaustFanBoundingBox,
  doors,
  windows,
  vents,
  redPaint,
  whitePaint,
  greenPaint,
  bluePaint,
  slateGreyPaint,
  beigePaint,
}) {
  const {
    exteriorFinish,
    interiorIsPlywood,
    interiorIsDrywall,
    interiorIsSprayFoamCeiling,
    interiorIsSprayFoamCeilingWalls,
    selectedContainer,
    selectedContainerHeight,
    containerSize,
    supplier
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
        </Subtraction>
      </group>
    );
  }, [exhaustFanBoundingBox]);

  const Drywall = () => {
    if (interiorIsDrywall) {
      const { drywallMaterial } = useInteriorGLTFModels(supplier);
      const dRightNodes = useGLTF(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`
      ).nodes;
      const dLeftNodes = useGLTF(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`
      ).nodes;
      const dBackNodes = useGLTF(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`
      ).nodes;
      return (
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
      );
    } else {
      return null;
    }
  };

  const Plywood = () => {
    if (interiorIsPlywood) {
      const { plywoodMaterial } = useInteriorGLTFModels(supplier);
      const pRightNodes = useGLTF(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`
      ).nodes;
      const pLeftNodes = useGLTF(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`
      ).nodes;
      const pBackNodes = useGLTF(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`
      ).nodes;
      return (
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
      );
    } else {
      return null;
    }
  };

  const Sprayfoam = () => {
    if (interiorIsSprayFoamCeilingWalls) {
      const { sprayFoamMaterial } = useInteriorGLTFModels(supplier);
      const sRightNodes = useGLTF(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`
      ).nodes;
      const sLeftNodes = useGLTF(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`
      ).nodes;
      const sBackNodes = useGLTF(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`
      ).nodes;
      return (
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
      );
    } else {
      return null;
    }
  };

  const BaseBoard = () => {
    if (interiorIsSprayFoamCeiling || interiorIsSprayFoamCeilingWalls) {
      return null;
    } else if (interiorIsDrywall || interiorIsPlywood) {
      const baseboard = useGLTF(
        `/models/container/${size}/${selectedContainerHeight}/baseboard.glb`
      ).nodes;
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <mesh receiveShadow castShadow>
      <Geometry ref={csg} useGroups>
        <BaseBoard />
        <Drywall />
        <Plywood />
        <Sprayfoam />
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
