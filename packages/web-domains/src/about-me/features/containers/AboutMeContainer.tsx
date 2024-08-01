import { Txt } from '@sambad/sds/components';

import { HobbyList, IntroduceBox } from '../components';

import { subTitleAttribute } from './constants';
import { titleCss } from './styles';

const MOCK = {
  hobbyList: [
    { hobbyId: 1, content: '🍿 영화보기' },
    { hobbyId: 2, content: '☕️ 커피투어' },
  ],
  introduce:
    '사람을 좋아하는 인간 리트리버입니다^.^ 디프만에서 좋은 사람들과 좋은 프로젝트하고 싶습니다~!! 잘부탁드려요~~',
};

export const AboutMeContainer = () => {
  return (
    <section>
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        모임원들과 이런 걸 함께하고 싶어요
      </Txt>
      <HobbyList contents={MOCK.hobbyList} />
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        저는 이런 사람이에요
      </Txt>
      <IntroduceBox content={MOCK.introduce} />
    </section>
  );
};
