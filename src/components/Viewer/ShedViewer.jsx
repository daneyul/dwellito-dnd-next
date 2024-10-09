import React from 'react';
import style from './viewer.module.scss';
import { ShedModels } from '../Models/ShedModels';
import ShedDnDViewer from '../DndViewer/ShedDndViewer';
import ShedToggleCamera from '../ToggleCamera/ShedToggleCamera';
import ShedToggleView from '../ToggleView/ShedToggleView';
import ShedElevationToggle from '../ElevationToggle/ShedElevationToggle';

const ShedViewer = () => {
  return (
    <>
      <div className={style.viewer}>
        {/* <ShedModels /> */}
        <ShedDnDViewer />
        <ShedToggleCamera />
        <ShedToggleView />
        <ShedElevationToggle />
      </div>
    </>
  );
};

export default ShedViewer;