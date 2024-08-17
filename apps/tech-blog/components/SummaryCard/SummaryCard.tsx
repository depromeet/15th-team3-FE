import { Txt } from '@sambad/sds/components';
import { borderRadiusVariants } from '@sds/theme';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { generateDate } from '@/../utils/generateDate';

import { titleAttribute } from './constants';
import { containerCss, descriptionCss, textContainerCss, titleCss } from './styles';

export interface SummaryCardProps {
  title: string;
  description: string;
  date: `${string}-${string}-${string}`;
  writer: string;
  thumbnail: string;
  href: string;
}

export const SummaryCard = (props: SummaryCardProps) => {
  const { title, description, date, writer, thumbnail, href } = props;
  const router = useRouter();

  return (
    <div css={containerCss} onClick={() => router.push(href)}>
      <div css={textContainerCss}>
        <Txt typography="heading2" css={titleCss} {...titleAttribute.attribute}>
          {title}
        </Txt>
        <Txt typography="title4" fontWeight="regular" css={descriptionCss}>
          {description}
        </Txt>
        <Txt typography="title4" fontWeight="regular">
          {generateDate(date)}
          {' · '}
          {writer}
        </Txt>
      </div>
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={130}
        height={90}
        sizes="(max-width: 480px) 100px, 75px"
        style={{ margin: 0, borderRadius: borderRadiusVariants.small }}
      />
    </div>
  );
};
