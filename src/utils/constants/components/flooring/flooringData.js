import { atAndS } from "./atAndS";
import { customCubes } from "./customCubes";


export const FLOORING_OPTIONS = [
  ...customCubes,
  ...atAndS
];

export const noneOption = FLOORING_OPTIONS.find(option => option.name === 'None');