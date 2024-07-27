import { colors, size } from '@sambad/sds/theme';
import { HeaderBanner } from '../HeaderBanner/HeaderBanner';
import { PropsWithChildren } from 'react';

export const BaseLayout = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div style={layoutStyle}>
      <HeaderBanner title="즐겨하는 스포츠는?" thumbnail="" />
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const contentStyle = {
  padding: size.xs,
};
