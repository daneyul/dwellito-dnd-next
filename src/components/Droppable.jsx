import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { generateImgSrc, toScale } from "../utils/2D/utils";
import Image from "next/image";

export function Droppable({ children, selectedElevation }) {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });

  const style = {
    color: isOver ? "green" : undefined
  };

  const CustomStyle = {
    display: "flex",
    width: `${toScale(selectedElevation.objWidth)}px`,
    height: `${toScale(selectedElevation.objHeight)}px`,
    boxSizing: "border-box",
    margin: "0 auto",
    position: "relative",
    top: "50%",
    transform: "translateY(-50%)"
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      <Image
        src={generateImgSrc(selectedElevation.imgName)}
        alt="Elevation"
        width={toScale(selectedElevation.objWidth)}
        height={toScale(selectedElevation.objHeight)}
      />
      {children}
    </div>
  );
}
