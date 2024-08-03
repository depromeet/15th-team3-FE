import { useRouter } from 'next/navigation';

import { Params, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';

export const useCreateMeetingService = () => {
  const router = useRouter();
  const { mutateAsync } = useCreateMeeting();

  const handleCreateMeeting = async (params: Params) => {
    await mutateAsync(params, {
      onSuccess: (res) => {
        console.log(res);
        router.push(`new/closing?inviteCode=${res.data.inviteCode}`);
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  return { handleCreateMeeting };
};
