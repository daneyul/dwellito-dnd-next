/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PageDataContext } from '../Content/Content';

const AddElecOption = ({ options }) => {
  const {
    setSelectedComponents,
    setHasCollisions,
    scaleFactor,
    setShow3d,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
  } = useContext(PageDataContext);

  return options.map((item) => {
    const imgSrc = !!item.sidebarImg ? item.sidebarImg : item.floorPlanImg; 
    return (
      <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
        <HoverCard.Trigger>
          <img
            src={generateImgSrc(imgSrc)}
            alt={item.name}
            onClick={() => {
              setShow3d(false);
              setSelectedElevation(mappedElevations[3]);
              setSelectedElevationIndex(3);
              handleAddComponent(
                item,
                setSelectedComponents,
                mappedElevations[3],
                setHasCollisions,
                scaleFactor
              );
            }}
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
  });
};

export default AddElecOption;
