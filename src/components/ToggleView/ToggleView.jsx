import { useContext } from "react";
import style from "./toggleView.module.scss";
import { PageDataContext } from "../Content/Content";
import HighlightIcon from "../svgs/HighlightIcon";
import ViewerIcon from "../svgs/ViewerIcon";

const ToggleView = () => {
  const { show3d, setShow3d } = useContext(PageDataContext);

  return (
    <div className={style.container}>
      <button
        className={show3d ? style.editor : style.editorSelected}
        onClick={() => setShow3d(false)}
      >
        <HighlightIcon />
        <div style={{ marginLeft: "8px" }}>Editor</div>
      </button>
      <button
        className={show3d ? style.viewerSelected : style.viewer}
        onClick={() => setShow3d(true)}
      >
        <ViewerIcon />
        <div style={{ marginLeft: "8px" }}>Viewer</div>
      </button>
    </div>
  );
};
export default ToggleView;
