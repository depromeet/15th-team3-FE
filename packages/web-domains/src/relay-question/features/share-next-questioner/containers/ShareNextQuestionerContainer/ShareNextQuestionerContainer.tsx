'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Link from 'next/link';

import { ShareGroupShareIcon } from '../../../../assets/ShareGroupShareIcon';
import { ShareNextQuestionerBackground } from '../../../../assets/ShareNextQuestionerBackground';
import { useModal } from '../../../../hooks/useModal';
import { KakaoShareOpenGraphKeyType } from '../../../../utils/shareToKakao';
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
      componentProps: { title: '다음 릴레이 질문인에게', openGraphKey: 'nextQuestioner' as KakaoShareOpenGraphKeyType },
    });
  };

  return (
    <section css={wrapperCss}>
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
          <Link href="/answer/opening">
            <Button variant="sub">제일 먼저 답변하기</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
