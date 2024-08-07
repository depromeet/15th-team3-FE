'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { useSearchParams } from 'next/navigation';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { Modal } from '@/new-meeting/common/components/Modal/Modal';

import { InviteLinkShareButton } from '../components/Button/InviteLinkShareButton';
import ShareKakaoButton from '../components/Button/ShareKakaoButton';

export const InviteLinkShareContainer = () => {
  const { isOpen, close } = useDialogContext();

  const handleClose = () => {
    close();
  };

  const searchParams = useSearchParams();

  const inviteCode = searchParams.get('inviteCode');

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      footer={
        <Button variant="sub" onClick={handleClose}>
          닫기
        </Button>
      }
    >
      <div>
        <div css={{ textAlign: 'center' }}>
          <Txt as="p" typography="heading2" color={colors.black}>
            모임원을 모링으로
          </Txt>
          <Txt as="p" typography="heading2" color={colors.black}>
            초대해보세요!
          </Txt>
        </div>
        <div css={{ margin: `${size['2xs']} 0`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShareKakaoButton />
          <InviteLinkShareButton inviteCode={inviteCode} />
        </div>
      </div>
    </Modal>
  );
};
