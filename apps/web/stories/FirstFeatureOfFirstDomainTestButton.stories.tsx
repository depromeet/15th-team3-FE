'use client';

import { FirstFeatureOfFirstDomainTestButton } from '@sambad/web-domains/first-domain';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/FirstFeatureOfFirstDomainTestButton',
  component: FirstFeatureOfFirstDomainTestButton,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'FirstFeatureOfFirstDomainTestButton 컴포넌트가 표시할 내용을 정의합니다.',
    },
  },
} satisfies Meta<typeof FirstFeatureOfFirstDomainTestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
  render: (args) => <FirstFeatureOfFirstDomainTestButton {...args} />,
};
