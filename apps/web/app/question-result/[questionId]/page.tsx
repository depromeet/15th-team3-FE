import { ResultMainScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const {
    params: { questionId },
  } = props;

  return <ResultMainScreen questionId={Number(questionId)} />;
};

export default QuestionResultPage;
