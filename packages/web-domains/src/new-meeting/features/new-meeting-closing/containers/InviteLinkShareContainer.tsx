'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { useSearchParams } from 'next/navigation';
import CopyToClipboard from 'react-copy-to-clipboard';

import { useDialogContext } from '@/common/contexts/DialogProvider';
import { CircleCopy } from '@/new-meeting/common/assets/icons/CircleCopy';
import { CircleKakao } from '@/new-meeting/common/assets/icons/CircleKakao';
import { Modal } from '@/new-meeting/common/components/Modal/Modal';

import { CopyToast } from '../components/CopyToast';
import { useToast } from '../components/Toast/ToastProvider';

export const InviteLinkShareContainer = () => {
  const { isOpen, close } = useDialogContext();

  const handleClose = () => {
    close();
  };

  const searchParams = useSearchParams();

  const invitedCode = searchParams.get('invite-code');

  const { addToast } = useToast();
  const handleCopyUrl = () => {
    addToast(() => CopyToast({ content: '링크가 복사되었습니다.' }));
  };

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
          <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
            <CircleKakao />
            <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
              카카오톡 공유
            </Txt>
          </div>
          <div css={{ margin: `${size['3xs']} ${size.xs}`, textAlign: 'center' }}>
            {/* 실제 BASEURL을 등록 */}
            <CopyToClipboard text={`/meeting/join?invite-code=${invitedCode}`} onCopy={handleCopyUrl}>
              <div>
                <CircleCopy />
                <Txt as="p" typography="title4" color={colors.grey700} css={{ marginTop: size['6xs'] }}>
                  링크 복사
                </Txt>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </Modal>
  );
};
