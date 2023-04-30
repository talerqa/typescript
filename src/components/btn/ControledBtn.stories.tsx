import type {Meta, StoryObj} from '@storybook/react';
import {ControledOnOff} from './ControledBtn';

const meta: Meta<typeof ControledOnOff> = {
  title: 'Button',
  component: ControledOnOff,
};

export default meta;
type Story = StoryObj<typeof ControledOnOff>;

export const Primary: Story = {
  args: {
    statusButton: false,
    setStatusButton: (status) => {},
  }
}