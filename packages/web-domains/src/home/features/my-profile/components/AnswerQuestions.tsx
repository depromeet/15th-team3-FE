import { Accordion, Txt } from '@sds/components';
import { colors, size } from '@sds/theme';

import { MyMeetingAnswerListResponse } from '@/about-me/common/apis/schema/MyMeetingAnswerListReponse';
import { answerContentCss } from '@/about-me/features/containers/styles';
import { EmptyView } from '@/common/components';

interface AnswerQuestionsProps {
  answers?: MyMeetingAnswerListResponse;
}

export const AnswerQuestions = ({ answers }: AnswerQuestionsProps) => {
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
