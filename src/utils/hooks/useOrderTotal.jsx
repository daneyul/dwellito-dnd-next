import { useState, useEffect, useMemo } from 'react';
import {
  INTERIOR_FINISH_NAMES,
  CONTAINER_SIZE_10,
  CONTAINER_SIZE_20,
  CONTAINER_SIZE_40,
  COMPONENT_TYPES,
} from '@/utils/constants/names/names';
import { getComponentPrice } from '../2D/utils';

const useOrderTotal = ({
  containerHeightIsStandard,
  selectedContainer,
  slug,
  selectedComponents,
  interiorFinish,
  exteriorFinish,
  flooring,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  const getContainerSpecificPrice = useMemo(
    () => (item) => {
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
    if (interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING) {
      return getContainerSpecificPrice(interiorFinish);
    }

    const specialFinishes = [
      INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS,
      INTERIOR_FINISH_NAMES.PLYWOOD,
      INTERIOR_FINISH_NAMES.DRYWALL,
    ];

    if (specialFinishes.includes(interiorFinish.name)) {
      return getContainerSpecificPrice(interiorFinish);
    }

    return interiorFinish.price;
  }, [interiorFinish, getContainerSpecificPrice]);

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
      containerPrice;

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
  ]);

  return { orderTotal, setOrderTotal, interiorFinishPrice };
};

export default useOrderTotal;
