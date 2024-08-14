'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { ShareGroupShareIcon } from '../../../../assets/ShareGroupShareIcon';
import { ShareNextQuestionerBackground } from '../../../../assets/ShareNextQuestionerBackground';
import { Toast } from '../../../../common/Toast';
import { useModal } from '../../../select-relay-question/hooks/useModal';
import { ShareRelayQuestion } from '../../../share-group/containers/ShareRelayQuestion/ShareRelayQuestion';

import {
  buttonWrapperCss,
  footerWrapperCss,
  headingWrapperCss,
  shareButtonCss,
  wrapperCss,
} from './ShareNextQuestionerContainer.styles';

export const ShareNextQuestionerContainer = () => {
  const openModal = useModal();

  const handleOpenShare = () => {
    openModal({
      component: ShareRelayQuestion,
      componentProps: { title: '다음 릴레이 질문인에게' },
    });
  };

  return (
    <section css={wrapperCss}>
      <Toast isOpen showTime={5000}>
        asdf
      </Toast>
      <div css={headingWrapperCss}>
        <Txt color={colors.black} typography="heading1" fontWeight="bold">
          다음 릴레이 질문을 만드는
        </Txt>
        <Txt color={colors.black} typography="heading1" fontWeight="bold">
          <Txt color={colors.primary500} typography="heading1" fontWeight="bold">
            질문인
          </Txt>
          에게 알려보세요!
        </Txt>
      </div>

      <div css={footerWrapperCss}>
        <ShareNextQuestionerBackground />
        <div css={buttonWrapperCss}>
          <Button css={shareButtonCss} onClick={handleOpenShare}>
            <ShareGroupShareIcon css={{ marginRight: size['6xs'] }} />
            다음 질문인에게 공유하기
          </Button>
          <Button variant="sub">제일 먼저 답변하기</Button>
        </div>
      </div>
    </section>
  );
};
