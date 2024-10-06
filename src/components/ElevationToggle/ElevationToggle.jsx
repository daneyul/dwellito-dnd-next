import { useContext } from 'react';
import style from './elevationToggle.module.scss';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const ElevationToggle = () => {
  const {
    mappedElevations,
    selectedElevation,
    setSelectedElevation,
    show3d,
    setSelectedElevationIndex
  } = useContext(ContainerDataContext);

  if (!show3d) {
    return (
      <div className={style.container}>
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

export default ElevationToggle;
