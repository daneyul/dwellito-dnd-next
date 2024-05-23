import React, { createContext } from "react";

export const Library3dDataContext = createContext();

export const Library3dDataProvider = ({ children, materialsData }) => {

  const DIMENSIONS = {
    CONTAINER: {
      SIDE: {
        WIDTH: 61.098,
        HEIGHT: 25.96,
      },
      FRONT: {
        WIDTH: 24.405,
        HEIGHT: 25.96,
      },
    },
  };
  // This is for scaling the overall 3D model
  const CANVAS_SCALE_FACTOR = 0.1;
  // This is the actual dimensions in inches
  // divided by the 3D canvas dimensions
  const SCALE_FACTOR_FOR_CALCULATIONS = 3.93;
  
  const EXTERIOR = "exterior";
  const INTERIOR = "interior";
  const INTERIOR_OPTIONS = [
    {name: "Plywood", hex: "#C19A6B"},
    {name: "Pre-finished Drywall", hex: "#F2F2F2"}
  ]

  // const colors = materialsData.map((material) => {
  //   return { name: material["Title"], hex: `#${material["HEX"]}`, img: ""}
  // })

  const colors = [
    { name: 'White', hex: '#F2F2F2' },
    { name: 'Blue', hex: '#003366' },
    { name: 'Green', hex: '#2E8B57' },
    { name: 'Slate Grey', hex: '#6C7B8B' },
    { name: 'Red', hex: '#800000' }
  ];
  
  return (
    <Library3dDataContext.Provider
      value={{
        DIMENSIONS,
        CANVAS_SCALE_FACTOR,
        SCALE_FACTOR_FOR_CALCULATIONS,
        colors,
        INTERIOR_OPTIONS,
        EXTERIOR,
        INTERIOR
      }}
    >
      {children}
    </Library3dDataContext.Provider>
  );
}