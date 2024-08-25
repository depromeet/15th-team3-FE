import { AboutMeModifyScreen } from '@/about-me';

interface AboutMeModifyPageParams {
  params: { meetingId: string };
}

const AboutMeModifyPage = ({ params }: AboutMeModifyPageParams) => {
  return <AboutMeModifyScreen {...params} />;
};
export default AboutMeModifyPage;
