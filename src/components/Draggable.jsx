/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { toScale, generateImgSrc } from '../utils/2D/utils';
import { PageDataContext } from './Content/Content';
import DeleteBtn from './DeleteBtn/DeleteBtn';
import DragToMove from './DragToMove/DragToMove';
import { CONTAINER_40_SLUG } from '@/utils/constants';

export function Draggable({ id, styles, piece, onSelect }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });
  const { scaleFactor, selectedComponents, show3d, handleDeleteSelected, containerHeightIsStandard, slug } =
    useContext(PageDataContext);

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
      if (slug !== CONTAINER_40_SLUG) {
        return piece.position.y;
      } else {
        return piece.position.y - 2;
      }
    } else {
      if (slug !== CONTAINER_40_SLUG) {
        return piece.position.y + 30;
      } else {
        return piece.position.y + 18;
      }
    }
  }

  const CustomStyle = {
    position: 'absolute',
    display: 'flex',
    cursor: 'pointer',
    width: `${toScale(piece.objWidth, scaleFactor)}px`,
    height: `${Math.floor(toScale(piece.objHeight, scaleFactor))}px`,
    left: `${piece.position.x}px`,
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

  // const dynamicLineWidth = transform
  //   ? piece.position.x + transform.x
  //   : piece.position.x;

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
          src={generateImgSrc(piece.imgName)}
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
      {isHovered && !show3d && !isAnyItemSelected && <DragToMove />}
    </>
  );
}
