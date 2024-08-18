const STAGE = process.env.NEXT_PUBLIC_STAGE;

export const getWebDomain = () => {
  console.log(process.env.NEXT_PUBLIC_STAGE);
  console.log({ STAGE });

  if (STAGE === 'production') {
    console.log('prod');
    return 'https://moring.one';
  }

  if (STAGE === 'development') {
    console.log('dev');
    return 'https://dev.moring.one';
  }

  return 'https://local.moring.one:3000';
};
