import { useState, useEffect } from 'react'

const useOrderTotal = ({
  shedHeightIsOneStory,
  selectedShed,
  selectedComponents,
  exteriorFinish,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const shedPrice = selectedShed.price;

    const componentsTotal = selectedComponents.reduce((acc, component)=> {
      return acc + component.price;
    }, 0);

    const exteriorTotal = exteriorFinish.price;

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
