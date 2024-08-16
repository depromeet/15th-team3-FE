import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

import { MemberType } from '@/answer/common/apis/schema/useGetProgressingQuestionQuery.type';
import { getKeywordRegex } from '@/common/utils/getKeywordRegex';
import { useGetMeetingInfo } from '@/home/common/apis/queries/useGetMeetingName';

import { useGetGatherMemberList } from '../../../common/apis/queries/useGetGatherMemberList';

export const useGatherMemberProfileListService = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [gatherMemberList, setGatherMemberList] = useState<MemberType[]>([]);
  const { data: meetingInfo } = useGetMeetingInfo({
    options: { gcTime: Infinity },
  });

  const meetingId = meetingInfo?.meetings[0]?.meetingId;

  const { data } = useGetGatherMemberList({
    params: { meetingId: meetingId! },
    options: {
      enabled: !!meetingId,
    },
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

  useEffect(() => {
    if (data?.contents) {
      setGatherMemberList(data?.contents);
    }
  }, [data]);

  useEffect(() => {
    let filter;
    filter = debounce(handleChangeGatherMemberList, 300);
    filter(searchInput);

    return () => {
      filter = null;
    };
  }, [searchInput]);

  return {
    searchInput,
    gatherMemberList,
    handleChangeSearchInput,
  };
};
