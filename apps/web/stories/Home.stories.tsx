import type { Meta, StoryObj } from '@storybook/react';

import Home from '../app/page';

const meta = {
  title: 'Page/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};
