import React, { createContext } from 'react';
import { useGLTF } from '@react-three/drei';
import { INTERIOR_FINISH_NAMES } from '../constants/names';

export const Library3dDataContext = createContext();

export const Library3dDataProvider = ({ children }) => {
  const SCALE_FACTOR_FOR_CALCULATIONS = 3.93;
  const EXTERIOR = 'exterior';
  const INTERIOR = 'interior';
  const FLOORING = 'flooring';

  const EXTERIOR_CAM_POS = {
    TEN: [-100, 50, 100],
    TWENTY: [-100, 50, 100],
    FORTY: [-150, 50, 150],
  };
  const INTERIOR_CAM_POS = {
    TEN: [-13, 14, -3],
    TWENTY: [-28.68, 14, -3],
    FORTY: [-28.68, 14, -3],
  };
  const INTERIOR_CAM_ROT = {
    TEN: [2.15, 12, 6],
    TWENTY: [2.15, 12, 5.65],
    FORTY: [2.15, 12, 5.65],
  };

  const INTERIOR_FINISH_OPTIONS = [
    {
      name: "None",
      price: 0,
      hex: '#FFFFFF',
      img: 'none.png'
    },
    {
      name: INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING,
      hex: '',
      price10: 440,
      price20: 615,
      price40: 1150,
      img: 'spray-foam.png',
    },
    {
      name: INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS,
      hex: '',
      price10: 1235,
      price20S: 1975,
      price20H: 2145,
      price40S: 3460,
      price40H: 7210,
      img: 'spray-foam.png',
    },
    {
      name: INTERIOR_FINISH_NAMES.PLYWOOD,
      hex: '#C19A6B',
      price: 3685,
      img: 'plywood.png',
    },
    {
      name: INTERIOR_FINISH_NAMES.DRYWALL,
      hex: '#F2F2F2',
      price: 4400,
      img: 'drywall.png',
    },
  ];

  const plywoodInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.PLYWOOD);
  const drywallInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.DRYWALL);
  const sprayfoamCeilingInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING);
  const sprayfoamCeilingWallsInterior = INTERIOR_FINISH_OPTIONS.find((option) => option.name === INTERIOR_FINISH_NAMES.SPRAY_FOAM_CEILING_WALLS);

  const EXTERIOR_FINISH_OPTIONS = [
    {
      name: 'Beige',
      glbObject: 'Beige',
      hex: '#E6D3B5',
      fileName: 'beige-paint',
      img: 'beige.png',
      price: 0,
    },
    {
      name: 'White',
      glbObject: 'White',
      hex: '#F2F2F2',
      fileName: 'white-paint',
      img: 'white.png',
      price: 1640,
    },
    {
      name: 'Blue',
      glbObject: 'Blue',
      hex: '#003366',
      fileName: 'blue-paint',
      img: 'blue.png',
      price: 1640,
    },
    {
      name: 'Green',
      glbObject: 'Green',
      hex: '#2E8B57',
      fileName: 'green-paint',
      img: 'green.png',
      price: 1640,
    },
    {
      name: 'Slate Grey',
      glbObject: 'SlateGrey',
      hex: '#6C7B8B',
      fileName: 'slate-grey-paint',
      img: 'slate-grey.png',
      price: 1640,
    },
    {
      name: 'Red',
      glbObject: 'Red',
      hex: '#800000',
      fileName: 'red-paint',
      img: 'red.png',
      price: 1640,
    },
  ];

  const FLOORING_OPTIONS = [
    {
      name: 'None',
      type: '',
      fileName: '',
      glbObject: '',
      img: 'none.png',
      hex: '#FFFFFF',
      price10: 0,
      price20: 0,
      price40: 0,
    },
    {
      name: 'Vinyl Plank Flooring - 12mil Echo',
      type: 'Echo',
      fileName: 'echo',
      glbObject: 'Material__119',
      img: 'Vinyl Plank Flooring - 12mil Echo.png',
      hex: '#C19A6B',
      price10: 610,
      price20: 950,
      price40: 1845,
    },
    {
      name: 'Vinyl Plank Flooring - 12mil Timber',
      type: 'Timber',
      fileName: 'timber',
      glbObject: 'Echo',
      img: 'Vinyl Plank Flooring - 12mil Timber.png',
      hex: '#000000',
      price10: 610,
      price20: 950,
      price40: 1845,
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
        FLOORING_OPTIONS,
        plywoodInterior,
        drywallInterior,
        sprayfoamCeilingInterior,
        sprayfoamCeilingWallsInterior
      }}
    >
      {children}
    </Library3dDataContext.Provider>
  );
};
