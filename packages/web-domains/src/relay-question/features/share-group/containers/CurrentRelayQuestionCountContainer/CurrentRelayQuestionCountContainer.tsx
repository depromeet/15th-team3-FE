'use client';

import { Button, Icon, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

import { KakaoShareModal, getWebDomain } from '@/common';

import { ShareGroupBackground } from '../../../../assets/ShareGroupBackground';
import { ShareGroupCheckIcon } from '../../../../assets/ShareGroupCheckIcon';
import { CurrentQuestionInfo } from '../../components/CurrentQuestionInfo/CurrentQuestionInfo';
import { useActiveQuestionQuery } from '../../hooks/useActiveQuestionQuery';

import {
  backgroundWrapperCss,
  buttonWrapperCss,
  firstButtonCss,
  textWrapperCss,
  wrapperCss,
} from './CurrentRelayQuestionCountContainer.styles';

const KAKAO_IMAGE_URL = 'https://file.moring.one/defaults/new_question_narrow.png';

export const CurrentRelayQuestionCountContainer = () => {
  const { meetingId } = useParams<{ meetingId: string }>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { activeQuestion } = useActiveQuestionQuery(Number(meetingId));

  const handleOpenShare = () => {
    setIsOpenModal(true);
  };

  if (!activeQuestion) return;

  return (
    <>
      <section css={wrapperCss}>
        <div>
          <div css={textWrapperCss}>
            <ShareGroupCheckIcon css={{ margin: `${size['5xs']} 0` }} />
            <Txt color={colors.black} typography="heading1" fontWeight="bold" css={{ marginTop: size['7xs'] }}>
              릴레이 질문을 다 만들었어요!
            </Txt>
            <Txt
              color={colors.grey600}
              typography="body3"
              fontWeight="regular"
              style={{ textAlign: 'center', marginTop: size['6xs'] }}
            >
              친해지고 싶은 삼봤드의 모험 모임원들에게 <br />
              질문을 공유해 보세요
            </Txt>
          </div>

          <div css={backgroundWrapperCss}>
            <ShareGroupBackground />
            <CurrentQuestionInfo
              questionCount={activeQuestion.questionNumber}
              questioner={{
                name: activeQuestion.targetMember?.name,
                imageUrl: activeQuestion.targetMember?.profileImageFileUrl,
              }}
            />
          </div>
        </div>

        <div css={buttonWrapperCss}>
          <Button css={firstButtonCss} onClick={handleOpenShare} size="large" leftDecor={<Icon name="upload" />}>
            단톡방에 공유하기
          </Button>
          <Link href={`/${meetingId}/share-next-questioner`}>
            <Button variant="sub" size="large">
              다음
            </Button>
          </Link>
        </div>
      </section>

      <KakaoShareModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        topTitle="모임원들에게 릴레이 질문을"
        bottomTitle="공유해 보세요!"
        shareImageUrl={KAKAO_IMAGE_URL}
        shareDescription={`새로운 질문이 도착했어요! 지금 바로 답변 하러 가볼까요? 다음 질문인은 ${activeQuestion.targetMember.name}님이에요`}
        shareLink={`${getWebDomain()}/${meetingId}/answer/opening`}
      />
    </>
  );
};
