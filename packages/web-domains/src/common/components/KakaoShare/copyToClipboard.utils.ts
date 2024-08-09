export const copyToClipboard = async (textToCopy: string) => {
  // https 면 if 문 수행
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(textToCopy);
  } else {
    // 화면에 보이지 않는 textarea를 body 앞(prepend) 생성
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
};
