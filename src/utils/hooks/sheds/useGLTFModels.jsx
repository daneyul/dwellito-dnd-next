import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';

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
  } else if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
    const { materials: blackPaint } = useGLTF(
      `/models/${supplier}/materials/exterior/black.glb`
    );
    const { materials: whitePaint } = useGLTF(
      `/models/${supplier}/materials/exterior/white.glb`
    );
    const { materials: greyPaint } = useGLTF(
      `/models/${supplier}/materials/exterior/grey.glb`
    );
    const { materials: darkbluePaint } = useGLTF(
      `/models/${supplier}/materials/exterior/darkblue.glb`
    );
    return {
      blackPaint,
      whitePaint,
      greyPaint,
      darkbluePaint,
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
  } else if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
    switch (exteriorFinish.name) {
      case 'Black':
        return paint.blackPaint?.[exteriorFinish.glbObject];
      case 'White':
        return paint.whitePaint?.[exteriorFinish.glbObject];
      case 'Grey':
        return paint.greyPaint?.[exteriorFinish.glbObject];
      case 'Dark Blue':
        return paint.darkbluePaint?.[exteriorFinish.glbObject];
      default:
        return null;
    }
  }
};

export const useInteriorGLTFModels = (supplier) => {
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
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
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    const { materials: luanWallMaterial } = useGLTF(
      `/models/${supplier}/materials/interior/luan-wall.glb`
    );
    const { materials: noneMaterial } = useGLTF(
      `/models/${supplier}/materials/interior/none.glb`
    );
    return {
      luanWallMaterial,
    };
  }
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