import { AnswerListScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    questionId: string;
  };
}

const AnswersPage = (props: QuestionResultPageProps) => {
  const {
    params: { questionId },
  } = props;

  return <AnswerListScreen questionId={Number(questionId)} />;
};

export default AnswersPage;
