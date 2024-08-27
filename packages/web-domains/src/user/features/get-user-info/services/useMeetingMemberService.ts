import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { useCreateMeetingMember, Params } from '@/common/apis/queries/useCreateMeetingMember';
import { useUpdateLastMeeting } from '@/home/common/apis/mutations/useUpdateLastMeeting';
import { MEETING_INFO_QUERY_KEY } from '@/home/common/apis/queries/useGetMeetingName';

export const useMeetingMemberService = () => {
  const router = useRouter();
  const { mutateAsync: createMeetingMember } = useCreateMeetingMember();
  const { mutateAsync: updateLastMeeting } = useUpdateLastMeeting();
  const queryClient = useQueryClient();

  const participateMeeting = async (params: Params) => {
    const { data } = await createMeetingMember(params, {
      onError: (res) => {
        if (res.response?.status === 404) {
          alert('모임을 찾을 수 없습니다.');
        }
        if (res.response?.status === 409) {
          alert('이미 가입된 모임입니다.');
        }
      },
    });
    await updateLastMeeting(
      { meetingId: data.meetingId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: [MEETING_INFO_QUERY_KEY] });
          // 멤버로 가입된 경우
          if (params.role === 'MEMBER') {
            router.push(`/user/member/closing?inviteCode=${params.inviteCode}`);
          }
          // 오너로 가입된 경우
          if (params.role === 'OWNER') {
            router.push(`/meeting/new/closing?inviteCode=${params.inviteCode}`);
          }
        },
      },
    );
  };

  return { participateMeeting };
};
