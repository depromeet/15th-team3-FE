import { Icon, fontWeightVariants } from '@sambad/sds/components';
import { colors, borderRadiusVariants } from '@sambad/sds/theme';
import { Attributes, HTMLAttributes, ReactNode, forwardRef, useState } from 'react';

interface GatherMemberSearchInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  BeforeIcon?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export const GatherMemberSearchInput = forwardRef<HTMLInputElement, GatherMemberSearchInputProps>(
  ({ BeforeIcon, value, onChange, ...rest }, commentRef) => {
    const [input, setInput] = useState<string>(value ?? '');
    const isEnabledReset = !!input.length;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInput(value);
      onChange?.(value);
    };

    const handleReset = () => {
      setInput('');
      onChange?.('');
    };

    const inputStyles: Attributes['css'] = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      border: `1px solid ${colors.grey600}`,
      backgroundColor: colors.grey200,
      width: '100%',
      height: '48px',
      borderRadius: borderRadiusVariants.medium,
      padding: '16px',
    };

    return (
      <span css={inputStyles}>
        {BeforeIcon}
        <label htmlFor="content" />
        <input
          name="content"
          css={{
            width: '100%',
            background: 'none',
            marginLeft: '8px',
            '::placeholder': {
              fontSize: '16px',
              fontWeight: fontWeightVariants.regular,
              color: colors.grey600,
            },
            ':focus': {
              outline: 'none',
            },
          }}
          value={input}
          onChange={handleChange}
          placeholder="검색"
          ref={commentRef}
          {...rest}
        />
        {isEnabledReset && (
          <Icon
            onClick={handleReset}
            name="x-icon"
            color="#8E8E8E"
            size={16}
            css={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              padding: '16px',
              right: '0',
            }}
          />
        )}
      </span>
    );
  },
);

GatherMemberSearchInput.displayName = 'GatherMemberSearchInput';
