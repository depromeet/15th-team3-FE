declare global {
  interface Window {
    Kakao: any;
  }
}

export interface generateKakaoShareParams {
  description: string;
  imageUrl: string;
  imageWidth?: number;
  imageHeight?: number;
  shareLink: string;
}

export const kakaoShare = ({
  description,
  imageUrl,
  imageWidth = 600,
  imageHeight = 800,
  shareLink,
}: generateKakaoShareParams) => {
  const { Kakao } = window;

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: '모링',
      description,
      imageUrl,
      imageWidth,
      imageHeight,
      link: {
        webUrl: shareLink,
      },
    },
  });
};
