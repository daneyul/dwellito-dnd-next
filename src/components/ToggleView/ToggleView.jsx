import { useContext } from 'react';
import style from './toggleView.module.scss';
import { PageDataContext } from '../Content/Content';
import HighlightIcon from '../svgs/HighlightIcon';
import ViewerIcon from '../svgs/ViewerIcon';
import { Spinner } from '@radix-ui/themes';
import { ELEVATION_NAMES } from '@/utils/constants/names';

const ToggleView = () => {
  const {
    show3d,
    setShow3d,
    threeDModelLoaded,
    mappedElevations,
    isFloorPlanView,
    setSelectedElevation
  } = useContext(PageDataContext);

  const rightElevation = mappedElevations.find(
    (elevation) => elevation.name === ELEVATION_NAMES.RIGHT
  );

  const toggle3d = () => {
    if (isFloorPlanView) {
      setShow3d(true);
      setSelectedElevation(rightElevation);
    } else {
      setShow3d(true);
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
        // disabled={!threeDModelLoaded}
        style={{ cursor: 'pointer' }}
        // style={{ cursor: !threeDModelLoaded ? 'not-allowed' : 'pointer' }}
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
export default ToggleView;
