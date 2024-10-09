import React from 'react';
import { ContainerModels } from '../Models/ContainerModels';
import style from './viewer.module.scss';
import ContainerDnDViewer from '../DndViewer/ContainerDnDViewer';
import ContainerToggleCamera from '../ToggleCamera/ContainerToggleCamera';
import ContainerToggleView from '../ToggleView/ContainerToggleView';
import ContainerElevationToggle from '../ElevationToggle/ContainerElevationToggle';

const ContainerViewer = () => {
  return (
    <>
      <div className={style.viewer}>
        <ContainerModels />
        <ContainerDnDViewer />
        <ContainerToggleCamera />
        <ContainerToggleView />
        <ContainerElevationToggle />
      </div>
    </>
  );
};

export default ContainerViewer;
