import { forwardRef, HTMLAttributes } from 'react';

import { contentAttribute } from './constants';
import { useAccordionItemContext } from './context';

export type AccordionContentProps = HTMLAttributes<HTMLDivElement>;

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContentProps>((props, ref) => {
  const { triggerId } = useAccordionItemContext();

  return <div ref={ref} role="region" aria-labelledby={triggerId} {...contentAttribute.attribute} {...props} />;
});

AccordionContent.displayName = 'Accordion.Content';
