import { buildContext } from '../../utils';

interface Context {
  value?: Array<string>;
  onItemOpen?: (itemValue: string) => void;
  onItemClose?: (itemValue: string) => void;
}

export const [AccordionProvider, useAccordionContext] = buildContext<Context>('Accordion');

interface ItemContext {
  open?: boolean;
  triggerId?: string;
  value: string;
}

export const [AccordionItemProvider, useAccordionItemContext] = buildContext<ItemContext>('Accordion.Item');
