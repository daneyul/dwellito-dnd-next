import { useGLTF } from '@react-three/drei';

const useGLTFModels = () => {
  const redPaint = useGLTF('/models/materials/exterior/red-paint.glb');
  const whitePaint = useGLTF('/models/materials/exterior/white-paint.glb');
  const greenPaint = useGLTF('/models/materials/exterior/green-paint.glb');
  const bluePaint = useGLTF('/models/materials/exterior/blue-paint.glb');
  const slateGreyPaint = useGLTF('/models/materials/exterior/slate-grey-paint.glb');
  const beigePaint = useGLTF('/models/materials/exterior/beige-paint.glb');

  const plywoodMaterial = useGLTF('/models/materials/interior/plywood.glb');
  const drywallMaterial = useGLTF('/models/materials/interior/drywall.glb');
  const sprayFoamMaterial = useGLTF('/models/materials/interior/sprayfoam.glb');

  const echoFloor = useGLTF('/models/materials/flooring/echo.glb');
  const timberFloor = useGLTF('/models/materials/flooring/timber.glb');

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