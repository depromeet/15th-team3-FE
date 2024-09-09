import { Txt } from '@sambad/sds/components';
import { size, colors } from '@sambad/sds/theme';

export const InviteCodeHeader = () => {
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
        <Txt as="strong" color={colors.primary500} typography="heading1">
          모링
        </Txt>
        에 오신걸 환영해요!
      </Txt>
      <Txt as="p" typography="body3" color={colors.grey600} css={{ marginTop: size['6xs'] }}>
        모임장이 보내준 초대 코드를
      </Txt>
      <Txt as="p" typography="body3" color={colors.grey600}>
        입력해주세요
      </Txt>
    </header>
  );
};
