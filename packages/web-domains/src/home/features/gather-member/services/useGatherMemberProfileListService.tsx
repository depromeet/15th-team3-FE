import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

import { getWebDomain } from '@/common';
import { generateInviteLink } from '@/common/utils/generateInviteLink';
import { getKeywordRegex } from '@/common/utils/getKeywordRegex';
import { useGetInviteCode } from '@/home/common/apis/queries/useGetInviteCode';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';
import { MemberType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';
import { HomeAtoms } from '@/home/common/atoms/home.atom';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [gatherMemberList, setGatherMemberList] = useState<MemberType[]>([]);
  const meetingId = currentMeeting?.meetingId;

  const { data } = useGetGatherMemberList({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
  });

  const { data: inviteCode } = useGetInviteCode({
    params: { meetingId: meetingId! },
    options: { enabled: !!meetingId },
  });

  const { data: meetingInfo } = useGetMeetingInfo({});

  const meetingName = meetingInfo?.meetings.find((meeting) => meeting.meetingId === Number(meetingId))?.name;

  const handleChangeSearchInput = (value: string) => {
    setSearchInput(value);
  };

  const handleChangeGatherMemberList = (keyword: string) => {
    const trimKeyword = keyword.trim();
    const regex = getKeywordRegex(trimKeyword);

    if (data?.contents) {
      const filteredMemberList = data.contents.filter(({ name }) => regex.test(name));
      setGatherMemberList(filteredMemberList);
    }
  };

  const inviteModalOpen = () => {
    setIsOpen(true);
  };

  const inviteModalClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (data?.contents) {
      setGatherMemberList(data?.contents);
    }
  }, [data]);

  useEffect(() => {
    handleChangeGatherMemberList(searchInput);
  }, [searchInput]);

  return {
    meetingId,
    meetingName,
    isOpen,
    inviteLink: generateInviteLink(inviteCode?.code) ?? `${getWebDomain()}`,
    searchInput,
    gatherMemberList,
    handleChangeSearchInput,
    inviteModalOpen,
    inviteModalClose,
  };
};
