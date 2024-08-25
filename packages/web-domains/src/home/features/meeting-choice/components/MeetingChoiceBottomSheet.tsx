import { Txt, Icon } from '@sds/components';
import { borderRadiusVariants, colors } from '@sds/theme';
import Link from 'next/link';

import { MeetingInfoType } from '@/home/common/apis/schema/Meeting.schema';
import { BottomSheet } from '@/home/common/components/BottomSheet/BottomSheet';

interface MeetingChoiceBottomSheetProps {
  currentMeetingId?: number;
  meetingList: MeetingInfoType[];
  isOpen: boolean;
  onClose: () => void;
  onChange: (meeting: MeetingInfoType) => void;
}

export const MeetingChoiceBottomSheet = ({
  currentMeetingId,
  meetingList,
  isOpen,
  onClose,
  onChange,
}: MeetingChoiceBottomSheetProps) => {
  const selectMeeting = (meeting: MeetingInfoType) => {
    onChange(meeting);
    onClose();
  };

  const isCurrent = (meeting: MeetingInfoType) => currentMeetingId === meeting.meetingId;

  return (
    <BottomSheet title="모임 변경하기" isOpen={isOpen} onClose={onClose}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          height: '48px',
          borderRadius: borderRadiusVariants.medium,
          backgroundColor: colors.white,
          marginBottom: '16px',
        }}
      >
        <Txt typography="title2" color={colors.black}>
          전체 모임(체험판)
        </Txt>
      </div>
      <ul
        css={{
          listStyle: 'none',
          borderRadius: borderRadiusVariants.medium,
          backgroundColor: colors.white,
          marginBottom: '16px',
        }}
      >
        {meetingList.map((meeting) => {
          const currentFlag = isCurrent(meeting);

          return (
            <li
              onClick={() => selectMeeting(meeting)}
              key={meeting.meetingId}
              css={{
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
            >
              <Txt
                typography={currentFlag ? 'heading3' : 'title2'}
                color={currentFlag ? colors.primary500 : colors.black}
              >
                {meeting.name}
              </Txt>
              {currentFlag && <Icon name="check-icon" size={24} />}
            </li>
          );
        })}
      </ul>
      <Link
        href="/user"
        css={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          height: '48px',
          borderRadius: borderRadiusVariants.medium,
          backgroundColor: colors.white,
          marginBottom: '16px',
        }}
      >
        <Icon name="add-meeting" size={20} css={{ marginRight: '12px' }} />
        <Txt typography="title2" color={colors.black}>
          모임 추가하기
        </Txt>
      </Link>
    </BottomSheet>
  );
};
