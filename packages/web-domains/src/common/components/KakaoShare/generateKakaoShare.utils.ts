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

export const generateKakaoShare = ({ shareLink, shareImageUrl, shareDescription }: ShareToKakaoProps) => {
  const { Kakao } = window;
  console.log(shareLink);
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
  });
};
