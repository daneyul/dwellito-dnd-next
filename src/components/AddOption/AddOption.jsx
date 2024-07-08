/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PageDataContext } from '../Content/Content';
import { ELEVATION_NAMES } from '@/utils/constants/names';

const AddOption = ({ options }) => {
  const {
    selectedComponents,
    setSelectedComponents,
    selectedElevation,
    setShow3d,
    isFloorPlanView,
    setSelectedElevation,
    mappedElevations,
    floorPlan
  } = useContext(PageDataContext);

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );

  const handleSelect = (item) => {
    setShow3d(false);
    if (isFloorPlanView) {
      setSelectedElevation(rightElevation);
      handleAddComponent({
        item,
        selectedComponents,
        setSelectedComponents,
        selectedElevation: rightElevation,
        floorPlan
      });
    } else {
      handleAddComponent({
        item,
        selectedComponents,
        setSelectedComponents,
        selectedElevation,
        floorPlan
      });
    }
  };

  return options.map((item) => {
    if (isFloorPlanView) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              style={{ opacity: '0.25' }}
              src={generateImgSrc(item.imgName)}
              alt={item.name}
              className={style.objImg}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className={style.tooltipText} side='top'>
              Select a container side to place this item
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      );
    } else {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              src={generateImgSrc(item.imgName)}
              alt={item.name}
              onClick={() => handleSelect(item)}
              className={style.objImg}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className={style.tooltipText} side='top'>
              {item.name}
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      );
    }
  });
};

export default AddOption;
