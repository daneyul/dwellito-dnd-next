/* eslint-disable react-hooks/rules-of-hooks */
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

export const useExteriorPaint = (supplier, exteriorFinish) => {
  if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
    const path = `/models/${supplier}/materials/exterior/`;

    const textureMap = {
      'Black': `${path}black.jpg`,
      'White': `${path}white.jpg`,
      'Grey': `${path}grey.jpg`,
      'Dark Blue': `${path}darkblue.jpg`,
      'Iron Ore': `${path}ironore.jpg`,
      'Oyster Bay': `${path}oysterbay.jpg`,
      'Sea Serpent': `${path}seaserpent.jpg`,
      'Worldly Gray': `${path}worldlygray.jpg`,
    };

    const textureURL = textureMap[exteriorFinish.name];

    if (!textureURL) {
      return null;
    }

    const texture = useLoader(THREE.TextureLoader, textureURL);

    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.05, 0.05); // Texture scale

    return texture;
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
    const { materials: noneMaterial } = useGLTF(
      `/models/${supplier}/materials/interior/none.glb`
    );
    return {
      luanWallMaterial,
      noneMaterial
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
