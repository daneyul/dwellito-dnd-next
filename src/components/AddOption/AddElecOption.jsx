/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import * as HoverCard from '@radix-ui/react-hover-card';
import { PageDataContext } from '../Content/Content';

const AddElecOption = ({ options }) => {
  const {
    setSelectedComponents,
    floorPlan,
    setShow3d,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
    selectedComponents
  } = useContext(PageDataContext);

  return options.map((item) => {
    const imgSrc = !!item.sidebarImg ? item.sidebarImg : item.floorPlanImg;
    const isFixed = item.fixed;
    const alreadySelected = selectedComponents.some(component => component.name === item.name);

    if (isFixed && alreadySelected) {
      return (
        <img
          src={generateImgSrc(imgSrc)}
          style={{ opacity: '0.25' }}
          alt={item.name}
          className={style.objImgDisabled}
        />
      );
    } else {
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
                  handleAddComponent({
                    item,
                    selectedComponents,
                    setSelectedComponents,
                    selectedElevation: mappedElevations[3],
                    floorPlan
                  }
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
      }
  });
};

export default AddElecOption;
