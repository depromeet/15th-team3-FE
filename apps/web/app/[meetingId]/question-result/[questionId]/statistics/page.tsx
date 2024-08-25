import { StatisticsScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    meetingId: string;
    questionId: string;
  };
}

const StatisticsPage = (props: QuestionResultPageProps) => {
  const { params } = props;

  return <StatisticsScreen {...params} />;
};

export default StatisticsPage;
