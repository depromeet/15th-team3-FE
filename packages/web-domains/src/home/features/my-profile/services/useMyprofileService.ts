import { useState } from 'react';

import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { useGetMemberMe } from '@/about-me/common/apis/queries/useGetMemberMe';
import { useSetCurrentMeeting } from '@/home/common/hooks/useSetCurrentMeeting';

type TabType = 'about-me' | 'answered-questions';

export const useMyprofileService = () => {
  const { meetingId } = useSetCurrentMeeting();

  const [tab, setTab] = useState<TabType>('about-me');

  const handleTab = (value: string) => {
    setTab(value as TabType);
  };

  const data = useGetMemberMe({ meetingId: meetingId!, options: { staleTime: 0 } });

  const answers = useGetAnswersMe({ meetingId: meetingId!, options: { staleTime: 0 } });

  return { data: data.data, answers: answers.data, tab, handleTab, meetingId };
};
