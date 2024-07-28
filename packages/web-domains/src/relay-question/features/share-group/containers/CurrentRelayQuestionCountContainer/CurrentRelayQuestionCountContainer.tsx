'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { useRouter } from 'next/navigation';

import { ShareGroupBackground } from '../../../../assets/ShareGroupBackground';
import { ShareGroupCheckIcon } from '../../../../assets/ShareGroupCheckIcon';
import { ShareGroupShareIcon } from '../../../../assets/ShareGroupShareIcon';
import { CurrentQuestionInfo } from '../../components/CurrentQuestionInfo/CurrentQuestionInfo';

import {
  backgroundWrapperCss,
  buttonWrapperCss,
  firstButtonCss,
  textWrapperCss,
  wrapperCss,
} from './CurrentRelayQuestionCountContainer.styles';

export const CurrentRelayQuestionCountContainer = () => {
  const router = useRouter();

  const goToShareNextQuestioner = () => {
    router.push('/share-next-questioner');
  };

  return (
    <section css={wrapperCss}>
      <div>
        <div css={textWrapperCss}>
          <ShareGroupCheckIcon css={{ margin: `${size['5xs']} 0` }} />
          <Txt color={colors.black} typography="heading1" fontWeight="bold" style={{ marginTop: size['7xs'] }}>
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
          <ShareGroupBackground style={{ width: '100%' }} />
          <CurrentQuestionInfo questionCount={0} questioner={{ name: '장종오', imageUrl: '' }} />
        </div>
      </div>

      <div css={buttonWrapperCss}>
        <Button css={firstButtonCss}>
          <ShareGroupShareIcon css={{ marginRight: size['6xs'] }} />
          단톡방에 공유하기
        </Button>
        <Button variant="sub" onClick={goToShareNextQuestioner}>
          다음
        </Button>
      </div>
    </section>
  );
};
