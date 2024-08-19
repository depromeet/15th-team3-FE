'use client';

import { Button, Icon } from '@sds/components';

const Page = () => {
  return (
    <Button size="large" leftDecor={<Icon name="upload" />}>
      단톡방에 공유하기
    </Button>
  );
};
export default Page;
