import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../utils/2D/utils';
import Image from 'next/image';
import { PageDataContext } from './Content/Content';
import { Library2dDataContext } from '@/utils/2D/2dLibraryContext';
import { CONTAINER_STANDARD } from '@/utils/constants';

export function Droppable({ children }) {
  const { scaleFactor, selectedElevation, selectedContainerHeight } =
    useContext(PageDataContext);
  const { elevationData } = useContext(Library2dDataContext);
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const style = {
    color: isOver ? 'green' : undefined,
  };

  const containerIsStandard = selectedContainerHeight === CONTAINER_STANDARD;

  const objectHeight =
  containerIsStandard
      ? selectedElevation.objScHeight
      : selectedElevation.objHcHeight;

  const elevationImg = containerIsStandard ? selectedElevation.imgScName : selectedElevation.imgHcName;

  const CustomStyle = {
    display: 'flex',
    width: `${toScale(selectedElevation.objWidth, scaleFactor)}px`,
    height: `${toScale(objectHeight, scaleFactor)}px`,
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      {elevationData.map((elevation, index) => (
        <Image
          key={index}
          src={generateImgSrc(elevationImg)}
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
}
