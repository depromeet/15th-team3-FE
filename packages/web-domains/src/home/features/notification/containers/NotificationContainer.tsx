'use client';

import { AlreadyAnsweredQuestionNotification } from '../components/AlreadyAnsweredQuestionNotification';
// import { Button } from '@sambad/sds/components';

// import { Modal } from '../../../../common/components/Modal/Modal';
// import { useDialogContext } from '../../../../common/contexts/DialogProvider';
// import { ArrivedQuestionNotification } from '../components/ArrivedQuestionNotification';
// import { useDialogContext } from '../../../../common/contexts/DialogProvider';
// import { ExpiredQuestionNotification } from '../components/ExpiredQuestionNotification';
// import {
//   SelectedTargetMemberModal,
//   SelectedTargetMemberNotification,
// } from '../components/SelectedTargetMemberNotification';

export const NotificationContainer = () => {
  // const { isOpen, close } = useDialogContext();

  //   return <ArrivedQuestionNotification isOpen={true} />;
  return (
    <>
      <AlreadyAnsweredQuestionNotification isOpen={true} />
      {/* <ExpiredQuestionNotification isOpen={true} /> */}
      {/* <ProgressingQuestionNotification isOpen={isOpen} countdownTimer={dayjs().valueOf() + 4000000} onClose={close} /> */}
    </>
  );
  //   return <SelectedTargetMemberNotification isOpen={false} />;
};
