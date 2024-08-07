import { NewMeetingClosingScreen } from '@/new-meeting';

interface NewMeetingClosingPageProps {
  searchParams: { inviteCode: string };
}

export default async function page(props: NewMeetingClosingPageProps) {
  const {
    searchParams: { inviteCode },
  } = props;

  return <NewMeetingClosingScreen inviteCode={inviteCode} />;
}
