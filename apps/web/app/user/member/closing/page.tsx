import { MemberClosingScreen } from '@sambad/web-domains/user';

interface MemberClosingPageProps {
  searchParams: { inviteCode: string };
}

export default async function page(props: MemberClosingPageProps) {
  const {
    searchParams: { inviteCode },
  } = props;
  return <MemberClosingScreen inviteCode={inviteCode} />;
}
