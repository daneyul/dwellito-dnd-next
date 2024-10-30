import React, { useContext } from 'react';
import style from './shedSidebar.module.scss';
import { EXTERIOR } from '@/utils/constants/names/names';
import Logo from '../Logo';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import ShedSingleSelect from '../SingleSelect/ShedSingleSelect';
import ShedSaveOrder from '../SaveOrder/ShedSaveOrder';
import Subtitle from '../Subtitle/Subtitle';
import RoofOptions from '../Layouts/RoofOptions';
import ShedSelector from '../Selector/ShedSelector';
import FrontOptions from '../Layouts/FrontOptions';

const LogoSection = ({ supplier }) => (
  <div className={style.logo}>
    <Logo type={supplier} />
    <div
      className={style.selectionTagName}
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
      Choose Your Design
    </div>
    <Subtitle
      text='Get started by choosing your base design'
      css={{ fontWeight: 400, marginBottom: '1rem', textAlign: 'center' }}
    />
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

const RoofSelector = () => {
  return <RoofOptions />;
};

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
