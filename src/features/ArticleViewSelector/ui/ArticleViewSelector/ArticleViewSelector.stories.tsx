import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ArticleViewSelector> = {
    title: 'features/ArticleViewSelector',
    component: ArticleViewSelector,
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
};

export default meta;
type Story = StoryObj<typeof ArticleViewSelector>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
    args: {},
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

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.DARK}`}>
                    <Story />
                </div>
            );
        },
    ],
};

export const Orange: Story = {
    args: {},
    decorators: [
        (Story) => {
            return (
                <div className={`app ${Theme.ORANGE}`}>
                    <Story />
                </div>
            );
        },
    ],
};
