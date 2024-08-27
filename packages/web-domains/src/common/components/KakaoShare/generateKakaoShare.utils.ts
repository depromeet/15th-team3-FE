declare global {
  interface Window {
    Kakao: any;
  }
}

interface ShareToKakaoProps {
  shareImageUrl: string;
  shareDescription: string;
  shareLink: string;
}

const buttonTextMap: Record<string, string> = {
  'https://file.moring.one/defaults/invite_narrow.png': '모임 참여하기',
  'https://file.moring.one/defaults/question_narrow.png': '답변하러 가기',
  'https://file.moring.one/defaults/new_question_narrow.png': '답변하러 가기',
};

export const generateKakaoShare = ({ shareLink, shareImageUrl, shareDescription }: ShareToKakaoProps) => {
  const { Kakao } = window;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '모링',
      description: shareDescription,
      imageUrl: shareImageUrl,
      imageWidth: 600,
      imageHeight: 800,
      link: {
        webUrl: shareLink,
        mobileWebUrl: shareLink,
      },
    },
    buttons: [
      {
        title: buttonTextMap[shareImageUrl],
        link: {
          webUrl: shareLink,
          mobileWebUrl: shareLink,
        },
      },
    ],
  });
};
