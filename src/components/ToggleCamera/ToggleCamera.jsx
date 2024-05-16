import { useContext } from "react";
import style from "./toggleCamera.module.scss";
import { PageDataContext } from "../Content/Content";

const ToggleCamera = () => {
  const { show3d, showExterior, setShowExterior } = useContext(PageDataContext);

  if (show3d) {
    return (
      <div className={style.container}>
        <div className={showExterior ? style.buttonSelected : style.button} onClick={() => setShowExterior(true)}>
          Exterior
        </div>
        <div className={showExterior ? style.button : style.buttonSelected} onClick={() => setShowExterior(false)}>
          Interior
        </div>
      </div>
    );
  }
};
export default ToggleCamera;
