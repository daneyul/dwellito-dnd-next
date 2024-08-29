import { useGLTF } from '@react-three/drei';
import { SUPPLIER_SLUGS } from '../constants/names/names';

export const useExteriorGLTFModels = (supplier) => {
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    const { materials: redPaint } = useGLTF(
      `/models/${supplier}/materials/exterior/red-paint.glb`
    );
    const { materials: whitePaint } = useGLTF(
      `/models/${supplier}/materials/exterior/white-paint.glb`
    );
    const { materials: greenPaint } = useGLTF(
      `/models/${supplier}/materials/exterior/green-paint.glb`
    );
    const { materials: bluePaint } = useGLTF(
      `/models/${supplier}/materials/exterior/blue-paint.glb`
    );
    const { materials: slateGreyPaint } = useGLTF(
      `/models/${supplier}/materials/exterior/slate-grey-paint.glb`
    );
    const { materials: beigePaint } = useGLTF(
      `/models/${supplier}/materials/exterior/beige-paint.glb`
    );
    return {
      redPaint,
      whitePaint,
      greenPaint,
      bluePaint,
      slateGreyPaint,
      beigePaint,
    };
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    const { materials: safRed } = useGLTF(
      `/models/${supplier}/materials/exterior/saf-red.glb`
    );
    const { materials: keiwitYellow } = useGLTF(
      `/models/${supplier}/materials/exterior/keiwit-yellow.glb`
    );
    const { materials: nucorGreen } = useGLTF(
      `/models/${supplier}/materials/exterior/nucor-green.glb`
    );
    const { materials: slateGrey } = useGLTF(
      `/models/${supplier}/materials/exterior/slate-grey.glb`
    );
    return {
      safRed,
      keiwitYellow,
      nucorGreen,
      slateGrey,
    };
  }
};

export const getExteriorPaint = (supplier, exteriorFinish, paint) => {
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    switch (exteriorFinish.name) {
      case 'Red':
        return paint.redPaint?.[exteriorFinish.glbObject];
      case 'White':
        return paint.whitePaint?.[exteriorFinish.glbObject];
      case 'Green':
        return paint.greenPaint?.[exteriorFinish.glbObject];
      case 'Blue':
        return paint.bluePaint?.[exteriorFinish.glbObject];
      case 'Slate Grey':
        return paint.slateGreyPaint?.[exteriorFinish.glbObject];
      case 'Beige':
        return paint.beigePaint?.[exteriorFinish.glbObject];
      default:
        return null;
    }
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    switch (exteriorFinish.name) {
      case 'SAF Red (Corners Only)':
        return paint.safRed?.[exteriorFinish.glbObject];
      case 'Keiwit Yellow':
        return paint.keiwitYellow?.[exteriorFinish.glbObject];
      case 'Nucor Green':
        return paint.nucorGreen?.[exteriorFinish.glbObject];
      case 'Slate Grey':
        return paint.slateGrey?.[exteriorFinish.glbObject];
      default:
        return null;
    }
  }
  return null; // Default return if no match
};

export const useInteriorGLTFModels = (supplier) => {
  const { materials: plywoodMaterial } = useGLTF(
    `/models/${supplier}/materials/interior/plywood.glb`
  );
  const { materials: drywallMaterial } = useGLTF(
    `/models/${supplier}/materials/interior/drywall.glb`
  );
  const { materials: sprayFoamMaterial } = useGLTF(
    `/models/${supplier}/materials/interior/sprayfoam.glb`
  );

  return {
    plywoodMaterial,
    drywallMaterial,
    sprayFoamMaterial,
  };
};

export const useFlooringGLTFModels = (supplier) => {
  const { materials: echoFloor } = useGLTF(
    `/models/${supplier}/materials/flooring/echo.glb`
  );
  const { materials: timberFloor } = useGLTF(
    `/models/${supplier}/materials/flooring/timber.glb`
  );

  return {
    echoFloor,
    timberFloor,
  };
};
