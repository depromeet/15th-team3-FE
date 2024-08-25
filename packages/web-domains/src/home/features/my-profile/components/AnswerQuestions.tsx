import { If } from '@sambad/react-utils';
import { Accordion, Checkbox, Txt } from '@sds/components';
import { colors, size } from '@sds/theme';
import { useRef, useImperativeHandle, forwardRef } from 'react';

import { useUpdateQuestionsActive } from '@/about-me/common/apis/mutates/useUpdateQuestionsActive';
import { MyMeetingAnswerListResponse } from '@/about-me/common/apis/schema/MyMeetingAnswerListReponse';
import { checkboxAttribute } from '@/about-me/features/containers/constants';
import { answerContentCss, checkboxAndTriggerCss } from '@/about-me/features/containers/styles';
import { EmptyView } from '@/common/components';

interface AnswerQuestionsProps {
  isModifyPage: boolean;
  answers?: MyMeetingAnswerListResponse;
}

interface Ref {
  onMutate: (meetingId: number) => void;
}

export const AnswerQuestions = forwardRef<Ref, AnswerQuestionsProps>(({ isModifyPage, answers }, ref) => {
  const answersLength = answers?.contents?.length;

  const { mutate } = useUpdateQuestionsActive();

  const checkboxRefs = useRef<(HTMLInputElement | null)[]>([]);

  if (answersLength === 0) {
    return <EmptyView title="아직 답변한 릴레이 질문이 없어요" style={{ height: '300px' }} />;
  }

  const handleModify = (meetingId: number) => {
    const checkedIds = checkboxRefs.current
      .filter((checkbox) => checkbox?.checked)
      .map((checkbox) => Number(checkbox?.id));

    mutate({ meetingId, activeMeetingQuestionIds: checkedIds });
  };

  // NOTE: ScreenContainer에서 호출하기 위해 ref에 추가
  useImperativeHandle(ref, () => ({
    onMutate: (meetingId) => handleModify(meetingId),
  }));

  if (answers?.contents?.length === 0) {
    return <EmptyView title="아직 답변한 릴레이 질문이 없어요" style={{ height: '300px' }} />;
  }

  return (
    <section>
      <If condition={isModifyPage}>
        <Txt typography="title4" color={colors.grey600}>
          프로필에 표시할 질문 선택하기
        </Txt>
      </If>
      <Accordion>
        {answers?.contents?.map((answer, index) => (
          <Accordion.Item key={answer.idx} value={`${answer.idx}`}>
            <div css={checkboxAndTriggerCss}>
              <If condition={isModifyPage}>
                <Checkbox
                  id={`${answer.meetingQuestionId}`}
                  ref={(el) => {
                    checkboxRefs.current[index] = el;
                  }}
                  defaultChecked={!answer.isHidden}
                  {...checkboxAttribute.attribute}
                />
              </If>
              <Accordion.Trigger>
                <Txt typography="subtitle1" color={colors.primary500} style={{ paddingRight: size['6xs'] }}>
                  #{index + 1}
                </Txt>
                <Txt typography="subtitle1">{answer.title}</Txt>
              </Accordion.Trigger>
            </div>
            <Accordion.Content>
              <div css={answerContentCss}>
                <Txt typography="heading3">{answer.content.join(', ')}</Txt>
                {answer.commentContent != null && <Txt typography="body2">{answer.commentContent}</Txt>}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
});

AnswerQuestions.displayName = 'AnswerQuestions';
