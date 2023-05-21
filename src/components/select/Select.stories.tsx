import type {Meta, StoryObj} from '@storybook/react';

import {ControlledSelect, Select, SelectPropsType} from './Select';
import {useState} from 'react';
////////////////
export default {
  title: 'Select',
  component: ControlledSelect,
  subcomponents: {
    Select,
  },
  tags: ['autodocs'],
  argTypes: {

    onClick: {action: 'clicked'}
  },

} as Meta


//Как в редьюсерах пишу тип для Компонента
type StoryControlledSelect = StoryObj<typeof ControlledSelect>
export const Primary: StoryControlledSelect = {
  args: {
    primary: true,
    label: 'Input',
  },
};


//////////////
//Как в редьюсерах пишу тип для Компонента
type StoryInput = StoryObj<typeof Select>

export const SelectComponent = () => {
  const [value, setValue] = useState('1')
  const args = {
    args: {
      value: value,
      items: [
        {city: 'Minsk', value: '1'},
        {city: 'Kiev', value: '2'},
        {city: 'Praga', value: '3'},
        {city: 'Vilnus', value: '4'},
        {city: 'Warsawa', value: '5'},
      ],
      onChange: setValue,
    }
  }
  return <Select
    value={args.args.value}
    items={args.args.items}
    onChange={args.args.onChange}
  />
}

export const Base: StoryInput = {
  args: {
    value: '1',
    items: [
      {city: 'Minsk', value: '1'},
      {city: 'Kiev', value: '2'},
      {city: 'Praga', value: '3'},
      {city: 'Vilnus', value: '4'},
      {city: 'Warsawa', value: '5'},
    ],
    onChange: () => {
    },
  },
  render: (args) => {
    return <Select
      value={args.value}
      items={args.items}
      onChange={args.onChange}
    />
  }
};



