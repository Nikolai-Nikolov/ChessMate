import type { Meta, StoryObj } from '@storybook/react';
import ChessPiece from '../ChessPiece';

const meta = {
  title: 'Resources/ChessPiece',
  component: ChessPiece,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    type: 'pawn',
    color: 'black'
  }
} satisfies Meta<typeof ChessPiece>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WhitePawn: Story = {
  args: {
    type: 'pawn',
    color: 'white'
  }
};

export const BlackPawn: Story = {
  args: {
    type: 'pawn',
    color: 'black'
  }
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
