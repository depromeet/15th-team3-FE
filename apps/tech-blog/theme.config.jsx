export default {
  head: () => (
    <>
      <title>삼봤드의 모험 팀 기술 블로그</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="삼봤드의 모험 팀의 개발과 디자인에 대한 이야기를 다룹니다." />
    </>
  ),
  useNextSeoProps: () => ({
    openGraph: {
      images: [{ url: '' }],
    },
  }),
  footer: '',
};
