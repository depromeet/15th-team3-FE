import { css } from '@emotion/react';
import { Badge, Txt } from '@sds/components';
import { borderRadiusVariants, colors, size } from '@sds/theme';
import Image from 'next/image';
import { Fragment } from 'react';

import { generateDate } from './generateDate';

export interface RenderArticleBase {
  tags: string[];
  writer: string;
  role: 'Frontend Developer' | 'Server Developer' | 'Designer';
  date: `${string}-${string}-${string}`;
  thumbnail: string;
}

export const RenderArticleBase = (props: RenderArticleBase) => {
  const { tags, writer, role, date, thumbnail } = props;

  return (
    <Fragment>
      <div css={imageCss}>
        <Image src={thumbnail} alt="thumbnail" layout="responsive" width={700} height={358} />
      </div>
      <div css={badgeContainers}>
        {tags.map((tag) => (
          <Badge key={tag} color={colors.grey300}>
            #{tag}
          </Badge>
        ))}
      </div>
      <Txt typography="body2">
        {writer}
        {' · '}
        {role}
      </Txt>
      <Txt typography="body3" color={colors.grey600} style={{ display: 'block' }}>
        {generateDate(date)}
      </Txt>
    </Fragment>
  );
};

const badgeContainers = css({
  display: 'flex',
  marginBottom: size['2xs'],

  '& > * + *': {
    marginLeft: size['7xs'],
  },
});

const imageCss = css({
  position: 'relative',
  width: '100%',
  borderRadius: borderRadiusVariants.medium,
  overflow: 'hidden',
  margin: `${size['2xs']} 0`,
});
