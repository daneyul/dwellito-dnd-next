import style from './badge.module.scss';
import { useContext } from 'react';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const Badges = () => {
  const { selectedContainer } = useContext(ContainerDataContext);

  return (
    <div className={style.container}>
      <div className={style.badge}>{selectedContainer.length}</div>
      <div className={style.badge}>{selectedContainer.width}</div>
      <div className={style.badge}>{selectedContainer.sqFootage}</div>
    </div>
  );
};

export default Badges;
