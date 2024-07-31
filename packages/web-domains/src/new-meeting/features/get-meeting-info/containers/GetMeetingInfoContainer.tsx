'use client';

import { Button, Txt } from '@sambad/sds/components';
import { colors, size } from '@sambad/sds/theme';

import { CheckboxGroup } from '../components/Checkbox';
import { Label } from '../components/Label/Label';
import { TextField } from '../components/TextField/TextField';
import { useMeetingTypesService } from '../services/useMeetingTypesService';

export const GetMeetingInfoContainer = () => {
  const { meetingTypes } = useMeetingTypesService();

  return (
    <>
      <header css={{ padding: '40px 20px 0' }}>
        <Txt as="h1" typography="heading1" color={colors.black}>
          <Txt as="strong" typography="heading1" color={colors.primary500}>
            모임 정보
          </Txt>
          를
          <Txt as="p" typography="heading1" color={colors.black}>
            간단하게 적어보세요!
          </Txt>
        </Txt>
      </header>
      <section css={{ padding: '0 20px', marginTop: '48px' }}>
        <form>
          {/* 모임의 이름 */}
          <div>
            <Label title="#01" subTitle="모임의 이름은 무엇인가요?" />
            <TextField
              errorMessage="2자 이상, 10자 이하로 입력해주세요"
              placeholder="직업을 입력해주세요"
              css={{ marginTop: '8px' }}
            />
          </div>
          {/* 어떤 모임인지? */}
          <div>
            <Label title="#02" subTitle="어떤 모임인가요?" css={{ display: 'block', marginTop: '32px' }} />
            <div css={{ display: 'inline-flex', gap: '4px', marginTop: '8px', flexWrap: 'wrap' }}>
              <CheckboxGroup>
                {meetingTypes?.map((type, idx) => (
                  <CheckboxGroup.Item key={idx} label={type.content} value={type.meetingTypeId} />
                ))}
              </CheckboxGroup>
            </div>
            <Txt as="p" typography="body4" color={colors.grey500} css={{ marginTop: size['7xs'] }}>
              최대 2개까지만 선택해주세요.
            </Txt>
          </div>
          <div
            css={{
              position: 'fixed',
              bottom: '40px',
              width: '100%',
              left: '50%',
              transform: 'translate(-50%, 0px)',
              padding: '0 20px',
              maxWidth: '600px',
            }}
          >
            <Button size="large">완료</Button>
          </div>
        </form>
      </section>
    </>
  );
};
