import { ResultMainScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    meetingId: string;
    questionId: string;
  };
}

const QuestionResultPage = (props: QuestionResultPageProps) => {
  const {
    params: { meetingId, questionId },
  } = props;

  return <ResultMainScreen meetingId={Number(meetingId)} questionId={Number(questionId)} />;
};

export default QuestionResultPage;
