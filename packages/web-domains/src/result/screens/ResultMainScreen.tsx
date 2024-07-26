import { colors, size } from '@sambad/sds/theme';
import { HeaderBanner } from '../features/main/components';
import { MostAnsweredContainers, WithMyMembersContainers, CommentListContainer } from '../features/main/containers';

export const ResultMainScreen = () => {
  return (
    <div style={layoutStyle}>
      <HeaderBanner title="즐겨하는 스포츠는?" thumbnail="" />
      <div style={contentStyle}>
        <MostAnsweredContainers />
        <WithMyMembersContainers />
        <CommentListContainer />
      </div>
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const contentStyle = {
  padding: size.xs,
};
