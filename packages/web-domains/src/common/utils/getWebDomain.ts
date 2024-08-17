const STAGE = process.env.NEXT_PUBLIC_STAGE;

export const getWebDomain = () => {
  /**
   * 왜 안됨?
   */
  switch (STAGE) {
    case 'production':
      return 'https://moring.one';
    case 'development':
      return 'https://dev.moring.one';
  }

  return 'https://local.moring.one:3000';
};
