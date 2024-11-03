import React, { useContext } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { generateImgSrc, toScale } from '../../../utils/2D/containers/utils';
import Image from 'next/image';
import { ShedDataContext } from '@/utils/contexts/ShedDataProvider';
import { COMPONENT_NAMES, ELEVATION_NAMES } from '@/utils/constants/names/names';
import { shedElevationData } from '@/utils/constants/components/elevations/shedElevationData';

const ShedDroppable = ({ children }) => {
  const { scaleFactor, selectedElevation, supplier, selectedRoof } =
    useContext(ShedDataContext);
  const { setNodeRef } = useDroppable({
    id: 'droppable',
  });

  const selectedRoofisSlant = selectedRoof.name === COMPONENT_NAMES.SLANT_ROOF;

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

  const imgMap = {
    [ELEVATION_NAMES.FRONT]: selectedRoof?.imgs.FRONT,
    [ELEVATION_NAMES.BACK]: selectedRoof?.imgs.BACK,
    [ELEVATION_NAMES.LEFT]: selectedRoof?.imgs.LEFT,
    [ELEVATION_NAMES.RIGHT]: selectedRoof?.imgs.RIGHT,
  };

  const objWidth = {
    [ELEVATION_NAMES.FRONT]: selectedRoof?.objWidth,
    [ELEVATION_NAMES.BACK]: selectedRoof?.objWidth,
    [ELEVATION_NAMES.LEFT]: selectedRoof?.objLength,
    [ELEVATION_NAMES.RIGHT]: selectedRoof?.objLength,
  };

  const roofOffset = selectedRoofisSlant ? 2.5 : 3;

  return (
    <div ref={setNodeRef} style={{ ...CustomStyle }}>
      {shedElevationData.map((elevation, index) => {
        return (
          <div style={{ position: 'relative' }} key={index}>
            <Image
              key={index}
              src={generateImgSrc(supplier, imgMap[selectedElevation.name])}
              alt='Roof elevation'
              width={toScale(objWidth[selectedElevation.name], scaleFactor)}
              height={toScale(selectedRoof.objHeight, scaleFactor)}
              style={{
                display:
                  selectedElevation.id === elevation.id ? 'block' : 'none',
                position: 'absolute',
                transform: `translateY(-100%) translateX(-${toScale(
                  roofOffset,
                  scaleFactor
                )}px)`,
              }}
            />
            <Image
              key={index}
              src={generateImgSrc(supplier, elevationImg)}
              alt='Elevation'
              width={toScale(selectedElevation.objWidth, scaleFactor)}
              height={toScale(objectHeight, scaleFactor)}
              style={{
                display:
                  selectedElevation.id === elevation.id ? 'block' : 'none',
              }}
            />
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default ShedDroppable;
