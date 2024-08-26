import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';
import { useGetIsModifyPage } from '@/about-me/features/hooks/useGetIsModifyPage';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

type TabType = 'about-me' | 'answered-questions';

export const useMyprofileService = () => {
  const segmentedRef = useRef<{ onMutate: (meetingId?: number) => void }>(null);
  const { meetingId } = useSetCurrentMeeting();
  const isModifyPage = useGetIsModifyPage();
  const router = useRouter();

  const [tab, setTab] = useState<TabType>(isModifyPage ? 'answered-questions' : 'about-me');

  const handleTab = (value: string) => {
    setTab(value as TabType);
  };

  const { data: myData } = useGetMemberMe({ meetingId: meetingId!, options: { staleTime: 0 } });

  const { data: answers } = useGetAnswersMe({ meetingId: meetingId!, options: { staleTime: 0 } });

  const handleMoveToModifyPage = () => {
    router.push(`/home/me/modify`);
  };

  const handleModify = () => {
    // NOTE: 답변이 없을 경우 요청을 하지 않고 라우팅만 처리하기 위해 추가
    if (answers.contents.length === 0) {
      router.push('/home/me');
      return;
    }
    segmentedRef.current?.onMutate(meetingId);
  };

  return {
    segmentedRef,
    data: myData,
    answers,
    tab,
    handleTab,
    meetingId,
    isModifyPage,
    handleModify,
    handleMoveToModifyPage,
  };
};
