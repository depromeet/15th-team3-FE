'use client';

import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants, colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { AngleRightIcon } from '../../../../../../core/sds/src/components/Icon/assets/AngleRight';
import { HomePreviousQuestionItem } from '../components/PreviousQuestion/HomePreviousQuestionItem';
import { HomePreviousQuestionItemPlaceholder } from '../components/PreviousQuestion/HomePreviousQuestionItemPlaceholder';
import { HomePreviousQuestionList } from '../components/PreviousQuestion/HomePreviousQuestionList';
import { useTopPreviousQuestionListService } from '../services/useTopPreviousQuestionListService';

export const TopPreviousQuestionListContainer = () => {
  const { previousQuestionList, meetingId, isLoading } = useTopPreviousQuestionListService();

  if (!previousQuestionList || !previousQuestionList.contents.length) {
    return null;
  }

  if (isLoading) {
    return (
      <section css={{ width: '100%', padding: '32px 20px 12px' }}>
        <Txt
          as="p"
          typography="subtitle1"
          css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}
        >
          이전 질문
          <Link href="/home/previous-question" css={{ display: 'inline-flex', alignItems: 'center' }}>
            <Txt typography="title4" color={colors.grey600} css={{ marginRight: '4px' }}>
              전체보기
            </Txt>
            <span css={{ flexShrink: '0' }}>
              <AngleRightIcon color={colors.grey600} size={12} />
            </span>
          </Link>
        </Txt>
        <ul
          css={{
            width: '100%',
            borderRadius: borderRadiusVariants.medium,
            border: `1px solid ${colors.grey300}`,
          }}
        >
          <HomePreviousQuestionItemPlaceholder />
          <HomePreviousQuestionItemPlaceholder />
        </ul>
      </section>
    );
  }

  return (
    <section css={{ width: '100%', padding: '32px 20px 12px' }}>
      <Txt
        as="p"
        typography="subtitle1"
        color={colors.grey800}
        css={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}
      >
        이전 질문
        <Link href="/home/previous-question" css={{ display: 'inline-flex', alignItems: 'center' }}>
          <Txt typography="title4" color={colors.grey600} css={{ marginRight: '4px' }}>
            전체보기
          </Txt>
          <span css={{ flexShrink: '0' }}>
            <AngleRightIcon color={colors.grey600} size={12} />
          </span>
        </Link>
      </Txt>
      <HomePreviousQuestionList
        questionList={previousQuestionList.contents}
        renderItem={(item) => (
          <HomePreviousQuestionItem key={item.meetingQuestionId} question={item} meetingId={meetingId} />
        )}
      />
    </section>
  );
};
