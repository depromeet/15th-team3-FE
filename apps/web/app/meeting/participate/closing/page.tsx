import { ParticipateClosingScreen } from '@/participate-meeting';

interface ParticipateClosingPageProps {
  searchParams: { inviteCode: string };
}

export default async function page(props: ParticipateClosingPageProps) {
  const {
    searchParams: { inviteCode },
  } = props;

  return <ParticipateClosingScreen inviteCode={inviteCode} />;
}
