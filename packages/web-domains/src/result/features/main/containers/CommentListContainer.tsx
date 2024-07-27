import { size } from '@sambad/sds/theme';
import { Comment } from '../components';
import { Section } from '../../common/components';

export const CommentListContainer = () => {
  return (
    <Section title="모임원들의 코멘트" style={{ marginTop: size['2xs'] }}>
      <Comment name="이세민" imgUrl="" comment="헬로 월드" />
      <Comment name="이세민" imgUrl="" comment="헬로 월드" />
      <Comment name="이세민" imgUrl="" comment="헬로 월드" />
      <Comment name="이세민" imgUrl="" comment="헬로 월드" />
    </Section>
  );
};
