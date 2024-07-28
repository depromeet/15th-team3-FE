'use client';

import { Txt } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';
import Link from 'next/link';

import { AngleRightIcon } from '../../../../../../core/sds/src/components/Icon/assets/AngleRight';
import { HomePreviousQuestionList } from '../components/PreviousQuestion/HomePreviousQuestionList';
import { useTopPreviousQuestionListService } from '../services/useTopPreviousQuestionListService';

export const TopPreviousQuestionListContainer = () => {
  const { previousQuestionList } = useTopPreviousQuestionListService();

  if (!previousQuestionList || !previousQuestionList.length) {
    return null;
  }

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
      <HomePreviousQuestionList questionList={previousQuestionList} />
    </section>
  );
};
