import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../../../utils/2D/containers/utils';
import Image from 'next/image';
import { containerElevationData } from '@/utils/constants/components/elevations/containerElevationData';
import { ContainerDataContext } from '@/utils/contexts/ContainerDataProvider';

const ContainerDroppable = ({ children }) => {
  const { scaleFactor, selectedElevation, containerHeightIsStandard, supplier } =
    useContext(ContainerDataContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const objectHeight = containerHeightIsStandard
    ? selectedElevation.objScHeight
    : selectedElevation.objHcHeight;

  const elevationImg = containerHeightIsStandard
    ? selectedElevation.imgScName
    : selectedElevation.imgHcName;

  const CustomStyle = {
    display: 'flex',
    width: `${toScale(selectedElevation.objWidth, scaleFactor)}px`,
    height: `${toScale(objectHeight, scaleFactor)}px`,
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={{ ...CustomStyle }}>
      {containerElevationData.map((elevation, index) => (
        <Image
          key={index}
          src={generateImgSrc(supplier, elevationImg)}
          alt='Elevation'
          width={toScale(selectedElevation.objWidth, scaleFactor)}
          height={toScale(objectHeight, scaleFactor)}
          style={{
            display: selectedElevation.id === elevation.id ? 'block' : 'none',
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default ContainerDroppable;
