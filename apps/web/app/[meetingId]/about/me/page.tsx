import { AboutMeScreen } from '@/about-me';

interface AboutMePageParams {
  params: { meetingId: string };
}

const AboutMePage = ({ params }: AboutMePageParams) => {
  return <AboutMeScreen {...params} />;
};

export default AboutMePage;
