import { useContext } from 'react';
import style from './toggleView.module.scss';
import HighlightIcon from '../svgs/HighlightIcon';
import ViewerIcon from '../svgs/ViewerIcon';
import { Spinner } from '@radix-ui/themes';
import { ELEVATION_NAMES } from '@/utils/constants/names/names';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const ContainerToggleView = () => {
  const {
    show3d,
    setShow3d,
    threeDModelLoaded,
    mappedElevations,
    isFloorPlanView,
    setSelectedElevation,
    selectedComponents,
    setTempSelectedComponents
  } = useContext(ContainerDataContext);

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );

  const toggle3d = () => {
    if (isFloorPlanView) {
      setShow3d(true);
      setSelectedElevation(rightElevation);
      setTempSelectedComponents(selectedComponents);
    } else {
      setShow3d(true);
      setTempSelectedComponents(selectedComponents);
    }
  };

  return (
    <div className={style.container}>
      <button
        className={show3d ? style.editor : style.editorSelected}
        onClick={() => setShow3d(false)}
      >
        <HighlightIcon />
        <div style={{ marginLeft: '8px' }}>Editor</div>
      </button>
      <button
        className={show3d ? style.viewerSelected : style.viewer}
        onClick={toggle3d}
        style={{ cursor: 'pointer' }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {threeDModelLoaded ? <ViewerIcon /> : <Spinner size='2' />}
        </div>
        <div style={{ marginLeft: '8px' }}>Viewer</div>
      </button>
    </div>
  );
};
export default ContainerToggleView;
