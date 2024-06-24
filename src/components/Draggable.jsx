/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { toScale, generateImgSrc } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import DeleteBtn from './DeleteBtn/DeleteBtn';
import DragToMove from './DragToMove/DragToMove';
import {
  COMPONENT_TYPES,
  CONTAINER_40_SLUG,
  ELEVATION_NAMES,
} from '@/utils/constants/names';

export function Draggable({ id, styles, piece, onSelect }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const {
    scaleFactor,
    selectedComponents,
    show3d,
    handleDeleteSelected,
    containerHeightIsStandard,
    slug,
    selectedElevation,
  } = useContext(PageDataContext);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseDown = (e) => {
    e.stopPropagation();
    onSelect();
  };

  const isAnyItemSelected = selectedComponents.some(
    (component) => component.isSelected
  );

  const objTop = () => {
    if (containerHeightIsStandard) {
      if (
        slug !== CONTAINER_40_SLUG &&
        piece.objType !== COMPONENT_TYPES.ELECTRICAL
      ) {
        return piece.position.y;
      } else {
        return piece.position.y / 1.4;
      }
    } else {
      if (slug !== CONTAINER_40_SLUG) {
        return piece.position.y * 5.28;
      } else {
        return piece.position.y * 2.57;
      }
    }
  };

  const isFixed = piece.fixed && !!piece.fixedSide;

  const fixedElectricalPositions = () => {
    if (piece.fixedSide === ELEVATION_NAMES.BACK) {
      return `calc(${piece.position.x}px - ${piece.objWidth}px)`;
    }
  };

  const CustomStyle = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    width: `${toScale(piece.objWidth, scaleFactor)}px`,
    height: `${Math.floor(toScale(piece.objHeight, scaleFactor))}px`,
    left: isFixed ? 'auto' : `${piece.position.x}px`,
    right: isFixed ? fixedElectricalPositions() : 'auto',
    top: `${objTop()}px`,
    boxShadow:
      isHovered || piece.isSelected
        ? '0px 4px 30px 0px rgba(128, 129, 238, 0.19)'
        : 'none',
    border:
      isHovered || piece.isSelected
        ? '1px solid #2A2CB1'
        : '1px solid transparent',
    boxSizing: 'border-box',
  };

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  const isFloorPlanView = selectedElevation.name === ELEVATION_NAMES.FLOOR_PLAN

  const imgSrc =
    isFloorPlanView
      ? piece.floorPlanImg
      : piece.imgName;

  // Render on corresponding elevation or render on floor plan view
  if (!piece.elevation.includes(selectedElevation) && !isFloorPlanView) {
    return null;
  }
  
  return (
    <>
      <div
        ref={setNodeRef}
        style={{ ...dragStyle, ...CustomStyle, ...styles }}
        {...listeners}
        {...attributes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={handleMouseDown}
      >
        <img
          src={generateImgSrc(imgSrc)}
          alt={piece.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </div>
      {isAnyItemSelected && !show3d && (
        <DeleteBtn onDeleteSelected={handleDeleteSelected} />
      )}
      {isHovered && !show3d && !isAnyItemSelected && !piece.fixed && (
        <DragToMove />
      )}
    </>
  );
}
