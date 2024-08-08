import { SelectedSameListScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const {
    params: { questionId },
  } = props;

  return <SelectedSameListScreen questionId={Number(questionId)} />;
};

export default QuestionResultPage;
