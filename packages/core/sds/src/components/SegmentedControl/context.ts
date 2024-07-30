import { buildContext } from '@sds/utils';

interface Context {
  value?: string;
  setValue?: (value: string) => void;
  setIndicatorWidth?: (value: number) => void;
  setIndicatorLeft?: (value: number) => void;
}

export const [SegmentedControlProvider, useSegmentedControlContext] = buildContext<Context>('SegmentedControl');
