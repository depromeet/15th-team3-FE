import { IconAssetProps } from '@sambad/sds/components';
import { colors } from '@sambad/sds/theme';

export const QuestionIcon = (props: IconAssetProps) => {
  const { color = colors.primary500 } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
      <g clipPath="url(#a)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M15.833.466a11.936 11.936 0 0 1 4.322 2.292 12.043 12.043 0 0 1 4.325 8.488V19a5.006 5.006 0 0 1-5 5h-6.982A12 12 0 0 1 10.954.1a11.936 11.936 0 0 1 4.879.366Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M12.484 6c1.537 0 2.736.687 3.598 2.062a3.28 3.28 0 0 1 .418 1.584v.18c0 1.404-.803 2.52-2.41 3.346l-.578.15v1.016c-.091.638-.423.956-.996.956h-.032c-.455 0-.777-.229-.964-.687l-.032-.18v-1.912c0-.503.31-.822.932-.956.996 0 1.66-.449 1.992-1.345l.064-.478c0-.882-.503-1.48-1.51-1.793l-.482-.06c-.921 0-1.564.478-1.928 1.434 0 .897-.342 1.345-1.028 1.345H9.4c-.407 0-.707-.259-.9-.777v-.269c0-1.315.728-2.39 2.185-3.227A4.741 4.741 0 0 1 12.484 6Zm0 11.117c.584 0 .926.329 1.028.986-.118.598-.439.897-.964.897h-.096c-.546 0-.868-.309-.964-.926v-.06c0-.458.332-.757.996-.897Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.5 0h24v24H.5z" />
        </clipPath>
      </defs>
    </svg>
  );
};
