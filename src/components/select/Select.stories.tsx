import type {Meta, StoryObj} from '@storybook/react';

import {ControlledSelect, Select} from './Select';

const meta: Meta<typeof ControlledSelect> = {
  title: 'Select',
  component: ControlledSelect,
  subcomponents: {
    Select,
  }
};
export default meta;
type Story = StoryObj<typeof ControlledSelect>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Input',
  },
};

export const Base: Story = {
  args: {
    value: '2',
    items: [
      {city: 'Minsk', value: '1'},
      {city: 'Kiev', value: '2'},
      {city: 'Praga', value: '3'},
      {city: 'Vilnus', value: '4'},
      {city: 'Warsawa', value: '5'},
    ]

  },
  render: (args) => <Select/>
};






