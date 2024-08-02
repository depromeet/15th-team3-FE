import { useRouter } from 'next/navigation';

import { useCreateMeetingMember, Params } from '@/common/apis/queries/useCreateMeetingMember';

export const useMeetingMemberService = () => {
  const router = useRouter();
  const { mutateAsync } = useCreateMeetingMember();

  const handleParticipateMeeting = async (params: Params) => {
    await mutateAsync(params, {
      onSuccess: (res) => {
        // console.log(res.data.meetingId);
        console.log(res);
        // 멤버로 가입된 경우
        router.push('/user/member/closing');

        // 오너로 가입된 경우
      },
      // 에러 처리 필요
      onError: (res) => {
        // 세부사항 Error 코드로 비교
        if (res.response?.status === 404) {
          alert('모임을 찾을 수 없습니다.');
        }
        if (res.response?.status === 409) {
          alert('이미 가입된 모임입니다.');
        }
      },
    });
  };

  return { handleParticipateMeeting };
};
