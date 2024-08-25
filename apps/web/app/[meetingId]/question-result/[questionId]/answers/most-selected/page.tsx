import { MostSelectedListScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    meetingId: string;
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const { params } = props;

  return <MostSelectedListScreen {...params} />;
};

export default QuestionResultPage;
