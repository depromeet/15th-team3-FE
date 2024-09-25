'use client';

import { Icon } from '@sambad/sds/components';

import { KakaoShareModal } from '@/common';

import { GatherMemberProfileList } from '../components/GatherMemberProfile/GatherMemberProfileList';
import { GatherMemberSearchInput } from '../components/GatherMemberSearch/GatherMemberSearchInput';
import { useGatherMemberProfileListService } from '../services/useGatherMemberProfileListService';

export const GatherMemberProfileListContainer = () => {
  const {
    meetingId,
    meetingName,
    isOpen,
    gatherMemberList,
    searchInput,
    inviteLink,
    handleChangeSearchInput,
    inviteModalClose,
    inviteModalOpen,
  } = useGatherMemberProfileListService();

  return (
    <section css={{ width: '100%', padding: '24px 20px' }}>
      <div css={{ display: 'flex' }}>
        <GatherMemberSearchInput
          BeforeIcon={<Icon name="search-icon" size={16} />}
          value={searchInput}
          onChange={handleChangeSearchInput}
        />
        <button css={{ marginLeft: '12px', cursor: 'pointer' }} onClick={inviteModalOpen}>
          <span>
            <Icon name="add-user" size={24} />
          </span>
        </button>
      </div>
      <GatherMemberProfileList memberList={gatherMemberList} meetingId={meetingId!} />
      <KakaoShareModal
        isOpen={isOpen}
        onClose={inviteModalClose}
        topTitle="모임원들을 모링으로"
        bottomTitle="초대해보세요!"
        shareDescription={`${meetingName} 모임에 여러분들을 초대합니다`}
        shareImageUrl="https://file.moring.one/defaults/invite_narrow.png"
        shareLink={inviteLink}
      />
    </section>
  );
};
