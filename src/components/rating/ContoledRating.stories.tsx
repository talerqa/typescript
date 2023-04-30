import type {Meta, StoryObj} from '@storybook/react';
import {ContoledRating} from './ContoledRating';

const meta: Meta<typeof ContoledRating> = {
  title: 'Controled Rating',
  component: ContoledRating,
  tags: ['autodocs'],
  argTypes: {onClick: {action: 'clicked'}},
};

export default meta;
type Story = StoryObj<typeof ContoledRating>;

const label = {label: 'Button'};

  export const Primary0: Story = {
  args: {
    value: 0,
    ...label
  }
}

export const Primary: Story = {
  args: {
    value: 1,
    ...label
  }
}

export const Primary1: Story = {
  args: {
    value: 2,
    ...label
  }
}

export const Primary2: Story = {
  args: {
    value: 3,
    ...label
  }
}

export const Primary3: Story = {
  args: {
    value: 4,
    ...label
  }
}

export const Primary4: Story = {
  args: {
    value: 5,
    ...label
  }
}

