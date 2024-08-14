'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import PNGQuestionImage1 from '../../../../assets/png/question-image-1.png';
import { FIRST_STEP } from '../../../../constants';
import { Question } from '../../components/Question/Question';
import { Questioner } from '../../components/Questioner/Questioner';
import { useQueryStringContext } from '../../contexts/QueryStringContext';

import { questionListCss, questionTextBoxCss } from './ContentContainer.styles';

export const ContentContainer = () => {
  const { currentStep } = useQueryStringContext();

  if (currentStep === FIRST_STEP) return <QuestionList />;

  return <NextQuestionerList />;
};

const QuestionList = () => {
  return (
    <section>
      <div css={questionTextBoxCss}>
        <Txt typography="heading1" fontWeight="bold">
          어떤 질문으로 물어볼까요?
        </Txt>
      </div>
      <ul css={questionListCss}>
        {new Array(10)
          .fill({
            imageUrl: PNGQuestionImage1,
            title: '국내 여행지 중에서 추천하고 싶은 곳은?',
            usedCount: 10,
          })
          .map(({ imageUrl, title, usedCount }, index) => (
            <Question key={index} imageUrl={imageUrl} title={title} usedCount={usedCount} />
          ))}
      </ul>
    </section>
  );
};

const NAME = '장종오';

const NextQuestionerList = () => {
  return (
    <section>
      <div css={questionTextBoxCss}>
        <Txt typography="heading1" fontWeight="bold">
          다음 릴레이 질문인은 <br />
          누구로 할까요?
        </Txt>
        <div>
          <Txt typography="subtitle1" fontWeight="semibold">
            {NAME}
          </Txt>
          <Txt color={colors.grey600} typography="body3" fontWeight="regular">
            님이 시작한 릴레이 질문이 끝나면 <br />
            이어서 질문을 할 모임원을 골라보세요!
          </Txt>
        </div>
      </div>
      <ul css={questionListCss}>
        {new Array(10)
          .fill({
            imageUrl: PNGQuestionImage1,
            name: '장종오',
          })
          .map(({ imageUrl, name }, index) => (
            <Questioner key={index} imageUrl={imageUrl} name={name} />
          ))}
      </ul>
    </section>
  );
};
