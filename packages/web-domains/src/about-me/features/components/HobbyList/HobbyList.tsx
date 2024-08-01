import { HobbyItem } from './HobbyItem';
import { itemContainerCss } from './styles';

interface HobbyListProps {
  contents?: Array<string>;
}

export const HobbyList = (props: HobbyListProps) => {
  const { contents } = props;

  return <div css={itemContainerCss}>{contents?.map((hobby) => <HobbyItem key={hobby} title={hobby} />)}</div>;
};
