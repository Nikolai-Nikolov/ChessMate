import type { Meta, StoryObj } from '@storybook/react';
import Board from '../Board';
import { Provider } from 'react-redux';
import store from '../store';

const meta = {
  title: 'Resources/Board',
  component: Board,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ],
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: { asViewedByWhite: true }
} satisfies Meta<typeof Board>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WhitePlayer: Story = {
  args: {
    asViewedByWhite: true
  }
};

export const BlackPlayer: Story = {
  args: {
    asViewedByWhite: false
  }
};
