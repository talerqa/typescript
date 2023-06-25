import React, {useState} from 'react';
import {Meta, StoryObj} from '@storybook/react';
import {Clock} from '../components/clock/Clock';
import {KeyComponent} from '../components/KeyPress/KeyStory';

const meta: Meta<typeof KeyComponent> = {
  title: 'Key',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  args: {}

};
export default meta;
type Story = StoryObj<typeof Clock>;

export const KeyStory: Story = {
  args: {},
  render: () => <KeyComponent/>
};





