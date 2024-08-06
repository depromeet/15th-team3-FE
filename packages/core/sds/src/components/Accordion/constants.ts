const arrowIconAttributeKey = 'data-sambad-arrow-icon';
export const arrowIconAttribute = {
  attribute: {
    [arrowIconAttributeKey]: '',
  },
  querySelector: `[${arrowIconAttributeKey}=""]`,
};

const contentAttributeKey = 'data-sambad-accordion-content';
export const contentAttribute = {
  attribute: {
    [contentAttributeKey]: '',
  },
  querySelector: `[${contentAttributeKey}=""]`,
};

const accordionItemStateAttributeKey = 'data-sambad-accordion-state';
export const accordionItemStateAttribute = {
  attribute: (state: 'closed' | 'open') => ({
    [accordionItemStateAttributeKey]: state,
  }),
  querySelector: {
    closed: `[${accordionItemStateAttributeKey}="closed"]`,
    open: `[${accordionItemStateAttributeKey}="open"]`,
  },
};
