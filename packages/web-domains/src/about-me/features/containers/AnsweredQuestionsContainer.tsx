'use client';

import { Accordion, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { EmptyView } from '@/common/components';

import { useGetAnswersByParams } from '../hooks/useGetAnswersByParams';

import { answerContentCss } from './styles';

export const AnsweredQuestionsContainer = () => {
  const { data: answers } = useGetAnswersByParams();

  if (answers?.contents?.length === 0) {
    return <EmptyView title="아직 답변한 릴레이 질문이 없어요" style={{ height: '300px' }} />;
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
                {answer.commentContent != null && <Txt typography="body2">{answer.commentContent}</Txt>}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};
