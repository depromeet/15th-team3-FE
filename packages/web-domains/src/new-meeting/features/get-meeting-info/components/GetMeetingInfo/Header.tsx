import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

export const Header = () => {
  return (
    <header css={{ padding: '40px 20px 0' }}>
      <Txt as="h1" typography="heading1" color={colors.black}>
        <Txt as="strong" typography="heading1" color={colors.primary500}>
          모임 정보
        </Txt>
        를
        <Txt as="p" typography="heading1" color={colors.black}>
          간단하게 적어보세요!
        </Txt>
      </Txt>
    </header>
  );
};
