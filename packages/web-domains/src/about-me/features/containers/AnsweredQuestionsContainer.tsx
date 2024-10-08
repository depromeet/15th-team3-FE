'use client';

import { If } from '@sambad/react-utils';
import { Accordion, Checkbox, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { forwardRef, useImperativeHandle, useRef } from 'react';

import { useUpdateQuestionsActive } from '@/about-me/common/apis/mutates/useUpdateQuestionsActive';
import { EmptyView } from '@/common/components';

import { useConvertTypeParams } from '../hooks/useConvertTypeParams';
import { useGetAnswersByParams } from '../hooks/useGetAnswersByParams';
import { useGetIsModifyPage } from '../hooks/useGetIsModifyPage';

import { checkboxAttribute } from './constants';
import { answerContentCss, checkboxAndTriggerCss } from './styles';

interface Ref {
  onMutate: () => void;
}

export const AnsweredQuestionsContainer = forwardRef<Ref>((_, ref) => {
  const { meetingId } = useConvertTypeParams();
  const isModifyPage = useGetIsModifyPage();
  const { data: answers } = useGetAnswersByParams();
  const answersLength = answers?.contents?.length;

  const { mutate } = useUpdateQuestionsActive();

  const checkboxRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleModify = () => {
    const checkedIds = checkboxRefs.current
      .filter((checkbox) => checkbox?.checked)
      .map((checkbox) => Number(checkbox?.id));

    mutate({ meetingId, activeMeetingQuestionIds: checkedIds });
  };

  // NOTE: ScreenContainer에서 호출하기 위해 ref에 추가
  useImperativeHandle(ref, () => ({
    onMutate: handleModify,
  }));

  if (answersLength === 0) {
    return <EmptyView title="아직 답변한 릴레이 질문이 없어요" style={{ height: '300px' }} />;
  }

  return (
    <section style={{ marginBottom: '180px' }}>
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
                <div style={{ display: 'flex' }}>
                  <Txt typography="subtitle1" color={colors.primary500} style={{ paddingRight: size['6xs'] }}>
                    #{index + 1}
                  </Txt>
                  <Txt as="p" typography="subtitle1">
                    {answer.title}
                  </Txt>
                </div>
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

AnsweredQuestionsContainer.displayName = 'AnsweredQuestionsContainer';
