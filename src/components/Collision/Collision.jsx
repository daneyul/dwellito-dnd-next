import style from "./collision.module.css";
import * as HoverCard from '@radix-ui/react-hover-card';

const Collision = ({ showCollision }) => {
  return (
    <div className={showCollision ? style.container : style.containerHover}>
      <HoverCard.Root openDelay={0} closeDelay={0}>
        <HoverCard.Trigger>
          <div className={showCollision ? style.textShow : style.text}>
            Object Collision
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content className={style.content} side="top">
          This is colliding with another object. Please adjust its position for a perfect fit.
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
};

export default Collision;
