import { MeetingIdListResponseType } from '@/home/common/apis/schema/Meeting.schema';

/**
 *
 * @param meetingData
 * @returns
 * 데이터 없을 때 null 반환
 * lastMeetingId가 있고 데이터에서 찾았을 때,
 * 존재하면 마지막 방문 미팅 반환
 * 없다면 처음 인덱스 미팅 반환 -> 왜 처음 인덱스를 반환하는가? : 미팅이 삭제될 경우를 대비함
 * lastMeetingId가 없다면
 * 처음 인덱스 미팅 반환
 */
export const getCurrentMeeting = (meetingData: MeetingIdListResponseType) => {
  if (!meetingData) {
    return null;
  }

  const firstIndexMeeting = meetingData.meetings[0];

  if (meetingData.lastMeetingId) {
    const lastVisitedMeeting = meetingData.meetings.find((meeting) => meeting.meetingId === meetingData.lastMeetingId);
    return lastVisitedMeeting ?? firstIndexMeeting ?? null;
  }

  return firstIndexMeeting ?? null;
};
