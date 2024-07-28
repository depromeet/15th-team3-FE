import { Button, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useQueryString } from '../../../../hooks/useQueryString';

import {
  answerExampleTextCss,
  answerListCss,
  answerWrapperCss,
  buttonWrapperCss,
  imageWrapperCss,
  wrapperCss,
} from './QuestionDetail.styles';

interface Answer {
  answerId: number;
  content: string;
}

interface QuestionDetailProps {
  imageUrl: string;
  title: string;
  answers: Answer[];
  handleCloseModal: () => void;
}

export const QuestionDetail = ({ imageUrl, title, answers, handleCloseModal }: QuestionDetailProps) => {
  const router = useRouter();
  const { updateQueryString } = useQueryString();

  const handleSetQuestion = () => {
    router.push(`/select-relay-question?${updateQueryString({ key: 'current-step', value: '2' })}`);
    handleCloseModal();
  };

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
      <ul css={answerWrapperCss}>
        {answers.map(({ answerId, content }) => (
          <li key={answerId} css={answerListCss}>
            <Txt color={colors.grey500} fontWeight="regular">
              {content}
            </Txt>
          </li>
        ))}
      </ul>
      <div css={buttonWrapperCss}>
        <Button variant="sub" onClick={handleCloseModal}>
          닫기
        </Button>
        <Button onClick={handleSetQuestion}>질문 선택</Button>
      </div>
    </div>
  );
};
