import { useContext } from 'react';
import style from './elevationToggle.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedElevationToggle = () => {
  const {
    mappedElevations,
    selectedElevation,
    setSelectedElevation,
    show3d,
    setSelectedElevationIndex
  } = useContext(ShedDataContext);

  if (!show3d) {
    return (
      <div className={style.shedContainer}>
        {mappedElevations.map((elevation, index) => {
          return (
            <button
              key={elevation.id}
              className={`${style.toggle} ${
                selectedElevation === elevation ? style.toggleSelected : ''
              }`}
              onClick={() => {
                setSelectedElevation(elevation);
                setSelectedElevationIndex(index);
              }}
            >
              {elevation.name}
            </button>
          );
        })}
      </div>
    );
  }
};

export default ShedElevationToggle;
