import { Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { CommentInput } from './CommentInput';

interface CommentBottomSheetProps {
  answerButton?: ReactNode;
}

export const CommentBottomSheet = forwardRef<HTMLDivElement, CommentBottomSheetProps>(({ answerButton }, ref) => {
  const [element, setElement] = useState<HTMLElement | null>(null);

  const [input, setInput] = useState<string>('');
  const commentRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setElement(document.body);
  }, []);

  const handleChange = (value: string) => {
    setInput(value);
  };

  if (typeof window === 'undefined' || !element) {
    return <></>;
  }

  return createPortal(
    <div
      ref={ref}
      css={{
        position: 'absolute',
        bottom: '0',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)',
        // height: `100px`,
        // height: isFocus ? '80px' : '254px',
        width: '100%',
        maxWidth: '600px',
        backgroundColor: colors.white,
        overflow: 'scroll',
        left: '50%',
        transform: 'translate(-50%,0)',
      }}
    >
      <div css={{ padding: '24px', height: '254px' }}>
        <div css={{ display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '16px' }}>
          <Icon name="comments-icon" size={20} />
          <Txt typography="subtitle1" color={colors.black} css={{ marginLeft: '8px' }}>
            코멘트 남기기
          </Txt>
        </div>
        <form css={{ marginBottom: '46px' }}>
          <CommentInput
            ref={commentRef}
            maxLength={20}
            errors={{ maxLength: 20 }}
            value={input}
            onChange={handleChange}
          />
        </form>
        {answerButton}
      </div>
    </div>,
    element,
  );
});

CommentBottomSheet.displayName = 'CommentBottomSheet';
