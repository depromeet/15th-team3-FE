import { colors, size } from '@sambad/sds/theme';
import { Fragment, ReactNode } from 'react';

import { ActionBar } from '@/common/components/ActionBar/ActionBar';

interface BaseLayoutProps {
  title?: string;
  header: ReactNode;
  children: ReactNode;
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const { title, header, children } = props;

  return (
    <Fragment>
      {title != null && <ActionBar title={title} />}
      <div style={layoutStyle}>
        {header}
        <div style={contentStyle}>{children}</div>
      </div>
    </Fragment>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
  paddingBottom: size['3xl'],
};

const contentStyle = {
  padding: size.xs,
};
