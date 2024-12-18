import { useContext } from 'react';
import style from './toggleCamera.module.scss';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const ContainerToggleCamera = () => {
  const { show3d, showExterior, setShowExterior, setCameraReady } =
    useContext(ContainerDataContext);

  if (show3d) {
    return (
      <div className={style.container}>
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
            setCameraReady(false);
          }}
        >
          Interior
        </button>
      </div>
    );
  }
};
export default ContainerToggleCamera;
