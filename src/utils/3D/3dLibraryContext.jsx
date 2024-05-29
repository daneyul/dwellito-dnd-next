import React, { createContext } from "react";

export const Library3dDataContext = createContext();

export const Library3dDataProvider = ({ children }) => {
  const SCALE_FACTOR_FOR_CALCULATIONS = 3.93;
  const EXTERIOR = "exterior";
  const INTERIOR = "interior";
  const EXTERIOR_CAM_POS = {
    TEN: [100, 50, 100],
    TWENTY: [100, 50, 100],
    FORTY: [150, 50, 150]
  }
  const INTERIOR_CAM_POS = {
    TEN: [28.68, 12, -0.88],
    TWENTY: [28.68, 12, -0.88],
    FORTY: [28.68, 12, -0.88]
  }
  const INTERIOR_CAM_ROT = {
    TEN: [2.15, 12, 5.65],
    TWENTY: [2.15, 12, 5.65],
    FORTY: [2.15, 12, 5.65]
  }
  
  return (
    <Library3dDataContext.Provider
      value={{
        SCALE_FACTOR_FOR_CALCULATIONS,
        EXTERIOR,
        INTERIOR,
        EXTERIOR_CAM_POS,
        INTERIOR_CAM_POS,
        INTERIOR_CAM_ROT
      }}
    >
      {children}
    </Library3dDataContext.Provider>
  );
}