import { AnswerListScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    meetingId: string;
    questionId: string;
  };
}

const AnswersPage = (props: QuestionResultPageProps) => {
  const { params } = props;

  return <AnswerListScreen {...params} />;
};

export default AnswersPage;
