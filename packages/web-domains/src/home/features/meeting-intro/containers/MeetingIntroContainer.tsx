'use client';

import { colors } from '@sds/theme';

import { GatherName } from '../../progressing-question/components/GatherName/GatherName';
import { useMeetingIntroService } from '../services/useMeetingIntroService';

export const MeetingIntroContainer = () => {
  const { gatherName } = useMeetingIntroService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName gatherName={gatherName} />
    </section>
  );
};
