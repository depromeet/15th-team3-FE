'use client';

import { ArrivedQuestionNotification } from '../components/ArrivedQuestionNotification';
import { SelectedTargetMemberNotification } from '../components/SelectedTargetMemberNotification';
import { useNotificationService } from '../services/useNotificationService';
export const NotificationContainer = () => {
  const { notfication, handleClose, isOpen, isNotAnswerd, isNotRegistered } = useNotificationService();

  return (
    <>
      {notfication?.eventType === 'QUESTION_REGISTERED' && isNotAnswerd && (
        <ArrivedQuestionNotification isOpen={isOpen} onClose={handleClose} />
      )}
      {notfication?.eventType === 'TARGET_MEMBER' && isNotRegistered && (
        <SelectedTargetMemberNotification isOpen={isOpen} onClose={handleClose} />
      )}
    </>
  );
};
