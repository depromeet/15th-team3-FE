import { borderRadius } from '../../theme/borderRadius';

export type Size = 'large' | 'medium';
export type Variant = 'primary' | 'sub' | 'text';
export type Radius = keyof typeof borderRadius;

export interface ButtonCssArg {
  size: Size;
  variant: Variant;
  radius: Radius;
  isDisabled?: boolean;
}
