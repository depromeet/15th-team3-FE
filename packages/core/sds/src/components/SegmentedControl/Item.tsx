import { Item as RadixToggleItem, ToggleGroupItemProps } from '@radix-ui/react-toggle-group';
import { forwardRef, useRef } from 'react';

import { useComposedRefs, useResizeObserver } from '@sds/hooks';
import { composeEventHandlers } from '@sds/utils';

import { Txt } from '../Typography';

import { useSegmentedControlContext } from './context';
import { segmentedControlItemCss } from './styles';

export type SegmentedControlItemProps = ToggleGroupItemProps;

export const SegmentedControlItem = forwardRef<HTMLButtonElement, SegmentedControlItemProps>((props, ref) => {
  const { children, value: valueFromProps, onClick, ...restProps } = props;
  const {
    value: valueFromCtx,
    setValue: setValueFromCtx,
    setIndicatorLeft,
    setIndicatorWidth,
  } = useSegmentedControlContext();

  const isSelected = valueFromProps === valueFromCtx;

  const itemRef = useRef<HTMLButtonElement>(null);
  const composedRef = useComposedRefs(itemRef, ref);

  const updateIndicatorPosition = () => {
    if (!isSelected || !itemRef.current) return;

    const { width } = itemRef.current.getBoundingClientRect();
    const left = itemRef.current.offsetLeft;
    setIndicatorWidth?.(width);
    setIndicatorLeft?.(left);
  };

  useResizeObserver(itemRef, updateIndicatorPosition);

  const handleSelect = () => {
    setValueFromCtx?.(valueFromProps);
  };

  return (
    <RadixToggleItem
      ref={composedRef}
      value={valueFromProps}
      onClick={composeEventHandlers(onClick, handleSelect)}
      css={segmentedControlItemCss}
      {...restProps}
    >
      <Txt typography="subTitle2" fontWeight={isSelected ? 'semibold' : 'medium'}>
        {children}
      </Txt>
    </RadixToggleItem>
  );
});

SegmentedControlItem.displayName = 'SegmentedControl.Item';
