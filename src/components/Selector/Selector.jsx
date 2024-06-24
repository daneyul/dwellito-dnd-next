import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import AddOption from '../AddOption/AddOption';
import style from './selector.module.scss';
import { useContext } from 'react';
import { COMPONENT_NAMES, COMPONENT_TYPES } from '@/utils/constants/names';
import { PageDataContext } from '../Content/Content';
import AddElecOption from '../AddOption/AddElecOption';

const Selector = () => {
  const { componentData } = useContext(Library2dDataContext);
  const { containerHeightIsStandard, containerSize } =
    useContext(PageDataContext);

  const doors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR &&
      !(containerHeightIsStandard && item.highContainerOnly)
  );
  const windows = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.WINDOW
  );
  const vents = componentData.filter(
    (item) => item.objType === COMPONENT_TYPES.VENT
  );
  const electricals = componentData.filter((item) => {
    if (containerSize() === '40') {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_60_AMP
      );
    } else {
      return (
        item.objType === COMPONENT_TYPES.ELECTRICAL &&
        item.name !== COMPONENT_NAMES.ELECTRICAL_PANEL_100_AMP
      );
    }
  });

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
        <div className={style.subTitle}>Windows</div>
        <div className={style.objectContainer}>
          <AddOption options={windows} />
        </div>
        <div className={style.subTitle}>Vents</div>
        <div className={style.objectContainer}>
          <AddOption options={vents} />
        </div>
        <div className={style.subTitle}>Electrical Add-Ons</div>
        <div className={style.objectContainer}>
          <AddElecOption options={electricals} />
        </div>
      </div>
    </div>
  );
};

export default Selector;
