import DeleteIcon from './DeleteIcon';
import style from './delete.module.scss';
import * as HoverCard from '@radix-ui/react-hover-card';

const DeleteBtn = ({ onDeleteSelected, isFloorPlanView }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onDeleteSelected();
  };

  return (
    <div
      className={style.container}
      style={{ bottom: "calc(9rem + 58px)" }}
    >
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger>
          <button className={style.icon} onClick={handleClick}>
            <DeleteIcon />
          </button>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.content} side='top'>
            Delete
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};

export default DeleteBtn;
