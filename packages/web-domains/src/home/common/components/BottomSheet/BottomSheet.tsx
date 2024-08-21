import { Icon, Txt } from '@sds/components';
import { colors } from '@sds/theme';
import { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';

import { BodyScrollLock } from '@/common/utils/bodyScrollLock';

import { BottomSheetContainerCss, ContentWrapperCss, DimmedCss } from './BottomSheet.styles';

interface BottomSheetProps {
  title?: string;
  isOpen: boolean;
  onClose?: () => void;
  bottomSheetStyles?: CSSProperties;
}

export const BottomSheet = ({
  title,

  isOpen,
  onClose,
  children,
  bottomSheetStyles,
}: PropsWithChildren<BottomSheetProps>) => {
  const [isContainerVisible, setIsContainerVisible] = useState<boolean>(false);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(false);
  const [contentRef, setContentRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (contentRef) {
      const scrollControl = new BodyScrollLock(contentRef);
      if (isOpen) {
        scrollControl.disableScroll();
        setIsContainerVisible(true);
        setIsContentVisible(true);
      } else {
        scrollControl.enableScroll();
        setIsContainerVisible(false);
        setIsContentVisible(false);
      }
      return () => {
        scrollControl.enableScroll();
      };
    }
  }, [isOpen, contentRef]);

  const handleCloseContent = () => {
    setIsContentVisible(false);
  };

  return (
    <div css={BottomSheetContainerCss} style={{ visibility: isContainerVisible ? 'visible' : 'hidden' }}>
      <div css={DimmedCss} style={{ opacity: isContainerVisible ? 0.4 : 0 }} onClick={handleCloseContent} />
      <div
        css={ContentWrapperCss}
        style={{ transform: `translate(-50%, ${isContentVisible ? '0' : '100%'})`, ...bottomSheetStyles }}
        onTransitionEnd={() => {
          if (!isContentVisible) {
            onClose?.();
          }
        }}
      >
        {title && (
          <div
            css={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
            }}
          >
            <Txt typography="title2" color={colors.black}>
              {title}
            </Txt>

            <Icon
              name="close-icon"
              size={24}
              onClick={handleCloseContent}
              css={{ cursor: 'pointer', position: 'absolute', right: '12px' }}
            />
          </div>
        )}
        <div css={{ overflow: 'auto', height: '100%', padding: '0 20px' }} ref={setContentRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
