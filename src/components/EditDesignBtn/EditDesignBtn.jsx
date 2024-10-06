import { useContext } from 'react';
import ChevronLeftBlue from '../ChevronLeftBlue';
import style from './editDesignBtn.module.scss';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const EditDesignBtn = () => {
  const { toggleOrder } = useContext(ContainerDataContext);
  return (
    <div className={style.buttonContainer} onClick={toggleOrder}>
      <div className={style.buttonWrapper}>
        <div className={style.img}>
          <ChevronLeftBlue />
        </div>
        <div className={style.buttonText}>Edit Design</div>
      </div>
    </div>
  );
};

export default EditDesignBtn;
