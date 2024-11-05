import style from './collision.module.scss';

const OutsideDroppable = ({ showWarning }) => {
  return (
    <div className={showWarning ? style.container : style.containerHover}>
      {showWarning ? (
        <div className={style.textShow}>Move closer to wall</div>
      ) : (
        <div style={{ height: '17px' }}></div>
      )}
    </div>
  );
};

export default OutsideDroppable;
