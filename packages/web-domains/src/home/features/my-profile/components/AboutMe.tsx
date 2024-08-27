import { size } from '@sds/theme/size';

import { MeetingMemberResponse } from '@/about-me/common/apis/schema/MeetingMemberResponse';
import { HobbyList, IntroduceBox } from '@/about-me/features/components';
import { EmptyView } from '@/common/components';

interface AboutMeProps {
  info?: MeetingMemberResponse;
}

export const AboutMe = ({ info }: AboutMeProps) => {
  const hasNoInfo = info?.hobbies == null && (info?.introduction == null || info?.introduction === '');

  if (hasNoInfo) return <EmptyView title="아직 입력한 정보가 없어요" style={{ height: '300px' }} />;

  return (
    <section style={{ padding: `${size['4xs']} 0`, marginBottom: '180px' }}>
      <HobbyList contents={info?.hobbies} />
      <IntroduceBox content={info?.introduction} />
    </section>
  );
};
