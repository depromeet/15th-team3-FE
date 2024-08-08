'use client';

import { Accordion, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { useGetAnswersMe } from '@/about-me/common/apis/queries/useGetAnswersMe';
import { useGetMeetings } from '@/about-me/common/apis/queries/useGetMeetings';
import { EmptyView } from '@/common/components';

import { answerContentCss } from './styles';

export const AnsweredQuestionsContainer = () => {
  const { data: meetingsIdsData } = useGetMeetings();
  // NOTE: 현재 스팩에서는 하나의 모임에만 가입할 수 있습니다.
  const meetingId = meetingsIdsData?.meetingIds[0] || -1;
  const { data: answers } = useGetAnswersMe({ meetingId });

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
                <Txt typography="body2">{answer.commentContent}</Txt>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};
