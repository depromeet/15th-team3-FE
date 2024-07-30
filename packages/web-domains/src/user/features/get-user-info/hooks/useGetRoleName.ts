import { usePathname } from 'next/navigation';

export const useGetRoleName = () => {
  const pathName = usePathname();

  const roleName = pathName.includes('owner') ? '모임장' : '모임원';

  return { roleName };
};
