import { useRouter } from 'next/navigation';

import { Params as CreateMeetingParams, useCreateMeeting } from '@/common/apis/queries/useCreateMeeting';
import {
  Params as CreateMeetingMemberParams,
  useCreateMeetingMember,
} from '@/common/apis/queries/useCreateMeetingMember';
import useCustomSearchParams from '@/new-meeting/common/hooks/useCustomSearchParams';
import { dateFormat } from '@/new-meeting/common/utils/date';

export const useCreateMeetingService = () => {
  const router = useRouter();

  const { getSearchParamsObject } = useCustomSearchParams();
  const searchParamsObject = getSearchParamsObject();

  const { mutateAsync: createMeeting } = useCreateMeeting();

  const { mutateAsync: createMeetingMember } = useCreateMeetingMember();

  const handleCreateMeeting = async (params: CreateMeetingParams) => {
    await createMeeting(params, {
      onSuccess: (createMeetingRes) => {
        const _params = {
          ...searchParamsObject,
          role: 'OWNER',
          hobbyIds: searchParamsObject.hobbyIds ? searchParamsObject.hobbyIds.split(',').map(Number) : [],
          birth: dateFormat(searchParamsObject.birth),
          code: createMeetingRes.data.inviteCode,
        } as CreateMeetingMemberParams;

        createMeetingMember(_params, {
          onSuccess: (createMeetingMemberRes) => {
            console.log(createMeetingMemberRes);
            router.push(`new/closing?inviteCode=${createMeetingRes.data.inviteCode}`);
          },
          onError: (res) => {
            console.log(res);
          },
        });
      },
      onError: (res) => {
        console.log(res);
      },
    });
  };

  return { handleCreateMeeting };
};
