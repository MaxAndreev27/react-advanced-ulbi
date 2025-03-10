import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import { Theme } from 'app/providers/ThemeProvider';

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
};

export default meta;
type Story = StoryObj<typeof ListBox>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        label: 'Укажите значение',
        value: '1',
        items: [
            { value: '1', content: '1' },
            { value: '2', content: '2' },
            { value: '3', content: '3', disabled: true },
            { value: '4', content: '4' },
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
