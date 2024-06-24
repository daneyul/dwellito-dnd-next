import React, { createContext } from 'react';
import { createSnapModifier } from '@dnd-kit/modifiers';
import { containerData } from '../constants/containerData';
import { DIMENSIONS } from '../constants/dimensions';
import { DEFAULT_COMPONENTS, componentData } from '../constants/componentData';
import { elevationData } from '../constants/elevationData';

export const Library2dDataContext = createContext();

export const Library2dDataProvider = ({ children }) => {
  // Grid size is in inches, so 1 would be 1 inch
  const snapToGridModifier = createSnapModifier(DIMENSIONS.GRID_SIZE);

  return (
    <Library2dDataContext.Provider
      value={{
        containerData,
        DIMENSIONS,
        snapToGridModifier,
        componentData,
        DEFAULT_COMPONENTS,
        elevationData,
      }}
    >
      {children}
    </Library2dDataContext.Provider>
  );
};
