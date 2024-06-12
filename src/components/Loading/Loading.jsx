import * as Progress from '@radix-ui/react-progress';
import style from './loading.module.scss';

const Loading = ({ progress }) => {
  return (
    <Progress.Root className={style.root} value={progress}>
      <Progress.Indicator
        className={style.indicator}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

export default Loading;
