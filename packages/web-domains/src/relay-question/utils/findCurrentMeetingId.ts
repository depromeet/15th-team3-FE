import { MyMeetingsResponse } from '../features/start-relay-question/types';

// TODO: meetingId 동적 추출 로직 업데이트
export const findCurrentMeetingId = (meetings: MyMeetingsResponse | undefined) => {
  return meetings?.meetings[0]?.meetingId!;
};
