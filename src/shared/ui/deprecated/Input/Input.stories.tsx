import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        //     backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const Dark: Story = {
    args: {
        placeholder: 'Type text',
        value: '123123',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};
