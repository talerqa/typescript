import type {Meta, StoryObj} from '@storybook/react';
import UncontroledRating from './UncontroledRating';

const meta: Meta<typeof UncontroledRating> = {
  title: 'UnControled Rating',
  component: UncontroledRating,
  tags: ['autodocs'],
  argTypes: {
    onClick: {action: 'clicked'},
  }
};

export default meta;
type Story = StoryObj<typeof UncontroledRating>;

const label = {label: 'Button'};

export const Uncontroled0: Story = {
  args: {
    value: 0,
    ...label
  }
}

export const Uncontroled1: Story = {
  args: {
    value: 1,
    ...label
  }
}

export const Uncontroled2: Story = {
  args: {
    value: 2,
    ...label
  }
}

export const Uncontroled3: Story = {
  args: {
    value: 3,
    ...label
  }
}

export const Uncontroled4: Story = {
  args: {
    value: 4,
    ...label
  }
}

export const Uncontroled5: Story = {
  args: {
    value: 5,
    ...label
  }
}

