'use client';

import { Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';
import { ChangeEvent, useState } from 'react';

import { Circle } from '../../../common/assets/icons/Circle';
import { Rosette } from '../../../common/assets/icons/Rosette';
import { RoleRadioButton } from '../components/RoleRadioButton';
import { UserInfoButton } from '../components/UserInfoButton';

export const SelectRoleContainer = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChangeRadio = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <header
        css={{
          overflow: 'hidden',
          padding: `${size.xl} ${size['2xs']} ${size['xs']}`,
          marginTop: size['4xl'],
          textAlign: 'center',
        }}
      >
        <Txt as="h1" typography="heading1" color={colors.black}>
          <strong css={{ color: colors.primary500 }}>모링</strong>에 오신 걸 환영해요!
        </Txt>
        <Txt as="p" typography="body3" color={colors.grey600} css={{ marginTop: size['6xs'] }}>
          모임에서 어떤 역할인지 선택해주세요
        </Txt>
      </header>

      <section css={{ marginTop: '45px', padding: '0 20px', paddingBottom: '100px' }}>
        <RoleRadioButton
          label="모임장"
          subTitle="모임을 이끄는"
          value="owner"
          checkedValue={selectedValue}
          color={colors.quaternary300}
          onChange={handleChangeRadio}
        >
          <div css={{ position: 'absolute', bottom: '-60px', right: '-40px' }}>
            <Rosette />
          </div>
        </RoleRadioButton>
        <RoleRadioButton
          label="모임원"
          subTitle="모임에 참여하는"
          value="member"
          color={colors.primary300}
          checkedValue={selectedValue}
          onChange={handleChangeRadio}
        >
          <div css={{ position: 'absolute', bottom: '-4px', right: 0 }}>
            <Circle />
          </div>
        </RoleRadioButton>
      </section>

      <UserInfoButton selectedValue={selectedValue} />
    </>
  );
};
