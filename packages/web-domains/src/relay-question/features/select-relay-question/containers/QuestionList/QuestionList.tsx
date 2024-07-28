'use client';

import { Txt } from '@sambad/sds/components';

import PNGQuestionImage1 from '../../../../assets/png/question-image-1.png';
import { QuestionItem } from '../../components/QuestionItem/QuestionItem';

import { questionListCss, questionTextBoxCss } from './QuestionList.styles';

export const QuestionList = () => {
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
            <QuestionItem key={index} imageUrl={imageUrl} title={title} usedCount={usedCount} />
          ))}
      </ul>
    </section>
  );
};
