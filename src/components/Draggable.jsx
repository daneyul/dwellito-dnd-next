import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { toScale, generateImgSrc } from "../utils/2D/utils";

export function Draggable({ id, styles, piece, onSelect }, ref) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const [isHovered, setIsHovered] = useState(false);

  const CustomStyle = {
    position: "absolute",
    display: "flex",
    cursor: "pointer",
    width: `${toScale(piece.objWidth)}px`,
    height: `${toScale(piece.objHeight)}px`,
    left: `${piece.position.x}px`,
    top: `${piece.position.y}px`,
    boxShadow: isHovered || piece.isSelected ? "0px 4px 30px 0px rgba(128, 129, 238, 0.19)" : "none",
    border: isHovered || piece.isSelected ? "1px solid #2A2CB1" : "1px solid transparent",
    boxSizing: "border-box",
  };

  const dragStyle = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : {};

  return (
    <>
      <div
        ref={setNodeRef}
        style={{ ...dragStyle, ...CustomStyle, ...styles }}
        {...listeners}
        {...attributes}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseDown={() => onSelect()}
      >
        <img
          src={generateImgSrc(piece.imgName)}
          alt={piece.name}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
