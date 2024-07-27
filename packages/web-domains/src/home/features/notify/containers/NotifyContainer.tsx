'use client';

// import { Button } from '@sambad/sds/components';
import dayjs from 'dayjs';

// import { Modal } from '../../../../common/components/Modal/Modal';
// import { useDialogContext } from '../../../../common/contexts/DialogProvider';
// import { ArrivedQuestionNotification } from '../components/ArrivedQuestionNotification';
import { useDialogContext } from '../../../../common/contexts/DialogProvider';
import { ProgressingQuestionNotification } from '../components/ProgressingQuestionNotification';
// import {
//   SelectedTargetMemberModal,
//   SelectedTargetMemberNotification,
// } from '../components/SelectedTargetMemberNotification';

export const NotifyContainer = () => {
  const { isOpen, close } = useDialogContext();

  //   return <ArrivedQuestionNotification isOpen={true} />;
  return (
    <>
      <ProgressingQuestionNotification isOpen={isOpen} countdownTimer={dayjs().valueOf() + 4000000} onClose={close} />
    </>
  );
  //   return <SelectedTargetMemberNotification isOpen={false} />;
};
