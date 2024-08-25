import { UseQueryOptionsExcludedQueryKey } from '@sambad/types-utils/tanstack';
import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

import { Http } from '../../../../common/apis/base.api';
import { InviteCodeResponseType } from '../schema/InviteCode.schema';

type Params = { meetingId: number };
interface Args {
  params: Params;
  options?: UseQueryOptionsExcludedQueryKey<InviteCodeResponseType | undefined>;
}

export const INVITE_CODE_QUERY_KEY = 'INVITE_CODE_QUERY_KEY';

export const useGetInviteCode = ({ params, options }: Args) => {
  return useQuery({
    queryKey: [INVITE_CODE_QUERY_KEY, params.meetingId],
    queryFn: async () => {
      try {
        const data = await getInviteCode(params);
        return data;
      } catch (error) {
        if (isAxiosError(error)) {
          console.log(error);
        }
      }
    },
    ...options,
  });
};

export async function getInviteCode(params: Params, cookie?: ReadonlyRequestCookies): Promise<InviteCodeResponseType> {
  const { meetingId } = params;

  const data = await Http.GET<InviteCodeResponseType>(`/v1/meetings/${meetingId}/code`, {
    headers: {
      Cookie: cookie?.toString(),
    },
  });

  return data;
}
