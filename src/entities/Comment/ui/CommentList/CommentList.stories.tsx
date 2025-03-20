import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
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
type Story = StoryObj<typeof CommentList>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        comments: [
            {
                id: '1',
                text: 'hello world',
                user: { id: '1', username: 'Vasya' },
            },
            {
                id: '2',
                text: 'Comment 2',
                user: { id: '1', username: 'Petya' },
            },
        ],
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export const Loading: Story = {
    args: {
        comments: [],
        isLoading: true,
    },
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            );
        },
    ],
};
