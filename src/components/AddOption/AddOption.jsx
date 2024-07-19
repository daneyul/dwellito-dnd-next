/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PageDataContext } from '../Content/Content';
import { COMPONENT_NAMES, ELEVATION_NAMES } from '@/utils/constants/names';

const AddOption = ({ options }) => {
  const {
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

  const imgSrc = (item) => {
    if (item.name === COMPONENT_NAMES.ROOF_VENT) {
      return item.sidebarImg
    } else {
      return item.imgName
    }
  }
  
  return options.map((item) => {
    if (isFloorPlanView && item.name !== COMPONENT_NAMES.ROOF_VENT) {
      return (
        <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
          <HoverCard.Trigger>
            <img
              style={{ opacity: '0.25' }}
              src={generateImgSrc(imgSrc(item))}
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
              src={generateImgSrc(imgSrc(item))}
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
              src={generateImgSrc(imgSrc(item))}
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
