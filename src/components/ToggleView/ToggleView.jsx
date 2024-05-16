import { useContext } from "react";
import style from "./toggleView.module.scss";
import { PageDataContext } from "../Content/Content";

const ToggleView = () => {
  const { show3d, toggleView } = useContext(PageDataContext)

  return (
    <div className={style.container} onClick={toggleView}>
      {show3d ? "2D Viewer" : "3D Viewer"}
    </div>
  )
}
export default ToggleView;