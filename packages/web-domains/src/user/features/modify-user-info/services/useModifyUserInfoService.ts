import { useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';

import { MEMBER_ME_QUERY_KEY } from '@/about-me/common/apis/queries/useGetMemberMe';
import { Params as ModifyUserInfoParams, useModifyUserInfo } from '@/user/common/api/mutations/useModifyUserInfo';
import { useQueryString } from '@/user/common/hooks/useQueryString';
import { dateFormat } from '@/user/common/utils/format';

export const useModifyUserInfoService = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { meetingId } = useParams();
  const { getQueryStringObj } = useQueryString();
  const queryStringObj = getQueryStringObj();

  const { mutate: modifyUserInfo } = useModifyUserInfo({
    options: {
      onSuccess: (_, varables) => {
        queryClient.invalidateQueries({ queryKey: [MEMBER_ME_QUERY_KEY, varables.meetingId] });
        // Todo: meetingId 변경
        router.push('/about/me');
      },
      onError: (error) => {
        console.log(error);
      },
    },
  });

  const handleModifyUserInfo = async ({ introduction }: { introduction?: string }) => {
    if (!meetingId) {
      return;
    }

    const params = {
      ...queryStringObj,
      meetingId: Number(meetingId),
      name: queryStringObj.userName,
      hobbyIds: queryStringObj.hobbyIds ? queryStringObj.hobbyIds.split(',').map(Number) : [],
      birth: dateFormat(queryStringObj.birth),
      // Todo: 삭제
      role: 'OWNER',
    } as ModifyUserInfoParams;

    if (introduction) {
      params.introduction = introduction.trim();
    }

    modifyUserInfo(params);
  };

  return { handleModifyUserInfo };
};
