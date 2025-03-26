import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Skeleton> = {
    title: 'shared/Skeleton',
    component: Skeleton,
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
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const Circle: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const NormalDark: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};

export const CircleDark: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};

export const NormalOrange: Story = {
    args: {
        width: '100%',
        height: 200,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.ORANGE}`}>
                <Story />
            </div>
        ),
    ],
};

export const CircleOrange: Story = {
    args: {
        border: '50%',
        width: 100,
        height: 100,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.ORANGE}`}>
                <Story />
            </div>
        ),
    ],
};
