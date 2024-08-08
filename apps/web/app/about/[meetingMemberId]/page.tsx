import { AboutMeScreen } from '@/about-me';

interface AboutMemberPageParams {
  params: { meetingMemberId: string };
}

const AboutMemberPage = (params: AboutMemberPageParams) => {
  const {
    params: { meetingMemberId },
  } = params;

  return <AboutMeScreen meetingMemberId={Number(meetingMemberId)} />;
};

export default AboutMemberPage;
