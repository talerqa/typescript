import type {Meta, StoryObj} from '@storybook/react';

import {
  ControlledChecked,
  ControlledInput,
  GetValueInputUncontrolled,
  Input,
  InputUncontrolled
} from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  subcomponents: {
    InputUncontrolled,
    GetValueInputUncontrolled,
    ControlledInput,
    ControlledChecked,
  }
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input',
  },
};

export const inputUncontrolled: Story = {
  args: {
    primary: true,
    label: 'InputUncontrolled',
  },
  render: (args) => <InputUncontrolled/>
};

export const getInputUncontrolled: Story = {
  args: {


  },
  render: (args) => <GetValueInputUncontrolled/>
};

export const controlledInput: Story = {
  args: {
    primary: true,
    label: 'ControlledInput',
  },
  render: (args) => <ControlledInput/>
};

export const controlledCheckbox: Story = {
  args: {
    primary: true,
    label: 'ControlledCheckbox',
  },
  render: (args) => <ControlledChecked/>
};







