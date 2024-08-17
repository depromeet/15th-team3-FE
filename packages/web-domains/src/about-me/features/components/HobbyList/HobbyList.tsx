import { Txt } from '@sambad/sds/components';
import { Fragment } from 'react/jsx-runtime';

import { subTitleAttribute } from '../../containers/constants';
import { titleCss } from '../../containers/styles';

import { HobbyItem } from './HobbyItem';
import { itemContainerCss } from './styles';

interface HobbyListProps {
  contents?: Array<string>;
}

export const HobbyList = (props: HobbyListProps) => {
  const { contents } = props;

  const hasContents = !!contents?.length;

  if (!hasContents) return;

  return (
    <Fragment>
      <Txt typography="subtitle1" css={titleCss} {...subTitleAttribute.attribute}>
        모임원들과 이런 걸 함께하고 싶어요
      </Txt>
      <div css={itemContainerCss}>{contents?.map((hobby) => <HobbyItem key={hobby} title={hobby} />)}</div>
    </Fragment>
  );
};
