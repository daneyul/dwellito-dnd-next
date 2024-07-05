import RotateIcon from '../svgs/RotateIcon';
import style from './dragToMove.module.scss';

const Rotate = ({ isFloorPlanView }) => {
  return (
    <div
      className={style.container}
      style={{ bottom: "calc(9rem + 58px)"  }}
    >
      <DragIcon />
      <div className={style.text}>Rotate</div>
    </div>
  );
};

export default Rotate;
