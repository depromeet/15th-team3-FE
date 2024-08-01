import { HTMLAttributes } from 'react';

import { Profile } from '../components';

type ProfileContainerProps = HTMLAttributes<HTMLDivElement>;

export const ProfileContainer = (props: ProfileContainerProps) => {
  return (
    <section {...props}>
      <Profile name="김시은" imageUrl="" birth="26세" gender="FEMALE" mbti="ENFJ" location="수원" job="취준생" />
    </section>
  );
};
