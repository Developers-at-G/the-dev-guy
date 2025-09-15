import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'devguy-ui-components';

const meta: Meta<typeof Card> = {
  title: 'DevGuy UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  args: {
    title: 'Sample Card',
    children: 'This is the content of the card. It can contain any React elements.',
  },
};

export const CardWithoutTitle: Story = {
  args: {
    children: 'This card has no title, just content.',
  },
};

export const CardWithLongContent: Story = {
  args: {
    title: 'Card with Long Content',
    children: (
      <div>
        <p>This card contains more complex content:</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p>And some additional text to demonstrate how the card handles longer content.</p>
      </div>
    ),
  },
};
