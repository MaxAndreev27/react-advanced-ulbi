import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextSize, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
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
type Story = StoryObj<typeof Text>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const Error: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        theme: TextTheme.ERROR,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const OnlyTitle: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const OnlyText: Story = {
    args: {
        text: 'Description Description Description Description',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};

export const PrimaryDark: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Title lorem ipsun',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Description Description Description Description',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.DARK}`}>
                <Story />
            </div>
        ),
    ],
};

export const SizeS: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.S,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.ORANGE}`}>
                <Story />
            </div>
        ),
    ],
};

export const SizeM: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.M,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.ORANGE}`}>
                <Story />
            </div>
        ),
    ],
};

export const SizeL: Story = {
    args: {
        title: 'Title lorem ipsun',
        text: 'Description Description Description Description',
        size: TextSize.L,
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.ORANGE}`}>
                <Story />
            </div>
        ),
    ],
};
