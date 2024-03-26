import DeleteIcon from "./DeleteIcon";
import style from "./delete.module.css";
import * as HoverCard from '@radix-ui/react-hover-card';

const DeleteBtn = ({ onDeleteSelected }) => {
  return (
    <div className={style.container}>
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger>
          <div className={style.icon} onClick={onDeleteSelected}>
            <DeleteIcon />
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.content} side="top">
            Delete
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};

export default DeleteBtn;
