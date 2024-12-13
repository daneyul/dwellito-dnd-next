import { useState, useEffect } from 'react'
import { COMPONENT_TYPES, SHED_12x24, SHED_12x32, SHED_16x24, SHED_20x24 } from '../constants/names/names';

const useOrderTotal = ({
  shedHeightIsOneStory,
  selectedShed,
  selectedComponents,
  exteriorFinish,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const shedPrice = selectedShed.price;

    const componentsTotal = selectedComponents.reduce((acc, component) => {
      if (component.objType === COMPONENT_TYPES.MISC) {
        if (selectedShed.size === SHED_12x24) {
          return acc + component.price12x24;
        } else if (selectedShed.size === SHED_12x32) {
          return acc + component.price12x32;
        } else if (selectedShed.size === SHED_16x24) {
          return acc + component.price16x24;
        } else if (selectedShed.size === SHED_20x24) {
          return acc + component.price20x24;
        }
      } else {
        return acc + component.price;
      }
    }, 0);
    const exteriorTotal = exteriorFinish.size === SHED_12x24
      ? exteriorFinish.price12x24
      : exteriorFinish.price12x32;

    const total = componentsTotal + shedPrice + exteriorTotal;

    setOrderTotal(total);
  }, [
    shedHeightIsOneStory,
    selectedShed,
    selectedComponents,
    exteriorFinish,
  ]);

  return { orderTotal, setOrderTotal };
};

export default useOrderTotal;
