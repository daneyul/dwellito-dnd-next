/* eslint-disable no-undef */
import { SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';

export async function preloadAllModels({ supplier, size, selectedContainerHeight }) {
  const promises = [
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/baseboard.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/ceiling-sprayfoam.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-sprayfoam.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-drywall.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`),
    useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/flooring.glb`),
    useGLTF.preload(`/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`),
    useGLTF.preload(`/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`),
    useGLTF.preload(`/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`),
    useGLTF.preload(`/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`),
    useGLTF.preload(`/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`),
    useGLTF.preload(`/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`),
    useGLTF.preload(`/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`),
    useGLTF.preload(`/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`),
    useGLTF.preload(`/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`),
  ];

  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    promises.push(
      useGLTF.preload(`/models/${supplier}/materials/interior/plywood.glb`),
      useGLTF.preload(`/models/${supplier}/materials/interior/drywall.glb`),
      useGLTF.preload(`/models/${supplier}/materials/interior/sprayfoam.glb`),
    );
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    promises.push(
      useGLTF.preload(`/models/${supplier}/materials/interior/luan-wall.glb`),
      useGLTF.preload(`/models/${supplier}/materials/interior/white-shiplap.glb`),
    );
  }

  await Promise.all(promises);
}
