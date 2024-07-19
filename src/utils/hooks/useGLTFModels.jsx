import { useGLTF } from '@react-three/drei';

const useGLTFModels = () => {
  const { materials: redPaint }= useGLTF('/models/materials/exterior/red-paint.glb');
  const { materials: whitePaint }= useGLTF('/models/materials/exterior/white-paint.glb');
  const { materials: greenPaint }= useGLTF('/models/materials/exterior/green-paint.glb');
  const { materials: bluePaint }= useGLTF('/models/materials/exterior/blue-paint.glb');
  const { materials: slateGreyPaint }= useGLTF('/models/materials/exterior/slate-grey-paint.glb');
  const { materials: beigePaint }= useGLTF('/models/materials/exterior/beige-paint.glb');

  const { materials: plywoodMaterial }= useGLTF('/models/materials/interior/plywood.glb');
  const { materials: drywallMaterial }= useGLTF('/models/materials/interior/drywall.glb');
  const { materials: sprayFoamMaterial }= useGLTF('/models/materials/interior/sprayfoam.glb');

  const { materials: echoFloor }= useGLTF('/models/materials/flooring/echo.glb');
  const { materials: timberFloor }= useGLTF('/models/materials/flooring/timber.glb');

  return {
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
    beigePaint,
    plywoodMaterial,
    drywallMaterial,
    sprayFoamMaterial,
    echoFloor,
    timberFloor
  };
};

export default useGLTFModels;
