export const getWebDomain = () => {
  const NEXT_PUBLIC_STAGE = process.env.NEXT_PUBLIC_STAGE;

  switch (NEXT_PUBLIC_STAGE) {
    case 'production':
      return 'https://moring.one';
    case 'development':
      return 'https://dev.moring.one';
  }

  return 'https://local.moring.one:3000';
};
