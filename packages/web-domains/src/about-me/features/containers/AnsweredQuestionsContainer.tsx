'use client';

import { Accordion, Loader, Txt } from '@sambad/sds/components';
import { colors, size } from '@sds/theme';

import { useGetAnswersByParams } from '../hooks/useGetAnswersByParams';

import { answerContentCss, questionLoaderSectionCss } from './styles';

import { EmptyView } from '@/common/components';

export const AnsweredQuestionsContainer = () => {
  const { data: answers, isLoading } = useGetAnswersByParams();

  if (answers?.contents?.length === 0) {
    return <EmptyView title="아직 답변한 릴레이 질문이 없어요" style={{ height: '300px' }} />;
  }

  if (isLoading) {
    return (
      <div css={questionLoaderSectionCss}>
        <Loader mode="transparent" />
      </div>
    );
  }

  return (
    <section>
      <Accordion>
        {answers?.contents?.map((answer, index) => (
          <Accordion.Item key={answer.idx} value={`${answer.idx}`}>
            <Accordion.Trigger>
              <Txt typography="subtitle1" color={colors.primary500} style={{ paddingRight: size['6xs'] }}>
                #{index + 1}
              </Txt>
              <Txt typography="subtitle1">{answer.title}</Txt>
            </Accordion.Trigger>
            <Accordion.Content>
              <div css={answerContentCss}>
                <Txt typography="heading3">{answer.content}</Txt>
                <Txt typography="body2">{answer.commentContent}</Txt>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};
