import { StatisticsScreen } from '@sambad/web-domains/result';

interface QuestionResultPageProps {
  params: {
    questionId: string;
  };
}

const StatisticsPage = (props: QuestionResultPageProps) => {
  const {
    params: { questionId },
  } = props;

  return <StatisticsScreen questionId={Number(questionId)} />;
};

export default StatisticsPage;
