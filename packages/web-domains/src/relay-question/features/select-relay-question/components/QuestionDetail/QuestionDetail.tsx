import { css } from '@emotion/react';
import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import Image from 'next/image';

import { RelayRePickQuestioner } from '../../../../assets/RelayRePickQuestioner';
import { Answer } from '../../types';
import { RePick } from '../RePick/RePick';

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
  isRandom?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onRefetch?: () => void;
}

export const QuestionDetail = ({
  imageUrl,
  title,
  answers,
  isRandom,
  onClose,
  onConfirm,
  onRefetch,
}: QuestionDetailProps) => {
  return (
    <div css={wrapperCss}>
      <Txt typography="heading3" color={colors.black} fontWeight="bold">
        질문 미리보기
      </Txt>
      <div css={imageWrapperCss}>
        <Image src={imageUrl} alt={title} width={64} height={64} css={{ objectFit: 'cover' }} />
      </div>
      <Txt typography="heading2" color={colors.black} fontWeight="bold" css={{ textAlign: 'center' }}>
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
      {isRandom && (
        <RePick onClick={onRefetch}>
          <RelayRePickQuestioner css={css({ marginRight: size['7xs'] })} />
          랜덤 선택 다시하기
        </RePick>
      )}
    </div>
  );
};
