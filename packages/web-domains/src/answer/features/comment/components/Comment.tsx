import { Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

import { CommentInput } from './CommentInput';

interface CommentProps {
  comment: string;
  onChangeComment: (comment: string) => void;
}

export const Comment = ({ comment, onChangeComment }: CommentProps) => {
  return (
    <>
      <div css={{ padding: '40px 20px 20px' }}>
        <Txt
          as="p"
          typography="heading1"
          css={{ fontWeight: `${fontWeightVariants.regular} !important`, fontSize: '24px' }}
          color={colors.black}
        >
          답변에 대한 생각을
        </Txt>
        <Txt as="p" typography="heading1" color={colors.black}>
          자유롭게 남겨보세요!
        </Txt>
        <Txt typography="body3" color={colors.primary500} css={{ marginRight: '4px', marginTop: '4px' }}>
          선택
        </Txt>
        <Txt typography="body3" color={colors.grey600}>
          항목이에요!
        </Txt>
        <CommentInput
          value={comment}
          onChange={onChangeComment}
          maxLength={100}
          errors={{ maxLength: 100 }}
          css={{ marginTop: '24px' }}
        />
      </div>
    </>
  );
};
