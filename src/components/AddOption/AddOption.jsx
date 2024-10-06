/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';
import { COMPONENT_NAMES, ELEVATION_NAMES } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const AddOption = ({ options }) => {
  const {
    setSelectedComponents,
    selectedComponents,
    selectedElevation,
    setShow3d,
    isFloorPlanView,
    setSelectedElevation,
    mappedElevations,
    floorPlan,
    supplier
  } = useContext(ContainerDataContext);

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );
  const backElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.BACK
  );

  const handleSelect = (item) => {
    setShow3d(false);
    if (isFloorPlanView) {
      setSelectedElevation(rightElevation);
      handleAddComponent({
        item,
        setSelectedComponents,
        selectedElevation: rightElevation,
        floorPlan
      });
    } else {
      handleAddComponent({
        item,
        setSelectedComponents,
        selectedElevation,
        floorPlan
      });
    }
  };
  
  return options.map((item) => {
    if (isFloorPlanView && item.name !== COMPONENT_NAMES.ROOF_VENT) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              style={{ opacity: '0.25' }}
              src={generateImgSrc(supplier, item.imgName)}
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
    } else if (item.isRollUp && selectedElevation === backElevation) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              style={{ opacity: '0.25' }}
              src={generateImgSrc(supplier, item.imgName)}
              alt={item.name}
              className={style.objImg}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className={style.tooltipText} side='top'>
              Roll up doors do not fit on this side
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      );
    } else {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              src={generateImgSrc(supplier, item.imgName)}
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
