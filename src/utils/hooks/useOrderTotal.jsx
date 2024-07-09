import { useState, useEffect, useContext } from 'react';
import {
  INTERIOR_FINISH_NAMES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants/names';

const useOrderTotal = ({
  slug,
  selectedComponents,
  interiorFinish,
  exteriorFinish,
  flooring,
}) => {
  const [orderTotal, setOrderTotal] = useState(0);

  useEffect(() => {
    const interiorFinishPrice = () => {
      if (interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING) {
        if (slug === CONTAINER_10_SLUG) {
          return interiorFinish.price10;
        } else if (slug === CONTAINER_20_SLUG) {
          return interiorFinish.price20;
        } else if (slug === CONTAINER_40_SLUG) {
          return interiorFinish.price40;
        }
      } else if (
        interiorFinish.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS
      ) {
        if (slug === CONTAINER_10_SLUG) {
          return interiorFinish.price10;
        } else if (slug === CONTAINER_20_SLUG) {
          return interiorFinish.price20S;
        } else if (slug === CONTAINER_40_SLUG) {
          return interiorFinish.price40S;
        }
      } else {
        return interiorFinish.price;
      }
    };

    const flooringPrice = () => {
      if (slug === CONTAINER_10_SLUG) {
        return flooring.price10;
      } else if (slug === CONTAINER_20_SLUG) {
        return flooring.price20;
      } else if (slug === CONTAINER_40_SLUG) {
        return flooring.price40;
      }
    };

    const total =
      selectedComponents.reduce(
        (accumulator, currentComponent) => accumulator + currentComponent.price,
        0
      ) +
      interiorFinishPrice() +
      exteriorFinish.price +
      flooringPrice();

    setOrderTotal(total);
  }, [selectedComponents, interiorFinish, exteriorFinish, flooring]);

  return { orderTotal, setOrderTotal };
};

export default useOrderTotal;
