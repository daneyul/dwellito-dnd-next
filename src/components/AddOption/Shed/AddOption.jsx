/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../../utils/2D/utils';
import style from '../addOption.module.scss';
import * as HoverCard from '@radix-ui/react-hover-card';
import {
  COMPONENT_NAMES,
  COMPONENT_TYPES,
  ELEVATION_NAMES,
} from '@/utils/constants/names/names';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const AddOption = ({ options }) => {
  const {
    setSelectedComponents,
    selectedElevation,
    setShow3d,
    mappedElevations,
    floorPlan,
    supplier,
  } = useContext(ShedDataContext);

  const frontElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.FRONT
  );

  const handleSelect = (item) => {
    setShow3d(false);
    handleAddComponent({
      item,
      setSelectedComponents,
      selectedElevation,
      floorPlan,
      supplier,
    });
  };

  const canPlaceDoor = (item) => {
    return (
      selectedElevation.name === ELEVATION_NAMES.FRONT &&
      item.objType === COMPONENT_TYPES.DOOR
    );
  };

  return options.map((item) => {
    if (canPlaceDoor(item)) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger className={style.imgContainer}>
            <img
              src={generateImgSrc(supplier, item.sidebarImg)}
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
    } else {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger className={style.imgContainer}>
            <img
              src={generateImgSrc(supplier, item.sidebarImg)}
              alt={item.name}
              className={style.objImgDisabled}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className={style.tooltipText} side='top'>
              Doors can only be placed on the front elevation
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      );
    }
  });
};

export default AddOption;
