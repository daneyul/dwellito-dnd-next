import AddOption from '../AddOption/AddOption';
import style from './selector.module.scss';
import { useContext } from 'react';
import { COMPONENT_TYPES } from '@/utils/constants/names/names';
import { componentData } from '@/utils/constants/componentData';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedSelector = () => {
  const { supplier } = useContext(ShedDataContext);

  const doors = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.DOOR && item.supplier === supplier
  );
  const windows = componentData.filter(
    (item) =>
      item.objType === COMPONENT_TYPES.WINDOW && item.supplier === supplier
  );

  return (
    <div className={style.container}>
      <div className={style.titleTop}>Doors & Windows</div>
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
      </div>
    </div>
  );
};

export default ShedSelector;
