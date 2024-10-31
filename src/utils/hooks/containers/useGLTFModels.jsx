import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

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
    const { materials: blue } = useGLTF(
      `/models/${supplier}/materials/exterior/blue.glb`
    );
    const { materials: green } = useGLTF(
      `/models/${supplier}/materials/exterior/green.glb`
    );
    const { materials: stock } = useGLTF(
      `/models/${supplier}/materials/exterior/stock.glb`
    );
    return {
      safRed,
      white,
      lightGrey,
      beige,
      blue,
      green,
      stock,
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
      case 'Blue':
        return paint.blue?.[exteriorFinish.glbObject];
      case 'Green':
        return paint.green?.[exteriorFinish.glbObject];
      case 'Stock':
        return paint.stock?.[exteriorFinish.glbObject];
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
    const rubberCoinFloor = useLoader(
      THREE.TextureLoader,
      `/models/${supplier}/materials/flooring/rubber-coin.jpg`
    );

    rubberCoinFloor.wrapS = THREE.RepeatWrapping;
    rubberCoinFloor.wrapT = THREE.RepeatWrapping;
    rubberCoinFloor.repeat.set(2.5, 2.5);
    rubberCoinFloor.colorSpace = THREE.SRGBColorSpace;
    
    return {
      echoFloor,
      timberFloor,
      rubberCoinFloor,
    };
  };
};
