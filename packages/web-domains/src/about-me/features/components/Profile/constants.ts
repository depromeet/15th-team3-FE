const wavingAcceptedMemberAttrKey = 'data-sambad-waving-accepted-member';
export const wavingAcceptedMemberAttribute = {
  attribute: (isAccepted: boolean) => ({
    [wavingAcceptedMemberAttrKey]: isAccepted ? '' : undefined,
  }),
  querySelector: `[${wavingAcceptedMemberAttrKey}=""]`,
};
