'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sds/theme';

import { GatherMemberProfileList } from '../components/GatherMemberProfile/GatherMemberProfileList';
import { useGatherMemberProfileListService } from '../services/useGatherMemberProfileListService';

export const GatherMemberProfileListContainer = () => {
  const { gatherMemberList } = useGatherMemberProfileListService();

  if (!gatherMemberList || !gatherMemberList.length) {
    return null;
  }

  return (
    <section css={{ width: '100%', padding: '18px 20px 112px' }}>
      <Txt as="p" typography="subtitle1" color={colors.grey800} css={{ marginBottom: '14px' }}>
        모임원 프로필
      </Txt>
      <GatherMemberProfileList memberList={gatherMemberList} />
    </section>
  );
};
