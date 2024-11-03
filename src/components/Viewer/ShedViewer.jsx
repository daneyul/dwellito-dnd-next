import React from 'react';
import style from './viewer.module.scss';
import { ShedModels } from '../Models/ShedModels';
import ShedToggleCamera from '../ToggleCamera/ShedToggleCamera';
import ShedElevationToggle from '../ElevationToggle/ShedElevationToggle';

const ShedViewer = () => {
  return (
    <>
      <div className={style.viewer}>
        <ShedModels />
        {/* <ShedDnDViewer /> */}
        <ShedToggleCamera />
        {/* <ShedToggleView /> */}
        <ShedElevationToggle />
      </div>
    </>
  );
};

export default ShedViewer;