/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react';
import { generateImgSrc, handleAddComponent } from '../../utils/2D/utils';
import style from './addElecOption.module.scss';
import { PageDataContext } from '../Content/Content';
import * as HoverCard from '@radix-ui/react-hover-card';
import {
  COMPONENT_NAMES,
  INTERIOR_FINISH_NAMES,
} from '@/utils/constants/names/names';

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
          <div className={style.objImgContainer} style={{ opacity: '0.25' }}>
            <img
              style={{ opacity: '0.25' }}
              src={generateImgSrc(supplier, imgSrc)}
              alt={item.name}
              className={style.objImg}
            />
            <div className={style.objDesc}>
              {item.name}
              <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
                +${item.price.toLocaleString()}
              </div>
            </div>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.tooltipText} side='top'>
            {text}
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    );
  };

  const Enabled = ({ item, imgSrc, alreadySelected }) => {
    return (
      <HoverCard.Root openDelay={0} closeDelay={0} key={item.id}>
        <HoverCard.Trigger>
          <div
            className={
              alreadySelected
                ? style.objImgContainerSelected
                : style.objImgContainer
            }
            onClick={() => handleSelect(item)}
          >
            <img
              src={generateImgSrc(supplier, imgSrc)}
              alt={item.name}
              className={style.fixedObjImg}
            />
            <div className={style.objDesc}>
              {item.name}
              <div style={{ marginTop: '0.5rem', fontWeight: 700 }}>
                +${item.price.toLocaleString()}
              </div>
            </div>
          </div>
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
    const alreadySelected = selectedComponents.some(
      (component) => component.name === item.name
    );

    if (item.name === COMPONENT_NAMES.PARTITION_DOOR) {
      if ((interiorNone || interiorIsSprayFoamCeiling || interiorIsSprayFoamCeilingWalls) && !interiorIsDrywall && !interiorIsPlywood) {
        return (
          <Disabled
            text='This door only works with plywood and drywall interior finishes'
            imgSrc={imgSrc}
            item={item}
          />
        );
      } else {
        return (
          <Enabled
            imgSrc={imgSrc}
            item={item}
            alreadySelected={alreadySelected}
          />
        );
      }
    } else {
      return (
        <Enabled
          imgSrc={imgSrc}
          item={item}
          alreadySelected={alreadySelected}
        />
      );
    }
  });
};

export default AddPartition;
