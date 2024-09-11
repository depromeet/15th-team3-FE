import { Icon, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { CSSProperties, HTMLAttributes } from 'react';

export interface EmptyViewProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

export const EmptyView = (props: EmptyViewProps) => {
  const { title, style: styleFromProps, ...restProps } = props;

  const style: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    ...styleFromProps,
  };

  return (
    <div style={style} {...restProps}>
      <Icon name="sad-user" size={40} color={colors.grey400} style={{ paddingBottom: size['5xs'] }} />
      <Txt typography="title3" color={colors.grey600}>
        {title}
      </Txt>
    </div>
  );
};
