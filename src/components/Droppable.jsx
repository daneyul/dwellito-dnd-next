import React, { useContext } from "react";
import { useDroppable } from "@dnd-kit/core";
import { generateImgSrc, toScale } from "../utils/2D/utils";
import Image from "next/image";
import { Library2dDataContext } from "@/utils/2D/2dLibraryContext";

export function Droppable({ children, selectedElevation }) {
  const { DIMENSIONS } = useContext(Library2dDataContext);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable"
  });

  const style = {
    color: isOver ? "green" : undefined
  };

  const CustomStyle = {
    display: "flex",
    width: `${toScale(selectedElevation.objWidth, DIMENSIONS)}px`,
    height: `${toScale(selectedElevation.objHeight, DIMENSIONS)}px`,
    boxSizing: "border-box",
    margin: "0 auto",
    position: "relative"
  };

  return (
    <div ref={setNodeRef} style={{ ...style, ...CustomStyle }}>
      <Image
        src={generateImgSrc(selectedElevation.imgName)}
        alt="Elevation"
        width={toScale(selectedElevation.objWidth, DIMENSIONS)}
        height={toScale(selectedElevation.objHeight, DIMENSIONS)}
      />
      {children}
    </div>
  );
}
