import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import {Clock} from '../components/clock/Clock';

const meta: Meta<typeof Clock> = {
  title: 'Clock',
  component: Clock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {

  }

};

export default meta;
type Story = StoryObj<typeof Clock>;

export const ClockStory: Story = {
  args: {

  },
};

export const ClockRender: Story = {
  render: (args)=> <Clock/>
}

