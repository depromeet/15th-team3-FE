import { colors, size } from '@sambad/sds/theme';
import { ReactNode } from 'react';

interface BaseLayoutProps {
  header: ReactNode;
  children: ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const { header, children } = props;

  return (
    <div style={layoutStyle}>
      {header}
      <div style={contentStyle}>{children}</div>
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
  paddingBottom: size['3xl'],
};

const contentStyle = {
  padding: size.xs,
};
