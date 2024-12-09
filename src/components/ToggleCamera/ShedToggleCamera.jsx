import { useContext } from 'react';
import style from './toggleCamera.module.scss';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { ONE_STORY } from '@/utils/constants/names/names';

const ShedToggleCamera = ({ isMobile }) => {
  const {
    show3d,
    showExterior,
    setShowExterior,
    setCameraReady,
    selectedSheHeight,
    setShowGroundFloor,
    showGroundFloor,
  } = useContext(ShedDataContext);

  if (show3d) {
    return (
      <div className={style.shedContainer}>
        <button
          className={showExterior ? style.buttonSelected : style.button}
          onClick={() => {
            setShowExterior(true);
            setShowGroundFloor(null);
            setCameraReady(false);
          }}
        >
          Exterior
        </button>
        {selectedSheHeight === ONE_STORY ? (
          <button
            className={showExterior ? style.button : style.buttonSelected}
            onClick={() => {
              setShowExterior(false);
              if (!isMobile) setCameraReady(false);
            }}
          >
            Interior
          </button>
        ) : (
          <>
            <button
              className={showGroundFloor && !showExterior ? style.buttonSelected : style.button}
              onClick={() => {
                setShowExterior(false);
                setShowGroundFloor(true);
                if (!isMobile) setCameraReady(false);
              }}
            >
              First Floor
            </button>
            <button
              className={showGroundFloor === false && !showExterior ? style.buttonSelected : style.button}
              onClick={() => {
                setShowExterior(false);
                setShowGroundFloor(false);
                if (!isMobile) setCameraReady(false);
              }}
            >
              Second Floor
            </button>
          </>
        )}
      </div>
    );
  }
};

export default ShedToggleCamera;
