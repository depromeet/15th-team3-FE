import { colors } from '@sds/theme';
import { composeEventHandlers } from '@sds/utils';
import { forwardRef, HTMLAttributes } from 'react';

import { Icon } from '../Icon';

import { arrowIconAttribute } from './constants';
import { useAccordionContext, useAccordionItemContext } from './context';
import { triggerCss } from './styles';

export interface AccordionTriggerProps extends HTMLAttributes<HTMLDivElement> {}

export const AccordionTrigger = forwardRef<HTMLDivElement, AccordionTriggerProps>((props, ref) => {
  const { children, onClick, ...restProps } = props;
  const { value: valueFromCtx, open, triggerId } = useAccordionItemContext();
  const { onItemClose, onItemOpen } = useAccordionContext();

  const handleItemOpen = () => {
    if (!open) {
      onItemOpen?.(valueFromCtx);
    } else {
      onItemClose?.(valueFromCtx);
    }
  };

  return (
    <div
      ref={ref}
      id={triggerId}
      css={triggerCss}
      onClick={composeEventHandlers(onClick, handleItemOpen)}
      {...restProps}
    >
      {children}
      <Icon name="angle-small-up" color={colors.grey600} {...arrowIconAttribute.attribute} />
    </div>
  );
});

AccordionTrigger.displayName = 'Accordion.Trigger';
