'use client';

import { colors, size } from '@sambad/sds/theme';
import { SegmentedControl, TextButton, Txt } from '@sds/components';

import {
  aboutMeSectionCss,
  screenRootCss,
  segmentedCss,
  segmentedSectionCss,
} from '@/about-me/features/containers/styles';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { AboutMe } from '../components/AboutMe';
import { AnswerQuestions } from '../components/AnswerQuestions';
import { MyProfile } from '../components/MyProfile';
import { useMyprofileService } from '../services/useMyprofileService';

export const MyprofileContainer = () => {
  const { segmentedRef, data, answers, handleTab, tab, meetingId, isModifyPage, handleModify, handleMoveToModifyPage } =
    useMyprofileService();

  return (
    <div css={screenRootCss}>
      <ActionBar
        disableBack
        title="마이 프로필"
        rightDecor={
          <TextButton
            variant="normal"
            color={colors.primary500}
            onClick={isModifyPage ? handleModify : handleMoveToModifyPage}
          >
            {/* NOTE: sds에서 Txt 컴포넌트가 css로 오버라이딩이 되지 않는 무제 해결 후 inherit 제거 예정 */}
            <Txt typography="subTitle2" style={{ color: 'inherit' }}>
              {isModifyPage ? '수정완료' : '수정하기'}
            </Txt>
          </TextButton>
        }
      />
      <div style={layoutStyle}>
        <MyProfile meetingId={meetingId} profileInfo={data} />

        <section css={segmentedSectionCss} style={sectionStyle}>
          <SegmentedControl value={tab} onValueChange={handleTab} css={segmentedCss}>
            <SegmentedControl.Item value="about-me">자기소개</SegmentedControl.Item>
            <SegmentedControl.Item value="answered-questions">릴레이 질문</SegmentedControl.Item>
          </SegmentedControl>
          <div css={aboutMeSectionCss}>
            <div css={aboutMeSectionCss}>
              {tab === 'about-me' && <AboutMe info={data} />}
              {tab === 'answered-questions' && (
                <AnswerQuestions isModifyPage={isModifyPage} answers={answers} ref={segmentedRef} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const layoutStyle = {
  backgroundColor: colors.grey200,
};

const sectionStyle = {
  marginTop: size['5xs'],
};
