import { AboutMeScreen } from '@/about-me';

interface AboutMemberPageParams {
  params: { meetingId: string; meetingMemberId?: string };
}

const AboutMemberPage = ({ params }: AboutMemberPageParams) => {
  return <AboutMeScreen {...params} />;
};

export default AboutMemberPage;
