import React from 'react';
import ToggleView from '../ToggleView/ToggleView';
import { Models } from '../Models/Models';
import ToggleCamera from '../ToggleCamera/ToggleCamera';
import ElevationToggle from '../ElevationToggle/ElevationToggle';
import style from './viewer.module.scss';
import DnDViewer from '../DndViewer/DndViewer';

const Viewer = () => {
  return (
    <>
      <div className={style.viewer}>
        <Models />
        <DnDViewer />
        <ToggleCamera />
        <ToggleView />
        <ElevationToggle />
      </div>
    </>
  );
};

export default Viewer;
