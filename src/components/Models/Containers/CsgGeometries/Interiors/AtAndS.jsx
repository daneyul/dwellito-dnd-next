import { INTERIOR_TRIM_NAMES } from "@/utils/constants/names/names";
import { Base } from "@react-three/csg";
import { useGLTF } from "@react-three/drei";
import { use } from "react";

const { useInteriorGLTFModels, useInteriorTrimGLTFModels } = require("@/utils/hooks/useGLTFModels");

const CharredWood = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsCharredWood) {
    const { charredWoodMaterial } = useInteriorGLTFModels(supplier);
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
            material={charredWoodMaterial['Ash_Grey']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={charredWoodMaterial['Ash_Grey']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={charredWoodMaterial['Ash_Grey']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
      </>
    );
  }
};

const BarnWood = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsBarnWood) {
    const { barnWoodMaterial } = useInteriorGLTFModels(supplier);
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
            material={barnWoodMaterial['Barn Wood Wall Panels']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={barnWoodMaterial['Barn Wood Wall Panels']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={barnWoodMaterial['Barn Wood Wall Panels']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
      </>
    );
  }
};

const MdfPanel = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsMdfPanel) {
    const { mdfPanelMaterial } = useInteriorGLTFModels(supplier);
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
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={mdfPanelMaterial['Authentic Pallet MDF Panel']}
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
    const { luanWallMaterial } = useInteriorGLTFModels(supplier);
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
            material={luanWallMaterial['Luan Wall Panels']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(leftNodes).map((key) => (
          <Base
            key={key}
            geometry={leftNodes[key].geometry}
            material={luanWallMaterial['Luan Wall Panels']}
            scale={10}
            position={[adjustForX, 0, adjustForY]}
          />
        ))}
        {Object.keys(backNodes).map((key) => (
          <Base
            key={key}
            geometry={backNodes[key].geometry}
            material={luanWallMaterial['Luan Wall Panels']}
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
      const { battenAdobeWhiteMaterial } = useInteriorTrimGLTFModels(supplier);
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={battenAdobeWhiteMaterial["Red Oak Wood Grain Texture"]}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    } else if (interiorTrim.name === INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK) {
      const { luanBattenOakMaterial } = useInteriorTrimGLTFModels(supplier);
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={luanBattenOakMaterial["Red Oak Wood Grain Texture"]}
          scale={10}
          position={[adjustForX, 0, adjustForY]}
        />
      );
    } else if (interiorTrim.name === INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE) {
      const { luanBattenWhiteMaterial } = useInteriorTrimGLTFModels(supplier);
      return (
        <Base
          geometry={baseboard.mesh_0.geometry}
          material={luanBattenWhiteMaterial["Red Oak Wood Grain Texture"]}
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
      <CharredWood
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <BarnWood
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <MdfPanel
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