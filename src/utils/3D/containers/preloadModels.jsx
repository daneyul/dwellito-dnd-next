/* eslint-disable no-undef */
import { componentData } from '@/utils/constants/componentData';
import { COMPONENT_TYPES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { useGLTF } from '@react-three/drei';

export async function preloadAllModels({
  supplier,
  size,
  selectedContainerHeight,
}) {
  const promises = [
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/baseboard.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/exterior-right.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/exterior-back.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/exterior-left.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/ceiling-sprayfoam.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/rear-top-sprayfoam.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/rear-top-drywall.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/rear-top-plywood.glb`
    ),
    useGLTF.preload(
      `/models/container/${size}/${selectedContainerHeight}/flooring.glb`
    ),
    useGLTF
  ];

  if (supplier === SUPPLIER_SLUGS.CUSTOM_CUBES) {
    promises.push(
      useGLTF.preload(`/models/${supplier}/materials/interior/plywood.glb`),
      useGLTF.preload(`/models/${supplier}/materials/interior/drywall.glb`),
      useGLTF.preload(`/models/${supplier}/materials/interior/sprayfoam.glb`),
      useGLTF.preload(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-right.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-left.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/drywall/${size}/${selectedContainerHeight}/drywall-back.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-right.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-left.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plywood/${size}/${selectedContainerHeight}/plywood-back.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-right.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-left.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/sprayfoam/${size}/${selectedContainerHeight}/sprayfoam-back.glb`
      ),
      useGLTF.preload(`/models/${supplier}/materials/exterior/red-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/white-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/green-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/blue-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/slate-grey-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/beige-paint.glb`),
      useGLTF.preload(`/models/${supplier}/materials/flooring/echo.glb`),
      useGLTF.preload(`/models/${supplier}/materials/flooring/timber.glb`),
    );
  } else if (supplier === SUPPLIER_SLUGS.AT_AND_S) {
    promises.push(
      useGLTF.preload(`/models/${supplier}/materials/interior/luan-wall.glb`),
      useGLTF.preload(
        `/models/${supplier}/materials/interior/white-shiplap.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/back.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/left.glb`
      ),
      useGLTF.preload(
        `/models/${supplier}/plain-walls/${size}/${selectedContainerHeight}/right.glb`
      ),
      useGLTF.preload(`/models/${supplier}/materials/exterior/saf-red.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/white.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/lightgrey.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/beige.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/blue.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/green.glb`),
      useGLTF.preload(`/models/${supplier}/materials/exterior/stock.glb`),
      useGLTF.preload(`/models/${supplier}/materials/flooring/echo.glb`),
      useGLTF.preload(`/models/${supplier}/materials/flooring/timber.glb`),
      useGLTF.preload(`/models/${supplier}/materials/flooring/rubber-coin.jpg`),
    );
  }

  componentData
    .filter((component) => component.supplier === supplier)
    .forEach((component) => {
      if (component.objType === COMPONENT_TYPES.DOOR) {
        // Could probably rename the folder to the objType, oh well
        promises.push(
          useGLTF.preload(`/models/${supplier}/doors/${component.model}.glb`)
        );
      } else if (component.objType === COMPONENT_TYPES.WINDOW) {
        promises.push(
          useGLTF.preload(`/models/${supplier}/windows/${component.model}.glb`)
        );
      } else if (component.objType === COMPONENT_TYPES.VENT) {
        promises.push(
          useGLTF.preload(`/models/${supplier}/vents/${component.model}.glb`)
        );
      }
    });

  await Promise.all(promises);
}
