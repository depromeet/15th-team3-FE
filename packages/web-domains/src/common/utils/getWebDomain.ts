const STAGE = process.env.NEXT_PUBLIC_STAGE;

export const getWebDomain = () => {
  if (STAGE === 'production') {
    return 'https://moring.one';
  }

  if (STAGE === 'development') {
    return 'https://dev.moring.one';
  }

  return 'https://local.moring.one:3000';
};
