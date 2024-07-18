import { Button } from '../components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button 컴포넌트가 표시할 내용을 정의합니다.',
    },
    appName: {
      control: 'text',
      description: 'Button 컴포넌트를 click시 표시할 alert 내용을 정의합니다.',
    },
    className: {
      control: 'text',
      description: 'Button 컴포넌트의 className을 정의합니다.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    appName: 'undefined',
    className: 'undefined',
  },
  render: (args) => <Button {...args} />,
};
