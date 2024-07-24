import { useGLTF } from '@react-three/drei';

export const useExteriorGLTFModels = (supplier) => {
  const { materials: redPaint } = useGLTF(`/models/${supplier}/materials/exterior/red-paint.glb`);
  const { materials: whitePaint } = useGLTF(`/models/${supplier}/materials/exterior/white-paint.glb`);
  const { materials: greenPaint } = useGLTF(`/models/${supplier}/materials/exterior/green-paint.glb`);
  const { materials: bluePaint } = useGLTF(`/models/${supplier}/materials/exterior/blue-paint.glb`);
  const { materials: slateGreyPaint } = useGLTF(`/models/${supplier}/materials/exterior/slate-grey-paint.glb`);
  const { materials: beigePaint } = useGLTF(`/models/${supplier}/materials/exterior/beige-paint.glb`);

  return {
    redPaint,
    whitePaint,
    greenPaint,
    bluePaint,
    slateGreyPaint,
    beigePaint
  };
};

export const useInteriorGLTFModels = (supplier) => {
  const { materials: plywoodMaterial } = useGLTF(`/models/${supplier}/materials/interior/plywood.glb`);
  const { materials: drywallMaterial } = useGLTF(`/models/${supplier}/materials/interior/drywall.glb`);
  const { materials: sprayFoamMaterial } = useGLTF(`/models/${supplier}/materials/interior/sprayfoam.glb`);

  return {
    plywoodMaterial,
    drywallMaterial,
    sprayFoamMaterial
  };
};

export const useFlooringGLTFModels = (supplier) => {
  const { materials: echoFloor } = useGLTF(`/models/${supplier}/materials/flooring/echo.glb`);
  const { materials: timberFloor } = useGLTF(`/models/${supplier}/materials/flooring/timber.glb`);

  return {
    echoFloor,
    timberFloor
  };
};