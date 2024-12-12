import React, { useContext } from 'react';
import style from './shedSidebar.module.scss';
import { EXTERIOR } from '@/utils/constants/names/names';
import Logo from '../Logo';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import ShedSingleSelect from '../SingleSelect/ShedSingleSelect';
import ShedSaveOrder from '../SaveOrder/ShedSaveOrder';
import FrontOptions from '../Layouts/FrontOptions';
import Subtitle from '../Subtitle/Subtitle';
import AddMiscOption from '../AddOption/Shed/AddMiscOption';
import { miscComponents } from '@/utils/constants/components/misc/misc';
import ShedLayouts from '../Layouts/Shed/ShedLayouts';
import RoofOptions from '../Layouts/RoofOptions';

const LogoSection = ({ supplier }) => (
  <div className={style.logo}>
    <Logo type={supplier} />
    <div
      className={style.selectionTagName}
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
      Choose your design
    </div>
  </div>
);

const ExteriorSelector = () => (
  <>
    <div className={style.selectionTagName}>
      Paint Color
    </div>
    <ShedSingleSelect type={EXTERIOR} />
  </>
);

const FrontSelector = () => {
  return (
    <>
      <div className={style.selectionTagName}>
        Entry Type
      </div>
      <FrontOptions />
    </>
  );
};

const RoofSelector = () => {
  return (
    <>
      <div className={style.selectionTagName}>
        Roof Type
      </div>
      <RoofOptions />
    </>
  );
};

const ShedSidebar = () => {
  const { supplier } = useContext(ShedDataContext);

  return (
    <>
      <div className={style.desktopShed}>
        <LogoSection supplier={supplier} />
        <ShedLayouts />
        <RoofSelector />
        <FrontSelector />
        <ExteriorSelector />
        <Subtitle
          text='Select your add-ons'
          css={{ fontWeight: 400, margin: '2rem 0 1rem 0' }}
        />
        <div className={style.fixedObjectShed}>
          <AddMiscOption options={miscComponents} />
        </div>
        <div
          style={{
            fontSize: '14px',
            marginTop: '0.5rem',
          }}
        >
          We have lined up some Non-Profits and Private Donors who will help
          subsidize these Relief Cottages for those who have been displaced by
          the storm. Please only select this subsidy if you have been displaced
          and need this support to be able to afford this Cottage.
        </div>
        <ShedSaveOrder />
      </div>
    </>
  );
};

export default ShedSidebar;
