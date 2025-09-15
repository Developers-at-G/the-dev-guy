import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'devguy-ui-components';

const meta: Meta<typeof Input> = {
  title: 'DevGuy UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    label: 'Text Input',
    placeholder: 'Enter some text',
  },
};

export const EmailInput: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const RequiredInput: Story = {
  args: {
    label: 'Required Field',
    required: true,
    placeholder: 'This field is required',
  },
};

export const DisabledInput: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'This input is disabled',
  },
};
