import { usePathname } from 'next/navigation';

export const useGetRoleName = () => {
  const pathName = usePathname();

  const role = pathName.includes('owner') ? { name: '모임장', params: 'OWNER' } : { name: '모임원', params: 'MEMBER' };

  return role;
};
