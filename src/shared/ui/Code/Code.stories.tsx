import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { Theme } from '@/app/providers/ThemeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
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
type Story = StoryObj<typeof Code>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        text:
            'export default {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'consts Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
            '\n' +
            'export consts Normal = Template.bind({});',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
};
