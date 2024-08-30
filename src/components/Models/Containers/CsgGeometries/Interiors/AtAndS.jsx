import { Base } from "@react-three/csg";
import { useGLTF } from "@react-three/drei";

const { useInteriorGLTFModels } = require("@/utils/hooks/useGLTFModels");

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

const AtAndS = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  return (
    <>
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