import { LoaderMode } from './types';

type ModeType = LoaderMode;

const containerModeAttributeKey = 'data-loader-container-mode';
export const containerModeAttribute = {
  attribute: (mode: ModeType) => ({
    [containerModeAttributeKey]: mode,
  }),
  querySelector: (mode: ModeType) => `[${containerModeAttributeKey}=${mode}]`,
};
