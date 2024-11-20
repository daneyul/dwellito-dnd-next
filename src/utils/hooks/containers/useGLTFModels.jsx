/* eslint-disable react-hooks/rules-of-hooks */
import { EXTERIORS, FLOORING_NAMES, INTERIOR_FINISH_NAMES, INTERIOR_TRIM_NAMES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
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

export const useInteriorTrimMaterial = (supplier, interiorTrim) => {
  const trimMaterialPaths = {
    [SUPPLIER_SLUGS.AT_AND_S]: {
      [INTERIOR_TRIM_NAMES.BATTEN_ADOBE_WHITE]: `/models/${supplier}/materials/interior-trim/batten-adobe-white.glb`,
      [INTERIOR_TRIM_NAMES.LUAN_BATTEN_OAK]: `/models/${supplier}/materials/interior-trim/luan-batten-oak.glb`,
      [INTERIOR_TRIM_NAMES.LUAN_BATTEN_WHITE]: `/models/${supplier}/materials/interior-trim/luan-batten-white.glb`,
    },
  };

  const pathsForSupplier = trimMaterialPaths[supplier];
  if (!pathsForSupplier) return null;

  const materialPath = pathsForSupplier[interiorTrim.name];
  if (!materialPath) return null;

  const { materials } = useGLTF(materialPath);
  return materials?.[interiorTrim.glbObject] || null;
};

export const useFlooringMaterial = (supplier, flooring) => {
  const flooringMaterialPaths = {
    [SUPPLIER_SLUGS.CUSTOM_CUBES]: {
      [FLOORING_NAMES.ECHO]: `/models/${supplier}/materials/flooring/echo.glb`,
      [FLOORING_NAMES.TIMBER]: `/models/${supplier}/materials/flooring/timber.glb`,
    },
    [SUPPLIER_SLUGS.AT_AND_S]: {
      [FLOORING_NAMES.ECHO]: `/models/${supplier}/materials/flooring/echo.glb`,
      [FLOORING_NAMES.TIMBER]: `/models/${supplier}/materials/flooring/timber.glb`,
      [FLOORING_NAMES.RUBBER_COIN]: `/models/${supplier}/materials/flooring/rubber-coin.jpg`, // Texture for RubberCoin
    },
  };

  const pathsForSupplier = flooringMaterialPaths[supplier];
  if (!pathsForSupplier) return null;

  const materialPath = pathsForSupplier[flooring.name];
  if (!materialPath) return null;

  if (flooring.name === FLOORING_NAMES.RUBBER_COIN) {
    const texture = useLoader(THREE.TextureLoader, materialPath);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2.5, 2.5);
    texture.colorSpace = THREE.SRGBColorSpace;

    return new THREE.MeshStandardMaterial({ map: texture });
  }

  const { materials } = useGLTF(materialPath);
  return materials?.[flooring.glbObject] || null;
};
