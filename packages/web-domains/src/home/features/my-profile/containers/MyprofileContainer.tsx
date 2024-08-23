'use client';

import { colors, size } from '@sambad/sds/theme';
import { SegmentedControl, Txt } from '@sds/components';
import Link from 'next/link';

import { Profile } from '@/about-me/features/components';
import {
  aboutMeSectionCss,
  screenRootCss,
  segmentedCss,
  segmentedSectionCss,
} from '@/about-me/features/containers/styles';
import { ActionBar } from '@/common/components/ActionBar/ActionBar';

import { AboutMe } from '../components/AboutMe';
import { AnswerQuestions } from '../components/AnswerQuestions';
import { useMyprofileService } from '../services/useMyprofileService';

export const MyprofileContainer = () => {
  const { data, answers, handleTab, tab, meetingId } = useMyprofileService();

  return (
    <div css={screenRootCss}>
      <ActionBar
        title="마이 프로필"
        disableBack
        css={{ height: '64px' }}
        addOn={
          <Link href={`/${meetingId}/user/modify`}>
            <Txt typography="subTitle2" color={colors.primary500}>
              수정하기
            </Txt>
          </Link>
        }
      />
      <div style={layoutStyle}>
        <section style={{ marginBottom: size['5xs'] }}>
          <Profile
            name={data?.name}
            imageUrl={data?.profileImageFileUrl}
            birth={data?.birth}
            gender={data?.gender}
            mbti={data?.mbti}
            location={data?.location}
            job={data?.job}
          />
        </section>

        <section css={segmentedSectionCss} style={sectionStyle}>
          <SegmentedControl value={tab} onValueChange={handleTab} css={segmentedCss}>
            <SegmentedControl.Item value="about-me">자기소개</SegmentedControl.Item>
            <SegmentedControl.Item value="answered-questions">릴레이 질문</SegmentedControl.Item>
          </SegmentedControl>
          <div css={aboutMeSectionCss}>
            {tab === 'about-me' && <AboutMe info={data} />}
            {tab === 'answered-questions' && <AnswerQuestions answers={answers} />}
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
