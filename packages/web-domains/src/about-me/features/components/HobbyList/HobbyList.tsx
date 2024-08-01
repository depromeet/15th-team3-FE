import { HobbyItem } from './HobbyItem';
import { itemContainerCss } from './styles';

interface HobbyListProps {
  contents: Array<{ hobbyId: number; content: string }>;
}

export const HobbyList = (props: HobbyListProps) => {
  const { contents } = props;

  return (
    <div css={itemContainerCss}>
      {contents.map((hobby) => (
        <HobbyItem key={hobby.hobbyId} title={hobby.content} />
      ))}
    </div>
  );
};
