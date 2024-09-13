import { If } from '@sambad/react-utils';
import { Skeleton, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { Confetti } from '@/common';

import { useGetMeetingNameService } from '../services/useGetMeetingNameService';

interface ClosingMessageProps {
  inviteCode: string;
}

export const ClosingMessage = (props: ClosingMessageProps) => {
  const { inviteCode } = props;

  const { data, isLoading, isSuccess } = useGetMeetingNameService({ inviteCode });

  return (
    <>
      <Confetti position={{ top: 0, left: 0 }} height={350} />
      <div
        css={{
          position: 'absolute',
          top: '108px',
          width: '100%',
          zIndex: '1',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          '@media (max-width: 365px)': {
            top: '64px',
          },
        }}
      >
        <div css={{ transform: 'translate(0, 20%)' }}>
          {data?.name && (
            <Txt as="h1" color={colors.primary500} typography="heading1">
              {data.name}
            </Txt>
          )}
          <Txt as="h2" color={colors.black} typography="heading1">
            모임을 만들었어요!
          </Txt>
          <Txt as="p" color={colors.grey600} typography="body3" css={{ marginTop: size['6xs'] }}>
            이제 모임원을 초대해보세요!
          </Txt>
        </div>

        <div
          css={{
            position: 'absolute',
            width: '90%',
            aspectRatio: '3/2',
            maxWidth: '500px',
          }}
        >
          <div css={{ transform: 'translate(0, 20%)' }}>
            <If condition={isLoading}>
              <Skeleton width={200} height={36} />
            </If>
            <If condition={isSuccess}>
              {data?.name && (
                <Txt as="h1" color={colors.primary500} typography="heading1">
                  {data.name}
                </Txt>
              )}
            </If>
            <Txt as="h2" color={colors.black} typography="heading1">
              모임을 만들었어요!
            </Txt>
            <Txt as="p" color={colors.grey600} typography="body3" css={{ marginTop: size['6xs'] }}>
              이제 모임원을 초대해보세요!
            </Txt>
          </div>
        </div>
      </div>
    </>
  );
};
