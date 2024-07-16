import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import AddOption from '../AddOption/AddOption';
import style from './selector.module.scss';
import { useContext } from 'react';
import { COMPONENT_TYPES } from '@/utils/constants/names';

const Selector = () => {
  const { componentData } = useContext(Library2dDataContext);

  const doors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR && !item.isRollUp
  );
  const economyDoors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR &&
      item.isRollUp && !item.isHeavyDuty
  );
  const heavyDutyDoors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR &&
      item.isRollUp && item.isHeavyDuty
  );
  const windows = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.WINDOW
  );
  const vents = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.VENT
  );

  return (
    <div className={style.container}>
      <div className={style.titleTop}>Doors, Windows & Vents</div>
      <p style={{ marginBottom: '1rem' }}>
        Place Doors, Windows, and other add-ons to your unit
      </p>
      <div className={style.expandedContent}>
        <div className={style.subTitle}>Doors</div>
        <div className={style.objectContainer}>
          <AddOption options={doors} />
        </div>
        <div className={style.subTitle}>Economy Roll Up Doors</div>
        <div className={style.objectContainer}>
          <AddOption options={economyDoors} />
        </div>
        <div className={style.subTitle}>Heavy Duty Roll Up Doors</div>
        <div className={style.objectContainer}>
          <AddOption options={heavyDutyDoors} />
        </div>
        <div className={style.subTitle}>Windows</div>
        <div className={style.objectContainer}>
          <AddOption options={windows} />
        </div>
        <div className={style.subTitle}>Vents</div>
        <div className={style.objectContainer}>
          <AddOption options={vents} />
        </div>
      </div>
    </div>
  );
};

export default Selector;
