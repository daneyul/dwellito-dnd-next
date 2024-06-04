import { useContext } from "react";
import style from "./toggleView.module.scss";
import { PageDataContext } from "../Content/Content";
import HighlightIcon from "../svgs/HighlightIcon";
import ViewerIcon from "../svgs/ViewerIcon";
import { Spinner } from "@radix-ui/themes";

const ToggleView = () => {
  const { show3d, setShow3d, threeDModelLoaded } = useContext(PageDataContext);
  console.log(threeDModelLoaded);

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
        disabled={!threeDModelLoaded}
        style={{ cursor: !threeDModelLoaded ? "not-allowed" : "pointer" }}
      >
        <div
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {threeDModelLoaded ? <ViewerIcon /> : <Spinner size="2" />}
        </div>
        <div style={{ marginLeft: "8px" }}>Viewer</div>
      </button>
    </div>
  );
};
export default ToggleView;
