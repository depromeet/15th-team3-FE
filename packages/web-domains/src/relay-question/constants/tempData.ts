import PNGQuestionImage1 from '../assets/png/question-image-1.png';
import { RelayQuestionContent } from '../features/select-relay-question/types';

let tempId = 1;

export const tempGetRelayQuestionList = (): RelayQuestionContent[] =>
  new Array(10).fill({
    questionId: tempId++,
    questionImageFileUrl: PNGQuestionImage1,
    title: '국내 여행지 중에서 추천하고 싶은 곳은?',
    usedCount: 12,
  });

export const tempGetMeetingMember = () =>
  new Array(10).fill({
    meetingMemberId: tempId++,
    name: '장종오',
    profileImageFileUrl: PNGQuestionImage1,
    role: 'admin',
  });
