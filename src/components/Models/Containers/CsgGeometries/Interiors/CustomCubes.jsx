import { useInteriorGLTFModels } from '@/utils/hooks/useGLTFModels';
import { Base } from '@react-three/csg';
import { useGLTF } from '@react-three/drei';

const Drywall = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsDrywall) {
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

const Plywood = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsPlywood) {
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

const Sprayfoam = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (interiorFinishes.interiorIsSprayFoamCeilingWalls) {
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

const BaseBoard = ({
  interiorFinishes,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  if (
    interiorFinishes.interiorIsSprayFoamCeiling ||
    interiorFinishes.interiorIsSprayFoamCeilingWalls
  ) {
    return null;
  } else if (
    interiorFinishes.interiorIsDrywall ||
    interiorFinishes.interiorIsPlywood
  ) {
    const baseboard = useGLTF(
      `/models/container/${size}/${selectedContainerHeight}/baseboard.glb`
    ).nodes;
    const baseboardMaterial = useGLTF(
      `/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`
    ).materials;
    return (
      <Base
        geometry={baseboard.mesh_0.geometry}
        material={baseboardMaterial.Black_Rubber_01}
        scale={10}
        position={[adjustForX, 0, adjustForY]}
      />
    );
  } else {
    return null;
  }
};

const CustomCubes = ({
  interiorFinishes,
  supplier,
  size,
  selectedContainerHeight,
  adjustForX,
  adjustForY,
}) => {
  return (
    <>
      <BaseBoard
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <Drywall
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <Plywood
        interiorFinishes={interiorFinishes}
        supplier={supplier}
        size={size}
        selectedContainerHeight={selectedContainerHeight}
        adjustForX={adjustForX}
        adjustForY={adjustForY}
      />
      <Sprayfoam
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

export default CustomCubes;
