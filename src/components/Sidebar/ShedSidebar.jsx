import React, { useContext } from 'react';
import style from './shedSidebar.module.scss';
import { EXTERIOR } from '@/utils/constants/names/names';
import Logo from '../Logo';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import ShedSingleSelect from '../SingleSelect/ShedSingleSelect';
import ShedSaveOrder from '../SaveOrder/ShedSaveOrder';
import FrontOptions from '../Layouts/FrontOptions';

const LogoSection = ({ supplier }) => (
  <div className={style.logo}>
    <Logo type={supplier} />
    <div
      className={style.selectionTagName}
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
    1224 Relief Pod
    </div>
  </div>
);

const ExteriorSelector = () => (
  <>
    <div className={style.selectionTagName} style={{ marginTop: '2rem' }}>
      Exterior Siding
    </div>
    <ShedSingleSelect type={EXTERIOR} />
  </>
);

const FrontSelector = () => {
  return <FrontOptions />;
};

const ShedSidebar = () => {
  const { supplier } = useContext(ShedDataContext);

  return (
    <>
      <div className={style.desktopShed}>
        <LogoSection supplier={supplier} />
        {/* <RoofSelector /> */}
        <FrontSelector />
        <ExteriorSelector />
        {/* <ShedSelector /> */}
        <ShedSaveOrder />
      </div>
    </>
  );
};

export default ShedSidebar;
