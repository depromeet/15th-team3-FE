'use client';

import { If } from '@sambad/react-utils';
import { Accordion, Checkbox, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { EmptyView } from '@/common/components';

import { useGetAnswersByParams } from '../hooks/useGetAnswersByParams';
import { useGetIsModifyPage } from '../hooks/useGetIsModifyPage';

import { checkboxAttribute } from './constants';
import { answerContentCss, checkboxAndTriggerCss } from './styles';

export const AnsweredQuestionsContainer = () => {
  const isModifyPage = useGetIsModifyPage();
  const { data: answers } = useGetAnswersByParams();

  const answersLength = answers?.contents?.length;

  if (answersLength === 0) {
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
                <Checkbox {...checkboxAttribute.attribute} />
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
};
