import { useParams } from 'next/navigation';

type Params = {
  [key: string]: string | string[];
};

const convertValue = (value: string | number | string[]) => {
  if (Array.isArray(value)) {
    return value.map((item) => (!isNaN(Number(item)) ? Number(item) : item));
  }
  return value !== undefined && !isNaN(Number(value)) ? Number(value) : value;
};

export const useConvertTypeParams = <T extends Params>() => {
  const params = useParams<T>();

  const converted = Object.entries(params).map(([key, value]) => [key, convertValue(value)]);

  return Object.fromEntries(converted);
};
