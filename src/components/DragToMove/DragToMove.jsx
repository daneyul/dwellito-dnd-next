import DragIcon from '../svgs/DragIcon';
import style from './dragToMove.module.scss';

const DragToMove = ({ isFloorPlanView }) => {
  return (
    <div
      className={style.container}
      style={{ bottom: "calc(9rem + 58px)"  }}
    >
      <DragIcon />
      <div className={style.text}>Drag to move</div>
    </div>
  );
};

export default DragToMove;
