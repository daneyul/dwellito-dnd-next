import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export const getExteriorPaint = (supplier, exteriorFinish) => {
  if (supplier === SUPPLIER_SLUGS.COMPACT_COTTAGES) {
    const path = `/models/${supplier}/materials/exterior/`;
    const loader = new THREE.TextureLoader();

    let texture;

    switch (exteriorFinish.name) {
      case 'Black':
        texture = loader.load(path + 'black.jpg');
        break;
      case 'White':
        texture = loader.load(path + 'white.jpg');
        break;
      case 'Grey':
        texture = loader.load(path + 'grey.jpg');
        break;
      case 'Dark Blue':
        texture = loader.load(path + 'darkblue.jpg');
        break;
      default:
        return null;
    }

    // Apply wrapping and repeat settings
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(0.05, 0.05); // Adjust as needed

    return texture;
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
