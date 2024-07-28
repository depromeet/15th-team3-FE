import { Txt } from '@sambad/sds/components';
import Image from 'next/image';

import { imgWrapperCss, wrapperCss } from './Question.styles';

interface QuestionerProps {
  imageUrl: string;
  name: string;
}

export const Questioner = ({ imageUrl, name }: QuestionerProps) => {
  return (
    <li css={wrapperCss}>
      <div css={imgWrapperCss}>
        <Image src={imageUrl} alt={name} width={40} height={40} />
      </div>
      <Txt typography="title2" fontWeight="medium">
        {name}
      </Txt>
    </li>
  );
};
