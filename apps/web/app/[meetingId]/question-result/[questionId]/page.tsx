import { ResultMainScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    meetingId: string;
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const { params } = props;

  return <ResultMainScreen {...params} />;
};

export default QuestionResultPage;
