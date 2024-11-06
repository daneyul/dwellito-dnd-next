import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export function preloadAllModels({ supplier, size, selectedContainerHeight }) {
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/ceiling-sprayfoam.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-sprayfoam.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-drywall.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/flooring.glb`
  );
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    // Preload exterior models
    useGLTF.preload(`/models/${supplier}/materials/exterior/red-paint.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/white-paint.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/green-paint.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/blue-paint.glb`);
    useGLTF.preload(
      `/models/${supplier}/materials/exterior/slate-grey-paint.glb`
    );
    useGLTF.preload(`/models/${supplier}/materials/exterior/beige-paint.glb`);

    // Preload interior models
    useGLTF.preload(`/models/${supplier}/materials/interior/plywood.glb`);
    useGLTF.preload(`/models/${supplier}/materials/interior/drywall.glb`);
    useGLTF.preload(`/models/${supplier}/materials/interior/sprayfoam.glb`);

    // Preload flooring models
    useGLTF.preload(`/models/${supplier}/materials/flooring/echo.glb`);
    useGLTF.preload(`/models/${supplier}/materials/flooring/timber.glb`);
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    // Preload exterior models
    useGLTF.preload(`/models/${supplier}/materials/exterior/saf-red.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/white.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/lightgrey.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/beige.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/blue.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/green.glb`);
    useGLTF.preload(`/models/${supplier}/materials/exterior/stock.glb`);

    // Preload interior models
    useGLTF.preload(`/models/${supplier}/materials/interior/luan-wall.glb`);
    useGLTF.preload(`/models/${supplier}/materials/interior/white-shiplap.glb`);

    // Preload flooring models
    useGLTF.preload(`/models/${supplier}/materials/flooring/echo.glb`);
    useGLTF.preload(`/models/${supplier}/materials/flooring/timber.glb`);

    // Preload texture flooring for rubber coin floor
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      `/models/${supplier}/materials/flooring/rubber-coin.jpg`,
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(2.5, 2.5);
        texture.colorSpace = THREE.SRGBColorSpace;
      }
    );
  }
}
