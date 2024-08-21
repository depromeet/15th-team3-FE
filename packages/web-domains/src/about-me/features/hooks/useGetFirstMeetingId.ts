import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';

export const useGetFirstMeetingId = () => {
  const { data } = useGetMeetings();
  // NOTE: 하나의 모임에 참여할 수 있는 현재 스펙에서 첫 번째 meetingId를 가져옴
  const meetingId = data?.meetings[0]?.meetingId || -1;

  return { meetingId };
};
