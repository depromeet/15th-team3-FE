import { useRouter } from 'next/navigation';

import { Params, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';

export const useCreateMeetingService = () => {
  const router = useRouter();
  const { mutateAsync: createMeeting } = useCreateMeeting();

  const handleCreateMeeting = async (params: Params) => {
    await createMeeting(params, {
      onSuccess: (res) => {
        router.push(`new/closing?inviteCode=${res.data.inviteCode}`);
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  return { handleCreateMeeting };
};
