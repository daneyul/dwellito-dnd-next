
import style from './selector.module.scss';
import { useContext } from 'react';
import { COMPONENT_TYPES, SUPPLIER_SLUGS } from '@/utils/constants/names/names';
import { componentData } from '@/utils/constants/componentData';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';
import AddOption from '../AddOption/Container/AddOption';

const ContainerSelector = () => {
  const { containerHeightIsStandard, supplier } = useContext(ContainerDataContext);

  const doors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR &&
      !item.isRollUp &&
      item.supplier === supplier
  );
  const economyDoors = componentData.filter((item) => {
    if (containerHeightIsStandard) {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        !item.isHeavyDuty &&
        !item.highContainerOnly &&
        item.supplier === supplier
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        !item.isHeavyDuty &&
        item.highContainerOnly &&
        item.supplier === supplier
      );
    }
  });
  const heavyDutyDoors = componentData.filter((item) => {
    if (containerHeightIsStandard) {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        item.isHeavyDuty &&
        !item.highContainerOnly &&
        item.supplier === supplier
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        item.isHeavyDuty &&
        item.highContainerOnly &&
        item.supplier === supplier
      );
    }
  });
  const windows = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.WINDOW && item.supplier === supplier
  );
  const vents = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.VENT && item.supplier === supplier
  );

  const rollUpDoors = componentData.filter((item) => {
    if (containerHeightIsStandard) {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        item.supplier === supplier &&
        (!item.highContainerOnly || item.highContainerOnly === undefined)
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.DOOR &&
        item.isRollUp &&
        item.supplier === supplier &&
        (item.highContainerOnly || item.highContainerOnly === undefined)
      );
    }
  });

  const RollupSection = () => (
    <>
      {supplier !== SUPPLIER_SLUGS.CUSTOM_CUBES && rollUpDoors.length > 0 && (
        <>
          <div className={style.subTitle}>Roll Up Doors</div>
          <div className={style.objectContainer}>
            <AddOption options={rollUpDoors} />
          </div>
        </>
      )}
      {supplier === SUPPLIER_SLUGS.CUSTOM_CUBES && economyDoors.length > 0 && (
        <>
          <div className={style.subTitle}>Economy Roll Up Doors</div>
          <div className={style.objectContainer}>
            <AddOption options={economyDoors} />
          </div>
        </>
      )}
      {supplier === SUPPLIER_SLUGS.CUSTOM_CUBES && heavyDutyDoors.length > 0 && (
        <>
          <div className={style.subTitle}>Heavy Duty Roll Up Doors</div>
          <div className={style.objectContainer}>
            <AddOption options={heavyDutyDoors} />
          </div>
        </>
      )}
    </>
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
        <RollupSection />
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

export default ContainerSelector;
