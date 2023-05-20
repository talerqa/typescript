import type {Meta, StoryObj} from '@storybook/react';
import {ControledAccordion} from './ControledAccordion';

const meta: Meta<typeof ControledAccordion> = {
  title: 'Accordion',
  component: ControledAccordion,
  tags: ['autodocs'],
  argTypes: { onClick: { action: 'clicked' } },
} as Meta <typeof ControledAccordion>
export default meta;

type Story = StoryObj<typeof ControledAccordion>;

export const Collapase: Story = {
  args: {
    titleValue: 'Menu Collapsed',
    collapsed: false,
    onChange: () => false,
    items: [
      {title: 'Dyma', value: '1'},
      {title: 'Lesha', value: '2'},
      {title: 'Misha', value: '3'},
      {title: 'Grisha', value: '4'},
      {title: 'Vusha', value: '5'},
    ]
  },
}
export const unCollapsed: Story = {
  args: {
    titleValue: 'Menu unCollapsed',
    collapsed: true,
    onChange: () => false,
    items: [
      {title: 'Dyma', value: '1'},
      {title: 'Lesha', value: '2'},
      {title: 'Misha', value: '3'},
      {title: 'Grisha', value: '4'},
      {title: 'Vusha', value: '5'},
    ],
  },
}