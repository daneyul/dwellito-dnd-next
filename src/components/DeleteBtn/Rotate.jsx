import RotateIcon from '../svgs/RotateIcon';
import style from './delete.module.scss';
import * as HoverCard from '@radix-ui/react-hover-card';

const RotateBtn = ({ handleRotate }) => {
  
  const handleClick = (e) => {
    e.stopPropagation();
    handleRotate();
  };

  return (
    <div
      className={style.container}
    >
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger>
          <button className={style.icon} onClick={handleClick}>
            <RotateIcon />
          </button>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.content} side='top'>
            Rotate
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};

export default RotateBtn;
