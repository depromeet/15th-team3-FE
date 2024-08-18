// const STAGE = process.env.NEXT_PUBLIC_STAGE;

export const getWebDomain = () => {
  console.log(process.env.NEXT_PUBLIC_STAGE);

  console.log('test');

  switch (process.env.NEXT_PUBLIC_STAGE) {
    case 'production':
      return 'https://moring.one';
    case 'development':
      return 'https://dev.moring.one';
  }

  return 'https://local.moring.one:3000';
};
