import { useId } from '@sambad/react-utils';
import { forwardRef, HTMLAttributes } from 'react';

import { accordionItemStateAttribute } from './constants';
import { AccordionItemProvider, useAccordionContext } from './context';
import { itemCss } from './styles';

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>((props, ref) => {
  const { value: valueFromProps, ...restProps } = props;
  const { value: valueFromCtx } = useAccordionContext();

  const open = (valueFromProps && valueFromCtx?.includes(valueFromProps)) || false;
  const state = open ? 'open' : 'closed';

  const triggerId = useId();

  return (
    <AccordionItemProvider open={open} triggerId={triggerId} value={valueFromProps}>
      <div ref={ref} {...accordionItemStateAttribute.attribute(state)} css={itemCss} {...restProps} />
    </AccordionItemProvider>
  );
});

AccordionItem.displayName = 'Accordion.Item';
