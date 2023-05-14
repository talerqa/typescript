import type {Meta, StoryObj} from '@storybook/react';

import {InputUncontrolled} from './Input';

const meta: Meta<typeof InputUncontrolled> = {
  title: 'InputUncontrolled',
  component: InputUncontrolled,

};
export default meta;
type Story = StoryObj<typeof InputUncontrolled>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'InputUncontrolled',
  },
};

