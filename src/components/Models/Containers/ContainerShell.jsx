// import { useGLTF } from "@react-three/drei";
// import { useContext, useMemo } from "react";
// import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";
// import { PageDataContext } from "@/components/Content/Content";
// import { Library3dDataContext } from "@/utils/3D/3dLibraryContext";

// const ContainerShell = ({ modelPath, nodeNames }) => {
//   const { DIMENSIONS } = useContext(Library2dDataContext);
//   const { INTERIOR_FINISH_OPTIONS } = useContext(Library3dDataContext);
//   const { exteriorFinish, interiorFinish, selectedContainer, flooring } = useContext(PageDataContext);
//   const { nodes, materials } = useGLTF(modelPath);
//   const { materials: flooringMaterial } = useGLTF(`/models/materials/flooring/${flooring.fileName}.glb`);

//   // Load all paint materials
//   const { materials: redPaint } = useGLTF(`/models/materials/exterior/red-paint.glb`);
//   const { materials: whitePaint } = useGLTF(`/models/materials/exterior/white-paint.glb`);
//   const { materials: greenPaint } = useGLTF(`/models/materials/exterior/green-paint.glb`);
//   const { materials: bluePaint } = useGLTF(`/models/materials/exterior/blue-paint.glb`);
//   const { materials: slateGreyPaint } = useGLTF(`/models/materials/exterior/slate-grey-paint.glb`);

//   const exteriorPaint = useMemo(() => {
//     switch (exteriorFinish.name) {
//       case "Red":
//         return redPaint[exteriorFinish.glbObject];
//       case "White":
//         return whitePaint[exteriorFinish.glbObject];
//       case "Green":
//         return greenPaint[exteriorFinish.glbObject];
//       case "Blue":
//         return bluePaint[exteriorFinish.glbObject];
//       case "Slate Grey":
//         return slateGreyPaint[exteriorFinish.glbObject];
//       default:
//         return null;
//     }
//   }, [exteriorFinish, redPaint, whitePaint, greenPaint, bluePaint, slateGreyPaint]);

//   const adjustForX = useMemo(() => {
//     if (selectedContainer.name === `10' Custom Cube`) {
//       return -(DIMENSIONS.CONTAINER.TEN.THREE_D.WIDTH / 2);
//     } else if (selectedContainer.name === `20' Custom Cube`) {
//       return -(DIMENSIONS.CONTAINER.TWENTY.THREE_D.WIDTH / 2);
//     } else if (selectedContainer.name === `40' Custom Cube`) {
//       return -(DIMENSIONS.CONTAINER.FORTY.THREE_D.WIDTH / 2);
//     }
//   }, [selectedContainer.name, DIMENSIONS]);

//   const adjustForY = useMemo(() => {
//     if (selectedContainer.name === `10' Custom Cube`) {
//       return DIMENSIONS.CONTAINER.TEN.THREE_D.DEPTH / 2;
//     } else if (selectedContainer.name === `20' Custom Cube`) {
//       return DIMENSIONS.CONTAINER.TWENTY.THREE_D.DEPTH / 2;
//     } else if (selectedContainer.name === `40' Custom Cube`) {
//       return DIMENSIONS.CONTAINER.FORTY.THREE_D.DEPTH / 2;
//     }
//   }, [selectedContainer.name, DIMENSIONS]);

//   // ... (move the Plywood, Drywall, Lighting, and Flooring components here)

//   return (
//     <group scale={[10, 10, 10]} position={[adjustForX, 0, adjustForY]}>
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes[nodeNames.exteriorRearTop].geometry}
//         material={exteriorPaint}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes[nodeNames.exteriorBottom].geometry}
//         material={exteriorPaint}
//       />
//       <Lighting />
//       <Flooring />
//       <Plywood />
//       <Drywall />
//     </group>
//   );
// };

// export default ContainerShell;