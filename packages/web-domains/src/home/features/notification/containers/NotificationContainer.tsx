'use client';

import { ArrivedQuestionNotification } from '../components/ArrivedQuestionNotification';
import { SelectedTargetMemberNotification } from '../components/SelectedTargetMemberNotification';
import { useNotificationService } from '../services/useNotificationService';
export const NotificationContainer = () => {
  const { notfication, handleClose, isOpen, isNotAnswerd } = useNotificationService();

  return (
    <>
      {notfication?.eventType === 'QUESTION_REGISTERED' && isNotAnswerd && (
        <ArrivedQuestionNotification isOpen={isOpen} onClose={handleClose} />
      )}
      {notfication?.eventType === 'TARGET_MEMBER' && (
        <SelectedTargetMemberNotification isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
};
