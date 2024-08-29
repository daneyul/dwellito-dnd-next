import { useGLTF } from '@react-three/drei';

export const preloadGLTFModel = (modelPath) => {
  const { preload } = useGLTF;
  preload(`${modelPath}.glb`);
};

export function preloadContainerModels(
  size,
  selectedContainerHeight,
  supplier
) {
  useGLTF.preload(
    `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`
  );
  useGLTF.preload(
    `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-drywall.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/rear-top-sprayfoam.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/ceiling-sprayfoam.glb`
  );
  useGLTF.preload(
    `/models/container/${size}/${selectedContainerHeight}/flooring.glb`
  );
  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    useGLTF.preload(`/models/custom-cubes/materials/exterior/red-paint.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/exterior/white-paint.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/exterior/green-paint.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/exterior/blue-paint.glb`);
    useGLTF.preload(
      `/models/custom-cubes/materials/exterior/slate-grey-paint.glb`
    );

    useGLTF.preload(`/models/custom-cubes/materials/interior/plywood.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/interior/drywall.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/interior/sprayfoam.glb`);

    useGLTF.preload(`/models/custom-cubes/materials/flooring/echo.glb`);
    useGLTF.preload(`/models/custom-cubes/materials/flooring/timber.glb`);
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    useGLTF.preload(`/models/at-and-s/materials/exterior/saf-red.glb`);
    useGLTF.preload(`/models/at-and-s/materials/exterior/keiwit-yellow.glb`);
    useGLTF.preload(`/models/at-and-s/materials/exterior/nucor-green.glb`);
    useGLTF.preload(`/models/at-and-s/materials/exterior/slate-grey.glb`);
  }
}
