import { borderRadiusVariants, colors, shadow } from '@sambad/sds/theme';
import { forwardRef, useEffect, useRef } from 'react';

interface CommentBottomSheetProps {}

export const CommentBottomSheet = forwardRef<HTMLInputElement, CommentBottomSheetProps>(({}, ref) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleVisualViewPortResize = () => {
      const currentVisualViewport = Number(window.visualViewport?.height);
      if (divRef) {
        divRef.current!.style.height = `${currentVisualViewport - 30}px`;
        window.scrollTo(0, 40);
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualViewPortResize);
      // window.visualViewport.onresize = handleVisualViewPortResize;
    }

    return () => {};
  }, []);

  return (
    <div
      ref={divRef}
      //   css={{ position: 'absolute' }}
      css={{
        position: 'fixed',
        bottom: '0',
        borderTopLeftRadius: '32px',
        borderTopRightRadius: '32px',
        boxShadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.20)',
        height: '254px',
        width: '100%',
        background: colors.grey400,
      }}
    >
      <form>
        <input ref={ref}></input>
      </form>
    </div>
  );
});

CommentBottomSheet.displayName = 'CommentBottomSheet';
