import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';

export const useExteriorGLTFModels = (supplier) => {
  if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
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
  if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
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
