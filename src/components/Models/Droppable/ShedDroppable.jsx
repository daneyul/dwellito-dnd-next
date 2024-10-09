import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../../../utils/2D/utils';
import Image from 'next/image';
import { shedElevationData } from '@/utils/constants/components/shed-elevations/shedElevationData';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';

const ShedDroppable = ({ children }) => {
  const { scaleFactor, selectedElevation, supplier } =
    useContext(ShedDataContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const objectHeight = selectedElevation.objHeight;

  const elevationImg = selectedElevation.imgName;

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
      {shedElevationData.map((elevation, index) => (
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

export default ShedDroppable;
