import { useAtomValue } from 'jotai';
import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

import { getWebDomain } from '@/common';
import { generateInviteLink } from '@/common/utils/generateInviteLink';
import { getKeywordRegex } from '@/common/utils/getKeywordRegex';
import { useGetInviteCode } from '@/home/common/apis/queries/useGetInviteCode';
import { useGetMyInfo } from '@/home/common/apis/queries/useGetMyInfo';
import { MemberType } from '@/home/common/apis/schema/useGetProgressingQuestionQuery.type';
import { HomeAtoms } from '@/home/common/atoms/home.atom';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const currentMeeting = useAtomValue(HomeAtoms.currentMeeting);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const [gatherMemberList, setGatherMemberList] = useState<MemberType[]>([]);
  const meetingId = currentMeeting?.meetingId;

  const { data: myInfo } = useGetMyInfo({
    params: { meetingId: meetingId! },
    options: { enabled: !!meetingId },
  });

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
    if (data?.contents && myInfo) {
      setGatherMemberList(data?.contents);
    }
  }, [data, myInfo]);

  useEffect(() => {
    let filter;
    filter = debounce(handleChangeGatherMemberList, 300);
    filter(searchInput);

    return () => {
      filter = null;
    };
  }, [searchInput]);

  return {
    isOpen,
    inviteLink: generateInviteLink(inviteCode?.code) ?? `${getWebDomain()}`,
    searchInput,
    gatherMemberList,
    handleChangeSearchInput,
    inviteModalOpen,
    inviteModalClose,
  };
};
