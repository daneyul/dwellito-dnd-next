/* eslint-disable react-hooks/rules-of-hooks */
import {
  INTERIOR_FINISH_NAMES,
  INTERIOR_TRIM_NAMES,
} from '@/utils/constants/names/names';
import { useInteriorMaterial, useInteriorTrimMaterial } from '@/utils/hooks/containers/useGLTFModels';
import { Base } from '@react-three/csg';
import { useGLTF } from '@react-three/drei';

const WhiteShiplap = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsWhiteShiplap) {
    const whiteShiplapMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.WHITE_SHIPLAP,
      glbObject: 'Barn Wood Wall Panels',
    });
    const rightNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/right.glb`
    ).nodes;
    const leftNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/left.glb`
    ).nodes;
    const backNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/back.glb`
    ).nodes;
    return (
      <>
        {Object.keys(rightNodes).map((key) => (
          <Base
            key={key}
            geometry={rightNodes[key].geometry}
            material={whiteShiplapMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={whiteShiplapMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={whiteShiplapMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
      </>
    );
  }
};

const LuanWall = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsLuanWall) {
    const luanWallMaterial = useInteriorMaterial(supplier, {
      name: INTERIOR_FINISH_NAMES.LUAN_WALL,
      glbObject: 'Luan Wall Panels',
    });
    const rightNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/right.glb`
    ).nodes;
    const leftNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/left.glb`
    ).nodes;
    const backNodes = useGLTF(
      `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/back.glb`
    ).nodes;
    return (
      <>
        {Object.keys(rightNodes).map((key) => (
          <Base
            key={key}
            geometry={rightNodes[key].geometry}
            material={luanWallMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={luanWallMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={luanWallMaterial}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
      </>
    );
  }
};

const BaseBoard = ({
  interiorTrim,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorTrim) {
    const baseboard = useGLTF(
      `/models/container/${size}/${selectedContainerHeight}/baseboard.glb`
    ).nodes;
    if (interiorTrim.name === INTERIOR_TRIM_NAMES.BATTEN_ADOBE_WHITE) {
      const battenAdobeWhiteMaterial = useInteriorTrimMaterial(supplier, {
        name: INTERIOR_TRIM_NAMES.BATTEN_ADOBE_WHITE,
        glbObject: 'Red Oak Wood Grain Texture',
      });
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={battenAdobeWhiteMaterial}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    } else if (interiorTrim.name === INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK) {
      const luanBattenOakMaterial = useInteriorTrimMaterial(supplier, {
        name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK,
        glbObject: 'Red Oak Wood Grain Texture',
      });
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={luanBattenOakMaterial}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    } else if (interiorTrim.name === INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE) {
      const luanBattenWhiteMaterial = useInteriorTrimMaterial(supplier, {
        name: INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE,
        glbObject: 'Red Oak Wood Grain Texture',
      });
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={luanBattenWhiteMaterial}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    }
  } else {
    return null;
  }
};

const AtAndS = ({
  interiorFinishes,
  interiorTrim,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  return (
    <>
      <BaseBoard
        interiorTrim={interiorTrim}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
        supplier={supplier}
      />
      <WhiteShiplap
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <LuanWall
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
    </>
  );
};

export default AtAndS;
