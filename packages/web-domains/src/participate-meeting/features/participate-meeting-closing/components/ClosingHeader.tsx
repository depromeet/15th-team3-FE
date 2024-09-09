import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';

interface ClosingHeaderProps {
  meetingName?: string;
}

export const ClosingHeader = ({ meetingName }: ClosingHeaderProps) => {
  if (!meetingName) {
    return null;
  }

  return (
    <header
      css={{
        marginTop: size['4xl'],
        padding: `${size.xl} ${size['2xs']} ${size.xs}`,
        textAlign: 'center',
        '@media (max-width: 320px)': {
          marginTop: 0,
        },
      }}
    >
      <Txt as="h1" color={colors.black} typography="heading1">
        {meetingName && (
          <Txt as="strong" color={colors.primary500} typography="heading1">
            {meetingName}
          </Txt>
        )}
        에
      </Txt>
      <Txt as="h2" color={colors.black} typography="heading1">
        초대되었어요!
      </Txt>
      <Txt as="p" typography="body3" color={colors.grey600} css={{ marginTop: size['6xs'] }}>
        간단한 자기 소개를 입력한 후
      </Txt>
      <Txt as="p" typography="body3" color={colors.grey600}>
        모임에 가입하여 릴레이 질문을 즐겨보세요
      </Txt>
    </header>
  );
};
