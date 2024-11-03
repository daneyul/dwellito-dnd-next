import { useState, useEffect } from 'react'

const useOrderTotal = ({
  shedHeightIsOneStory,
  selectedShed,
  selectedComponents,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const shedPrice = selectedShed.price;

    const componentsTotal = selectedComponents.reduce((acc)=> {
      return acc;
    }, 0);

    const total = componentsTotal + shedPrice;

    setOrderTotal(total);
  }, [
    shedHeightIsOneStory,
    selectedShed,
    selectedComponents,
  ]);

  return { orderTotal, setOrderTotal };
};

export default useOrderTotal;
