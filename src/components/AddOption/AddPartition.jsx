/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addOption.module.css';
import { PageDataContext } from '../Content/Content';
import * as HoverCard from '@radix-ui/react-hover-card';
import { COMPONENT_NAMES, INTERIOR_FINISH_NAMES } from '@/utils/constants/names';

const AddPartition = ({ options }) => {
  const {
    setSelectedComponents,
    floorPlan,
    setShow3d,
    setSelectedElevation,
    setSelectedElevationIndex,
    mappedElevations,
    selectedComponents,
    supplier,
    interiorFinish,
    interiorIsDrywall,
    interiorIsPlywood,
    interiorIsSprayFoamCeiling,
    interiorIsSprayFoamCeilingWalls,
  } = useContext(PageDataContext);

  const handleSelect = (item) => {
    setShow3d(false);
    setSelectedElevation(mappedElevations[3]);
    setSelectedElevationIndex(3);
    handleAddComponent({
      item,
      selectedComponents,
      setSelectedComponents,
      selectedElevation: mappedElevations[3],
      floorPlan,
    });
  };

  const Disabled = ({ text, item, imgSrc }) => {
    return (
      <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
        <HoverCard.Trigger>
          <img
            style={{ opacity: '0.25' }}
            src={generateImgSrc(supplier, imgSrc)}
            alt={item.name}
            className={style.objImg}
          />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.tooltipText} side='top'>
            {text}
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );
  };

  const Enabled = ({ item, imgSrc }) => {
    return (
      <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
        <HoverCard.Trigger>
          <img
            src={generateImgSrc(supplier, imgSrc)}
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
  };

  const interiorNone = interiorFinish.name === INTERIOR_FINISH_NAMES.NONE;

  return options.map((item) => {
    const imgSrc = item.imgName;

    if (item.name === COMPONENT_NAMES.PARTITION_DOOR) {
      if (!interiorNone && !interiorIsDrywall && !interiorIsPlywood) {
        return (
          <Disabled
            text='This door only works with plywood and drywall interior finishes'
            imgSrc={imgSrc}
            item={item}
          />
        );
      } else {
        return <Enabled imgSrc={imgSrc} item={item} />;
      }
    } else {
      if (!interiorNone && !interiorIsSprayFoamCeiling && !interiorIsSprayFoamCeilingWalls) {
        return (
          <Disabled
            text='This door only works with sprayfoam sheeting interiors'
            imgSrc={imgSrc}
            item={item}
          />
        );
      } else {
        return <Enabled imgSrc={imgSrc} item={item} />;
      }
    }
  });
};

export default AddPartition;
