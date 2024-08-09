import { Icon, Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import { ReactNode, forwardRef, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { CommentInput } from '../../comment/components/CommentInput';

interface CommentBottomSheetProps {
  onCommentSubmit?: (content: string) => void;
  answerButton?: ReactNode;
}

export const CommentBottomSheet = forwardRef<HTMLDivElement, CommentBottomSheetProps>(
  ({ answerButton, onCommentSubmit }, ref) => {
    const [element, setElement] = useState<HTMLElement | null>(null);
    const [isFocus, setIsFocus] = useState<boolean>(false);

    const [input, setInput] = useState<string>('');
    const commentRef = useRef<HTMLInputElement>(null);

    const errors = {
      maxLength: 20,
    };

    useEffect(() => {
      setElement(document.body);
    }, []);

    const onFocus = () => {
      setIsFocus(true);
    };

    const onBlur = () => {
      setIsFocus(false);
    };

    const handleChange = (value: string) => {
      setInput(value);
    };

    const sendComment = () => {
      if (input.length > errors.maxLength) {
        console.log('최대 입력 글자수를 초과하였습니다.');
        return;
      }

      onCommentSubmit?.(input);
      commentRef.current?.blur();
    };

    if (typeof window === 'undefined' || !element) {
      return <></>;
    }

    return createPortal(
      <div
        ref={ref}
        css={{
          position: 'fixed',
          bottom: '0',
          borderTopLeftRadius: '32px',
          borderTopRightRadius: '32px',
          boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)',
          width: '100%',
          maxWidth: '600px',
          backgroundColor: colors.white,
          overflow: 'scroll',
          margin: '0 auto',
          left: '50%',
          transform: 'translate(-50%,0)',
        }}
      >
        <div css={{ padding: '24px', height: isFocus ? '160px' : '254px' }}>
          <div css={{ display: 'flex', alignItems: 'center', position: 'relative', marginBottom: '16px' }}>
            <Icon name="comments-icon" size={20} />
            <Txt typography="subtitle1" color={colors.black} css={{ marginLeft: '8px' }}>
              코멘트 남기기
            </Txt>
            <button css={{ position: 'absolute', right: '0', cursor: 'pointer' }} onClick={sendComment}>
              <Txt typography="title2" color={colors.primary500}>
                등록하기
              </Txt>
            </button>
          </div>
          <form css={{ marginBottom: '46px' }}>
            <CommentInput
              ref={commentRef}
              maxLength={20}
              errors={errors}
              value={input}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </form>
          {!isFocus && answerButton}
        </div>
      </div>,
      element,
    );
  },
);

CommentBottomSheet.displayName = 'CommentBottomSheet';
