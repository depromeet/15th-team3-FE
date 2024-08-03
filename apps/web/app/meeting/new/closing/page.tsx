import { NewMeetingClosingScreen } from '@/new-meeting';

interface NewMeetingClosingPageProps {
  searchParams: { inviteCode: string };
}

// inviteCode 받아오기
export default async function page(props: NewMeetingClosingPageProps) {
  const {
    searchParams: { inviteCode },
  } = props;

  return <NewMeetingClosingScreen inviteCode={inviteCode} />;
}
