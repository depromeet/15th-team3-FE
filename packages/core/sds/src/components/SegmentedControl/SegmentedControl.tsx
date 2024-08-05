import { Root as RadixToggleRoot, ToggleGroupSingleProps } from '@radix-ui/react-toggle-group';
import { forwardRef, useState } from 'react';

import { useControllableState } from '@sds/hooks';

import { indicatorAttribute } from './constants';
import { SegmentedControlProvider } from './context';
import { SegmentedControlItem } from './Item';
import { indicatorCss, segmentedControlCss } from './styles';

export type SegmentedControlProps = Omit<ToggleGroupSingleProps, 'type'>;

export const SegmentedControlImpl = forwardRef<HTMLDivElement, SegmentedControlProps>((props, ref) => {
  const {
    children,
    value: valueFromProps,
    defaultValue: defaultValueFromProps,
    onValueChange: onValueChangeFromProps,
    ...restProps
  } = props;

  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorLeft, setIndicatorLeft] = useState(0);

  const [value, setValue] = useControllableState({
    prop: valueFromProps,
    onChange: onValueChangeFromProps,
    defaultProp: defaultValueFromProps,
  });

  const handleValueChange = (value: string) => {
    if (value) setValue(value);
  };

  return (
    <SegmentedControlProvider
      value={value}
      setValue={handleValueChange}
      setIndicatorLeft={setIndicatorLeft}
      setIndicatorWidth={setIndicatorWidth}
    >
      <RadixToggleRoot
        ref={ref}
        value={value}
        onValueChange={handleValueChange}
        css={segmentedControlCss}
        {...restProps}
        type="single"
      >
        {children}
        <div
          {...indicatorAttribute.attribute}
          css={indicatorCss}
          style={{ width: indicatorWidth, left: indicatorLeft }}
        />
      </RadixToggleRoot>
    </SegmentedControlProvider>
  );
});

SegmentedControlImpl.displayName = 'SegmentedControl';

export const SegmentedControl = Object.assign(SegmentedControlImpl, {
  Item: SegmentedControlItem,
});
