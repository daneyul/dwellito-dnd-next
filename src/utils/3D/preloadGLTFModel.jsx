import { useGLTF } from '@react-three/drei';

export const preloadGLTFModel = (modelPath) => {
  const { preload } = useGLTF;
  preload(`${modelPath}.glb`);
};

export function preloadContainerModels(size, selectedContainerHeight) {
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`);
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`);
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`);
  // useGLTF.preload(`/models/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`);
  // useGLTF.preload(`/models/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`);
  // useGLTF.preload(`/models/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`);
  // useGLTF.preload(`/models/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`);
  // useGLTF.preload(`/models/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`);
  // useGLTF.preload(`/models/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`);
  // useGLTF.preload(`/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`);
  // useGLTF.preload(`/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`);
  // useGLTF.preload(`/models/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`);
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/baseboard.glb`);
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/container-shell.glb`);
  // useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`);
  // useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-drywall.glb`);
  // useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/rear-top-sprayfoam.glb`);
  useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/ceiling-sprayfoam.glb`);
  // useGLTF.preload(`/models/container/${size}/${selectedContainerHeight}/flooring.glb`);
}