import DragIcon from '../svgs/DragIcon';
import style from './dragToMove.module.scss';

const DragToMove = () => {
  return (
    <div className={style.container}>
      <DragIcon />
      <div className={style.text}>Drag to move</div>
    </div>
  );
};

export default DragToMove;