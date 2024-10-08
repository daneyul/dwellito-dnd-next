import { atAndS } from "./flooring/atAndS";
import { customCubes } from "./flooring/customCubes";

export const FLOORING_OPTIONS = [
  ...customCubes,
  ...atAndS
];

export const noneOption = FLOORING_OPTIONS.find(option => option.name === 'None');