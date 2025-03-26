import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';

import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ListBox> = {
    title: 'shared/ListBox',
    component: ListBox,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        // layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // args: { onClick: fn() },
    decorators: [
        (Story) => (
            <div style={{ padding: 100 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const TopLeft: Story = {
    args: {
        direction: 'top left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const TopRight: Story = {
    args: {
        direction: 'top right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const BottomLeft: Story = {
    args: {
        direction: 'bottom left',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const BottomRight: Story = {
    args: {
        direction: 'bottom right',
        value: '123',
        items: [
            { content: '1asfasfasf23', value: '123' },
            { content: '1asfasfasf21233', value: '1232' },
        ],
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
