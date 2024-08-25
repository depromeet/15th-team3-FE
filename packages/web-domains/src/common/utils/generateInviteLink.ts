import { getWebDomain } from './getWebDomain';

export const generateInviteLink = (inviteCode?: string | null) => {
  if (!inviteCode) {
    return null;
  }

  const domain = getWebDomain();

  return `${domain}/meeting/participate/closing?inviteCode=${inviteCode}`;
};
