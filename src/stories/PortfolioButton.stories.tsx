import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'Portfolio/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A flexible button component with multiple variants, sizes, and loading states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost'],
      description: 'The visual style of the button',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Shows a loading spinner when true',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button when true',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Renders the button as a child element instead of a button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        With Icon
      </>
    ),
  },
};

export const AsChildExample: Story = {
  args: {
    asChild: true,
    children: (
      <a href="#" className="inline-block">
        Link styled as button
      </a>
    ),
  },
};
