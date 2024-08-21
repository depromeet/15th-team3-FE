'use client';

import { colors } from '@sds/theme';

import { BottomSheet } from '@/home/common/components/BottomSheet/BottomSheet';

import { GatherName } from '../../progressing-question/components/GatherName/GatherName';
import { useMeetingIntroService } from '../services/useMeetingIntroService';

export const MeetingIntroContainer = () => {
  const { gatherName, isOpen, handleCloseBottomSheet, handleOpenBottmSheet } = useMeetingIntroService();

  return (
    <section css={{ width: '100%', backgroundColor: colors.primary100, padding: '0 20px' }}>
      <GatherName gatherName={gatherName} subTitle="우리 모임의 모임원들이에요!" onClick={handleOpenBottmSheet} />
      <BottomSheet isOpen={isOpen} onClose={handleCloseBottomSheet}>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
        <div css={{ height: '50px', border: '1px solid black' }}>test</div>
      </BottomSheet>
    </section>
  );
};
