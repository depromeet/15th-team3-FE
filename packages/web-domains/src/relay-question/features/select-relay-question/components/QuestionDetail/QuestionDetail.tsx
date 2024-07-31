import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';

import { Answer } from '../../types';

import {
  answerBlurCss,
  answerContentCss,
  answerExampleTextCss,
  answerListCss,
  answerWrapperCss,
  buttonWrapperCss,
  imageWrapperCss,
  wrapperCss,
} from './QuestionDetail.styles';

interface QuestionDetailProps {
  imageUrl: string;
  title: string;
  answers: Answer[];
  onClose: () => void;
  onConfirm: () => void;
}

export const QuestionDetail = ({ imageUrl, title, answers, onClose, onConfirm }: QuestionDetailProps) => {
  return (
    <div css={wrapperCss}>
      <Txt typography="heading3" fontWeight="bold">
        질문 미리보기
      </Txt>
      <div css={imageWrapperCss}>
        <Image src={imageUrl} alt={title} width={64} height={64} />
      </div>
      <Txt typography="heading2" fontWeight="bold" css={{ textAlign: 'center' }}>
        {title}
      </Txt>
      <Txt color={colors.grey500} typography="title4" fontWeight="medium" css={answerExampleTextCss}>
        답변 예시
      </Txt>
      <div css={answerWrapperCss}>
        <div css={answerBlurCss} />
        <ul css={answerContentCss}>
          {answers.map(({ answerId, content }) => (
            <li key={answerId} css={answerListCss}>
              <Txt color={colors.grey500} fontWeight="regular">
                {content}
              </Txt>
            </li>
          ))}
        </ul>
      </div>
      <div css={buttonWrapperCss}>
        <Button variant="sub" onClick={onClose}>
          닫기
        </Button>
        <Button onClick={onConfirm}>질문 선택</Button>
      </div>
    </div>
  );
};
