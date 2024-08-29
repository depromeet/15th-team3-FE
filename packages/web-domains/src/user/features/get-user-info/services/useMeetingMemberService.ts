import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useCreateMeetingMember, Params } from '@/common/apis/queries/useCreateMeetingMember';
import { MEETING_INFO_QUERY_KEY } from '@/home/common/apis/queries/useGetMeetingName';

export const useMeetingMemberService = () => {
  const router = useRouter();

  const { mutateAsync: createMeetingMember, isPending } = useCreateMeetingMember();
  const queryClient = useQueryClient();

  const participateMeeting = async (params: Params) => {
    if (!isPending) {
      await createMeetingMember(params, {
        onSuccess: () => {
          if (params.role === 'MEMBER') {
            router.push(`/user/member/closing?inviteCode=${params.inviteCode}`);
          }
          // 오너로 가입된 경우
          if (params.role === 'OWNER') {
            queryClient.invalidateQueries({ queryKey: [MEETING_INFO_QUERY_KEY] });
            router.push(`/meeting/new/closing?inviteCode=${params.inviteCode}`);
          }
        },
        onError: (res) => {
          if (res.response?.status === 404) {
            alert('모임을 찾을 수 없습니다.');
          }
          if (res.response?.status === 409) {
            alert('이미 가입된 모임입니다.');
          }
        },
      });
    }
  };

  return { participateMeeting };
};
