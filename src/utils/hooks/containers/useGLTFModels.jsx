/* eslint-disable react-hooks/rules-of-hooks */
import { EXTERIORS, INTERIOR_FINISH_NAMES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export const useExteriorMaterial = (supplier, exteriorFinish) => {
  const materialPaths = {
    [SUPPLIER_SLUGS.CUSTOM_CUBES]: {
      [EXTERIORS.RED]: `/models/${supplier}/materials/exterior/red-paint.glb`,
      [EXTERIORS.WHITE]: `/models/${supplier}/materials/exterior/white-paint.glb`,
      [EXTERIORS.GREEN]: `/models/${supplier}/materials/exterior/green-paint.glb`,
      [EXTERIORS.BLUE]: `/models/${supplier}/materials/exterior/blue-paint.glb`,
      [EXTERIORS.SLATE_GREY]: `/models/${supplier}/materials/exterior/slate-grey-paint.glb`,
      [EXTERIORS.BEIGE]: `/models/${supplier}/materials/exterior/beige-paint.glb`,
    },
    [SUPPLIER_SLUGS.AT_AND_S]: {
      [EXTERIORS.SAF_RED]: `/models/${supplier}/materials/exterior/saf-red.glb`,
      [EXTERIORS.WHITE]: `/models/${supplier}/materials/exterior/white.glb`,
      [EXTERIORS.LIGHT_GREY]: `/models/${supplier}/materials/exterior/lightgrey.glb`,
      [EXTERIORS.BEIGE]: `/models/${supplier}/materials/exterior/beige.glb`,
      [EXTERIORS.BLUE]: `/models/${supplier}/materials/exterior/blue.glb`,
      [EXTERIORS.GREEN]: `/models/${supplier}/materials/exterior/green.glb`,
      [EXTERIORS.STOCK]: `/models/${supplier}/materials/exterior/stock.glb`,
    },
  };

  const pathsForSupplier = materialPaths[supplier];
  if (!pathsForSupplier) return null;

  const materialPath = pathsForSupplier[exteriorFinish.name];
  if (!materialPath) return null;

  const { materials } = useGLTF(materialPath);
  return materials?.[exteriorFinish.glbObject] || null;
};

export const useInteriorMaterial = (supplier, interiorFinish) => {
  const materialPaths = {
    [SUPPLIER_SLUGS.CUSTOM_CUBES]: {
      [INTERIOR_FINISH_NAMES.PLYWOOD]: `/models/${supplier}/materials/interior/plywood.glb`,
      [INTERIOR_FINISH_NAMES.DRYWALL]: `/models/${supplier}/materials/interior/drywall.glb`,
      [INTERIOR_FINISH_NAMES.SPRAYFOAM]: `/models/${supplier}/materials/interior/sprayfoam.glb`,
    },
    [SUPPLIER_SLUGS.AT_AND_S]: {
      [INTERIOR_FINISH_NAMES.LUAN_WALL]: `/models/${supplier}/materials/interior/luan-wall.glb`,
      [INTERIOR_FINISH_NAMES.WHITE_SHIPLAP]: `/models/${supplier}/materials/interior/white-shiplap.glb`,
    },
  };

  const pathsForSupplier = materialPaths[supplier];
  if (!pathsForSupplier) return null;

  const materialPath = pathsForSupplier[interiorFinish.name];
  if (!materialPath) return null;

  const { materials } = useGLTF(materialPath);
  return materials?.[interiorFinish.glbObject] || null;
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
  }
};
