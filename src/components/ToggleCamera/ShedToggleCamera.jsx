import { useContext } from 'react';
import style from './toggleCamera.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedToggleCamera = ({ isMobile }) => {
  const { show3d, showExterior, setShowExterior, setCameraReady } =
    useContext(ShedDataContext);

  if (show3d) {
    return (
      <div className={style.shedContainer}>
        <button
          className={showExterior ? style.buttonSelected : style.button}
          onClick={() => {
            setShowExterior(true);
            setCameraReady(false);
          }}
        >
          Exterior
        </button>
        <button
          className={showExterior ? style.button : style.buttonSelected}
          onClick={() => {
            setShowExterior(false);
            if (!isMobile) setCameraReady(false);
          }}
        >
          Interior
        </button>
      </div>
    );
  }
};

export default ShedToggleCamera;
