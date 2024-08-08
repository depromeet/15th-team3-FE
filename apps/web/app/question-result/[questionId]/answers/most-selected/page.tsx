import { MostSelectedListScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const {
    params: { questionId },
  } = props;

  return <MostSelectedListScreen questionId={Number(questionId)} />;
};

export default QuestionResultPage;
