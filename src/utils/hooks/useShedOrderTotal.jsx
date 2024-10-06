import { useState, useEffect, useMemo } from 'react';

const useOrderTotal = ({
  shedHeightIsOneStory,
  selectedShed,
  shedSize,
  slug,
  selectedComponents,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  const getShedSpecificPrice = useMemo(
    () => (item) => {
      if (!item) return 0;
      switch (shedSize) {
        case SHED_ONE_STORY:
          return item.priceOneStory;
        case SHED_TWO_STORY:
          return item.priceTwoStory;
        default:
          return 0;
      }
    },
    [shedHeightIsOneStory, slug]
  );

  useEffect(() => {
    const shedPrice = selectedShed.price;

    const componentsTotal = selectedComponents.reduce((acc, component) => {
      return acc;
    }, 0);

    const total = componentsTotal + shedPrice;

    setOrderTotal(total);
  }, [
    shedHeightIsOneStory,
    selectedShed,
    getShedSpecificPrice,
    selectedComponents,
  ]);

  return { orderTotal, setOrderTotal };
};

export default useOrderTotal;
