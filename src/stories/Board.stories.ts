import type { Meta, StoryObj } from '@storybook/react';
import Board from '../Board';

const meta = {
  title: 'Resources/Board',
  component: Board,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { asViewedByWhite: true },
} satisfies Meta<typeof Board>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WhitePlayer: Story = {
  args: {
    asViewedByWhite: true
  },
};

export const BlackPlayer: Story = {
  args: {
    asViewedByWhite: false,
  },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
