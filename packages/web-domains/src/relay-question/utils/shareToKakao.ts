declare global {
  interface Window {
    Kakao: any;
  }
}

export type KakaoShareOpenGraphKeyType = keyof typeof openGraphMap;

// TODO: 타입 안정성 확보 필요
interface ShareToKakaoProps {
  openGraphKey: KakaoShareOpenGraphKeyType;
  questionerName?: string;
  questionId?: number;
}

const INIT_NAME = '000';
const locationHref = typeof window === 'undefined' ? '' : window.location.href;

const openGraphMap = {
  inviteGroup: {
    imageUrl: 'https://file.moring.one/defaults/invite_narrow.png',
    description: '삼봤드의 모험 모임에 여러분들을 초대합니다',
    shareLink: locationHref,
  },
  newQuestion: {
    imageUrl: 'https://file.moring.one/defaults/new_question_narrow.png',
    description: (questionerName: string) =>
      `새로운 질문이 도착했어요! 지금 바로 답변 하러 가볼까요? 다음 질문인은 ${questionerName}님이에요`,
    shareLink: (questionId: number) => `${locationHref}?question-id=${questionId}`,
  },
  nextQuestioner: {
    imageUrl: 'https://file.moring.one/defaults/new_question_narrow.png',
    description: (questionerName: string) =>
      `다음 질문인은 ${questionerName}님이에요! 현재 진행 중인 릴레이 질문이 끝나면 질문을 꼭! 생성해주세요`,
    shareLink: locationHref,
  },
  hurryAnswer: {
    imageUrl: 'https://file.moring.one/defaults/question_narrow.png',
    description: '삼봤드의 모험 모임 질문을 잊진 않으셨나요?',
    shareLink: locationHref,
  },
};

const generateOpenGraph = ({ openGraphKey, questionId, questionerName }: ShareToKakaoProps) => {
  const openGraphInfo = openGraphMap[openGraphKey];

  const imageUrl = openGraphInfo.imageUrl;
  const shareLink =
    typeof openGraphInfo.shareLink === 'string' ? openGraphInfo.shareLink : openGraphInfo.shareLink(questionId || -1);
  const description =
    typeof openGraphInfo.description === 'string'
      ? openGraphInfo.description
      : openGraphInfo.description(questionerName || INIT_NAME);

  return {
    imageUrl,
    shareLink,
    description,
  };
};

export const shareToKakao = ({ openGraphKey, questionId, questionerName }: ShareToKakaoProps) => {
  const { Kakao } = window;
  const { imageUrl, shareLink, description } = generateOpenGraph({ openGraphKey, questionId, questionerName });

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: 'Moring',
      description,
      imageUrl,
      imageWidth: 600,
      imageHeight: 800,
      link: {
        webUrl: shareLink,
      },
    },
  });
};
