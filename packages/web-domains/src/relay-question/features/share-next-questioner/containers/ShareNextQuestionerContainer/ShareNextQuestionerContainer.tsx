'use client';

import { Button, Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';
import { useState } from 'react';

import { KakaoShareModal, getWebDomain } from '@/common';
import { useActiveQuestionQuery } from '@/relay-question/features/share-group/hooks/useActiveQuestionQuery';
import { useMyMeetingsQuery } from '@/relay-question/features/start-relay-question/hooks/queries/useMyMeetingsQuery';
import { findCurrentMeetingId } from '@/relay-question/utils/findCurrentMeetingId';

import { ShareNextQuestionerBackground } from '../../../../assets/ShareNextQuestionerBackground';

import {
  buttonWrapperCss,
  footerWrapperCss,
  headingWrapperCss,
  shareButtonCss,
  wrapperCss,
} from './ShareNextQuestionerContainer.styles';

const KAKAO_IMAGE_URL = 'https://file.moring.one/defaults/new_question_narrow.png';

export const ShareNextQuestionerContainer = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { myMeetings } = useMyMeetingsQuery();
  const { activeQuestion } = useActiveQuestionQuery(findCurrentMeetingId(myMeetings));

  const handleOpenShare = () => {
    setIsOpenModal(true);
  };

  return (
    <>
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
            <Button css={shareButtonCss} onClick={handleOpenShare} size="large" leftDecor={<Icon name="upload" />}>
              다음 질문인에게 공유하기
            </Button>
            <Link href="/answer/opening">
              <Button variant="sub">제일 먼저 답변하기</Button>
            </Link>
          </div>
        </div>
      </section>

      <KakaoShareModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        topTitle="다음 릴레이 질문인에게"
        bottomTitle="공유해 보세요!"
        shareImageUrl={KAKAO_IMAGE_URL}
        shareDescription={`다음 질문인은 ${activeQuestion?.targetMember.name}님이에요! 현재 진행 중인 릴레이 질문이 끝나면 질문을 꼭! 생성해주세요`}
        shareLink={`${getWebDomain()}/answer/opening`}
      />
    </>
  );
};
