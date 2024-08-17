import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

export const ClosingMessage = () => {
  return (
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 40px 24px' }}>
      <Txt typography="heading1" color={colors.black}>
        답변을 보냈어요!
      </Txt>
      <Txt typography="subTitle2" color={colors.grey600} css={{ marginTop: '8px', textAlign: 'center' }}>
        모든 모임원들이 답변을 완료하거나
      </Txt>
      <Txt typography="subTitle2" color={colors.grey600} css={{ textAlign: 'center' }}>
        질문을 만든지 4시간이 경과되면 결과를 볼 수 있어요.
      </Txt>
    </div>
  );
};
