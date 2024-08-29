const subTitleAttributeKey = 'data-sambad-sub-title';
export const subTitleAttribute = {
  attribute: {
    [subTitleAttributeKey]: '',
  },
  querySelector: `[${subTitleAttributeKey}=""]`,
};

const checkboxAttributeKey = 'data-sambad-checkbox';
export const checkboxAttribute = {
  attribute: {
    [checkboxAttributeKey]: '',
  },
  querySelector: `[${checkboxAttributeKey}=""]`,
};

const wavingAcceptedAttributeKey = 'data-sambad-waving-accepted';
export const wavingAcceptedAttribute = {
  attribute: (isAccepted: boolean) => ({
    [wavingAcceptedAttributeKey]: isAccepted ? '' : undefined,
  }),
  querySelector: `[${wavingAcceptedAttributeKey}=""]`,
};
