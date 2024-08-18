'use client';

import { Icon } from '@sds/components';

import { KakaoShareModal } from '@/common';

import { GatherMemberProfileList } from '../components/GatherMemberProfile/GatherMemberProfileList';
import { GatherMemberSearchInput } from '../components/GatherMemberSearch/GatherMemberSearchInput';
import { useGatherMemberProfileListService } from '../services/useGatherMemberProfileListService';

export const GatherMemberProfileListContainer = () => {
  const { isOpen, gatherMemberList, searchInput, handleChangeSearchInput, inviteModalClose, inviteModalOpen } =
    useGatherMemberProfileListService();

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
      <GatherMemberProfileList memberList={gatherMemberList} />
      <KakaoShareModal
        isOpen={isOpen}
        onClose={inviteModalClose}
        topTitle="모임원들을 모링으로"
        bottomTitle="초대해보세요!"
      />
    </section>
  );
};
