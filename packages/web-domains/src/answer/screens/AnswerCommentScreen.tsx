import dynamic from 'next/dynamic';

const CommentContainer = dynamic(
  () => import('../features/comment/containers/CommentContainer.tsx').then((mod) => mod.CommentContainer),
  { ssr: false },
);

export const AnswerCommentScreen = () => {
  return <CommentContainer />;
};
