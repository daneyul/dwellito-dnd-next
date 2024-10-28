import { useState, useEffect, useMemo } from 'react';
import {
  INTERIOR_FINISH_NAMES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  COMPONENT_TYPES,
  INTERIOR_TRIM_NAMES,
  EXTERIORS,
} from '@/utils/constants/names/names';
import { getComponentPrice } from '../2D/containers/utils';
import { EXTERIOR_FINISH_OPTIONS } from '@/utils/constants/components/exteriors/exteriorData';

const useOrderTotal = ({
  containerHeightIsStandard,
  selectedContainer,
  slug,
  selectedComponents,
  interiorFinish,
  interiorTrim,
  exteriorFinish,
  flooring,
  hasRedCorners
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  const getContainerSpecificPrice = useMemo(
    () => (item) => {
      if (!item) return 0;
      const sizeSuffix = containerHeightIsStandard ? 'S' : 'H';
      switch (slug) {
        case CONTAINER_SIZE_10:
          return item.price10;
        case CONTAINER_SIZE_20:
          return item[`price20${sizeSuffix}`] || item.price20;
        case CONTAINER_SIZE_40:
          return item[`price40${sizeSuffix}`] || item.price40;
        default:
          return 0;
      }
    },
    [containerHeightIsStandard, slug]
  );

  const interiorFinishPrice = useMemo(() => {
    return interiorFinish.name !== INTERIOR_FINISH_NAMES.NONE
      ? getContainerSpecificPrice(interiorFinish)
      : interiorFinish.price;
  }, [interiorFinish, getContainerSpecificPrice]);

  const interiorTrimPrice = useMemo(() => {
    if (!interiorTrim) return 0;
    return interiorTrim.name !== INTERIOR_TRIM_NAMES.NONE
      ? getContainerSpecificPrice(interiorTrim)
      : interiorTrim.price;
  }, [interiorTrim, getContainerSpecificPrice]);

  const redCornersPrice = hasRedCorners ? EXTERIOR_FINISH_OPTIONS.find((item) => item.name === EXTERIORS.SAF_RED).price : 0;

  useEffect(() => {
    const containerPrice = containerHeightIsStandard
      ? selectedContainer.priceSc
      : selectedContainer.priceHc;

    const flooringPrice = getContainerSpecificPrice(flooring);

    const componentsTotal = selectedComponents.reduce((acc, component) => {
      return acc + getComponentPrice(component, interiorFinish, component.objType === COMPONENT_TYPES.ELECTRICAL);
    }, 0);

    const total =
      componentsTotal +
      interiorFinishPrice +
      exteriorFinish.price +
      flooringPrice +
      containerPrice +
      redCornersPrice;
      
    setOrderTotal(total);
  }, [
    containerHeightIsStandard,
    selectedContainer,
    getContainerSpecificPrice,
    selectedComponents,
    interiorFinishPrice,
    interiorFinish,
    exteriorFinish,
    flooring,
    hasRedCorners
  ]);

  return { orderTotal, setOrderTotal, interiorFinishPrice, interiorTrimPrice };
};

export default useOrderTotal;
