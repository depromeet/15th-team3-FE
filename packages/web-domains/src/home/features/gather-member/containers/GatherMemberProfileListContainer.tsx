'use client';

import { Icon } from '@sds/components';

import { GatherMemberProfileList } from '../components/GatherMemberProfile/GatherMemberProfileList';
import { GatherMemberSearchInput } from '../components/GatherMemberSearch/GatherMemberSearchInput';
import { useGatherMemberProfileListService } from '../services/useGatherMemberProfileListService';

export const GatherMemberProfileListContainer = () => {
  const { gatherMemberList, searchInput, handleChangeSearchInput } = useGatherMemberProfileListService();

  return (
    <section css={{ width: '100%', padding: '24px 20px' }}>
      <GatherMemberSearchInput
        BeforeIcon={<Icon name="search-icon" size={16} />}
        value={searchInput}
        onChange={handleChangeSearchInput}
      />
      <GatherMemberProfileList memberList={gatherMemberList} />
    </section>
  );
};
