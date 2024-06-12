import { useContext } from 'react';
import style from './toggleCamera.module.scss';
import { PageDataContext } from '../Content/Content';

const ToggleCamera = () => {
  const { show3d, showExterior, setShowExterior } = useContext(PageDataContext);

  if (show3d) {
    return (
      <div className={style.container}>
        <button
          className={showExterior ? style.buttonSelected : style.button}
          onClick={() => setShowExterior(true)}
        >
          Exterior
        </button>
        <button
          className={showExterior ? style.button : style.buttonSelected}
          onClick={() => setShowExterior(false)}
        >
          Interior
        </button>
      </div>
    );
  }
};
export default ToggleCamera;
