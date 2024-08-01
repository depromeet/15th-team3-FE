import dayjs from 'dayjs';

export const getRemainTime = (time: number | string | Date) => {
  const expiredTime = dayjs(time).add(4, 'hour').valueOf();
  const currentTime = dayjs().valueOf();

  const remainTime = expiredTime - currentTime;

  return Date.now() + remainTime;
};
