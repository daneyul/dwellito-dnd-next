import React, { createContext } from "react";

export const Library3dDataContext = createContext();

export const Library3dDataProvider = ({ children }) => {
  const SCALE_FACTOR_FOR_CALCULATIONS = 3.93;
  const EXTERIOR = "exterior";
  const INTERIOR = "interior";
  const FLOORING = "flooring";

  const EXTERIOR_CAM_POS = {
    TEN: [100, 50, 100],
    TWENTY: [100, 50, 100],
    FORTY: [150, 50, 150],
  };
  const INTERIOR_CAM_POS = {
    TEN: [13, 12, -3],
    TWENTY: [28.68, 12, -3],
    FORTY: [28.68, 12, -3],
  };
  const INTERIOR_CAM_ROT = {
    TEN: [2.15, 12, 6],
    TWENTY: [2.15, 12, 5.65],
    FORTY: [2.15, 12, 5.65],
  };

  const INTERIOR_FINISH_OPTIONS = [
    {
      name: "Plywood",
      hex: "#C19A6B",
      price: 3685,
      img: "",
      fileName: "",
      glbObject: "",
    },
    {
      name: "Pre-finished Drywall",
      hex: "#F2F2F2",
      price: 4400,
      img: "",
      fileName: "",
      glbObject: "",
    },
  ];

  const EXTERIOR_FINISH_OPTIONS = [
    {
      name: "White",
      glbObject: "White",
      hex: "#F2F2F2",
      fileName: "white-paint",
      img: "white.png"
    },
    {
      name: "Blue",
      glbObject: "Blue",
      hex: "#003366",
      fileName: "blue-paint",
      img: "blue.png"
    },
    {
      name: "Green",
      glbObject: "Green",
      hex: "#2E8B57",
      fileName: "green-paint",
      img: "green.png"
    },
    {
      name: "Slate Grey",
      glbObject: "SlateGrey",
      hex: "#6C7B8B",
      fileName: "slate-grey-paint",
      img: "slate-grey.png"
    },
    {
      name: "Red",
      glbObject: "Red",
      hex: "#800000",
      fileName: "red-paint",
      img: "red.png"
    },
  ];

  const FLOORING_OPTIONS = [
    {
      name: "Vinyl Plank Flooring - 12mil Echo - 20ft",
      type: "Echo",
      fileName: "echo",
      glbObject: "Echo.004",
      img: "/flooring/echo.png",
      hex: "#C19A6B",
      price: 950,
    },
    {
      name: "Vinyl Plank Flooring - 12mil Timber - 20ft",
      type: "Timber",
      fileName: "timber",
      glbObject: "Timber.001",
      img: "/flooring/timber.png",
      hex: "#000000",
      price: 950,
    },
  ];

  return (
    <Library3dDataContext.Provider
      value={{
        SCALE_FACTOR_FOR_CALCULATIONS,
        EXTERIOR,
        INTERIOR,
        FLOORING,
        EXTERIOR_CAM_POS,
        INTERIOR_CAM_POS,
        INTERIOR_CAM_ROT,
        EXTERIOR_FINISH_OPTIONS,
        INTERIOR_FINISH_OPTIONS,
        FLOORING_OPTIONS
      }}
    >
      {children}
    </Library3dDataContext.Provider>
  );
};
