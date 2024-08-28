import DeleteBtn from "../DeleteBtn/DeleteBtn";
import RotateBtn from "../DeleteBtn/Rotate";
import style from "./conditionalBtns.module.scss";

export const ConditionalButtons = ({
  isAnyItemSelected,
  show3d,
  handleDeleteSelected,
  isHeaterOrOutlet,
  isFloorPlanView,
  handleRotate,
  selectedComponent,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        transform: 'translate(-50%, 50%)',
        left: '50%',
        bottom: 'calc(7.5rem + 58px)',
        zIndex: 100,
        gap: '1rem',
      }}
      className={style.container}
    >
      {isAnyItemSelected && !show3d && <DeleteBtn onDeleteSelected={handleDeleteSelected} />}
      {isHeaterOrOutlet && !show3d && isFloorPlanView && (
        <RotateBtn handleRotate={handleRotate} component={selectedComponent} />
      )}
    </div>
  );
};
