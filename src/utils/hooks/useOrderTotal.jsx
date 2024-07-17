import { useState, useEffect, useContext } from 'react';
import {
  INTERIOR_FINISH_NAMES,
  CONTAINER_10_SLUG,
  CONTAINER_20_SLUG,
  CONTAINER_40_SLUG,
} from '@/utils/constants/names';

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
  const containerPrice = containerHeightIsStandard
    ? selectedContainer.priceSc
    : selectedContainer.priceHc;

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
          if (containerHeightIsStandard) {
            return interiorFinish.price20S;
          } else {
            return interiorFinish.price20H;
          }
        } else if (slug === CONTAINER_40_SLUG) {
          if (containerHeightIsStandard) {
            return interiorFinish.price40S;
          } else {
            return interiorFinish.price40H;
          }
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
      flooringPrice() +
      containerPrice;

    setOrderTotal(total);
  }, [selectedComponents, interiorFinish, exteriorFinish, flooring]);

  return { orderTotal, setOrderTotal };
};

export default useOrderTotal;
