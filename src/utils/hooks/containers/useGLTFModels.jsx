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
    const { materials: white } = useGLTF(
      `/models/${supplier}/materials/exterior/white.glb`
    );
    const { materials: lightGrey } = useGLTF(
      `/models/${supplier}/materials/exterior/lightgrey.glb`
    );
    const { materials: beige } = useGLTF(
      `/models/${supplier}/materials/exterior/beige.glb`
    );
    return {
      safRed,
      white,
      lightGrey,
      beige,
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
      case 'White':
        return paint.white?.[exteriorFinish.glbObject];
      case 'Light Grey':
        return paint.lightGrey?.[exteriorFinish.glbObject];
      case 'Beige':
        return paint.beige?.[exteriorFinish.glbObject];
      default:
        return null;
    }
  }
  return null;
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
    const { materials: whiteShiplapMaterial } = useGLTF(
      `/models/${supplier}/materials/interior/white-shiplap.glb`
    );

    return {
      luanWallMaterial,
      whiteShiplapMaterial,
    };
  }
};

export const useFlooringGLTFModels = (supplier) => {
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    const { materials: echoFloor } = useGLTF(
      `/models/${supplier}/materials/flooring/echo.glb`
    );
    const { materials: timberFloor } = useGLTF(
      `/models/${supplier}/materials/flooring/timber.glb`
    );
    return {
      echoFloor,
      timberFloor
    };
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    const { materials: echoFloor } = useGLTF(
      `/models/${supplier}/materials/flooring/echo.glb`
    );
    const { materials: timberFloor } = useGLTF(
      `/models/${supplier}/materials/flooring/timber.glb`
    );
    const { materials: rubberFloor } = useGLTF(
      `/models/${supplier}/materials/flooring/rubber-coin.glb`
    );
    return {
      echoFloor,
      timberFloor,
      rubberFloor,
    };
  };
};
