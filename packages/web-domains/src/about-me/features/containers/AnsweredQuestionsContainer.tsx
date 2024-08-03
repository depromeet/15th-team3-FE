import { Accordion, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';

import { answerContentCss } from './styles';

export const AnsweredQuestionsContainer = () => {
  const { data: answers } = useGetAnswersMe({ meetingId: 1 });

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
