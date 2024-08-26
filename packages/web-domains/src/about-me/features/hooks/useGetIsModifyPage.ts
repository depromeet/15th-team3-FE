import { usePathname } from 'next/navigation';

export const useGetIsModifyPage = () => {
  const pathname = usePathname();
  return pathname.includes('modify');
};
