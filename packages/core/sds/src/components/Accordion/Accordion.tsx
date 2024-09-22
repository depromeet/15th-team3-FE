import { forwardRef, HTMLAttributes, useCallback } from 'react';

import { useControllableState } from '../../hooks';

import { AccordionContent } from './Content';
import { AccordionProvider } from './context';
import { AccordionItem } from './Item';
import { AccordionTrigger } from './Trigger';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  value?: Array<string>;
  defaultValue?: Array<string>;
  onValueChange?: (value: Array<string>) => void;
}

const AccordionImpl = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => {
  const { value: valueFromProps, defaultValue, onValueChange, ...restProps } = props;

  const [value = [], setValue] = useControllableState({
    prop: valueFromProps,
    defaultProp: defaultValue,
    onChange: onValueChange,
  });

  const handleItemOpen = useCallback(
    (itemValue: string) => {
      setValue((prev = []) => [...prev, itemValue]);
    },
    [setValue],
  );

  const handleItemClose = useCallback(
    (itemValue: string) => {
      setValue((prev) => prev?.filter((value) => value !== itemValue));
    },
    [setValue],
  );

  return (
    <AccordionProvider value={value} onItemOpen={handleItemOpen} onItemClose={handleItemClose}>
      <div ref={ref} {...restProps} />
    </AccordionProvider>
  );
});

AccordionImpl.displayName = 'Accordion';

export const Accordion = Object.assign(AccordionImpl, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
