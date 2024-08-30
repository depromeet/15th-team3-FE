import { Icon, Txt, fontWeightVariants } from '@sambad/sds/components';
import { colors, borderRadiusVariants } from '@sambad/sds/theme';
import { HTMLAttributes, forwardRef, useState } from 'react';

interface CommentInputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  value?: string;
  maxLength?: number;
  errors?: { maxLength: number };
  onChange?: (value: string) => void;
}

export const CommentInput = forwardRef<HTMLInputElement, CommentInputProps>(
  ({ value, onChange, maxLength, errors, ...rest }, commentRef) => {
    const [input, setInput] = useState<string>(value ?? '');
    const isEnabledReset = !!input.length;
    const isExceedLength = errors && Boolean(errors?.maxLength && input.length > errors?.maxLength);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setInput(value.substring(0, maxLength));
      onChange?.(value.substring(0, maxLength));
    };

    const handleReset = () => {
      setInput('');
    };

    const inputStyles = {
      display: 'inline-block',
      border: `1px solid ${isExceedLength ? colors.primary500 : colors.grey600}`,
      backgroundColor: colors.grey200,
      width: '100%',
      height: '48px',
      borderRadius: borderRadiusVariants.medium,
      padding: '12px 16px',
      '::placeholder': {
        fontSize: '16px',
        fontWeight: fontWeightVariants.regular,
        color: colors.grey600,
      },
      ':focus': {
        outline: 'none',
      },
    };

    return (
      <span>
        <label htmlFor="content" css={{ width: '100%', position: 'relative' }}>
          <input
            name="content"
            value={input}
            onChange={handleChange}
            placeholder="질문에 대한 생각을 자유롭게 적어보세요"
            ref={commentRef}
            css={inputStyles}
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
        </label>
        {isExceedLength && <ErrorMessage maxLength={errors.maxLength} />}
        {maxLength && (
          <Txt typography="body4" color={colors.grey600} css={{ float: 'right', position: 'relative', top: '4px' }}>
            {input.length}/{maxLength}
          </Txt>
        )}
      </span>
    );
  },
);

CommentInput.displayName = 'CommentInput';

const ErrorMessage = ({ maxLength }: { maxLength: number }) => {
  return (
    <span>
      <Txt typography="body4" color={colors.primary500}>
        띄어쓰기 포함 {maxLength}자 이내로 작성해주세요.
      </Txt>
    </span>
  );
};
