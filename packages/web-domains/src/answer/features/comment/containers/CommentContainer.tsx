'use client';

import { CommentButton } from '../../floating-button/components/CommentButton';
import { Comment } from '../components/Comment';
import { useCommentService } from '../services/useCommentService';

export const CommentContainer = () => {
  const { comment, handleChangeComment, handleSubmit } = useCommentService();

  return (
    <section
      css={{
        position: 'relative',
        paddingBottom: '100px',
        height: '100%',
      }}
    >
      <Comment comment={comment} onChangeComment={handleChangeComment} />
      <CommentButton onClick={handleSubmit} />
    </section>
  );
};
