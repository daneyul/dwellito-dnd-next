import DragIcon from '../svgs/DragIcon';
import style from './dragToMove.module.scss';

const DragToMove = ({ isFloorPlanView }) => {
  return (
    <div
      className={style.container}
      style={{ bottom: isFloorPlanView ? '-6rem' : '-2.25rem' }}
    >
      <DragIcon />
      <div className={style.text}>Drag to move</div>
    </div>
  );
};

export default DragToMove;
