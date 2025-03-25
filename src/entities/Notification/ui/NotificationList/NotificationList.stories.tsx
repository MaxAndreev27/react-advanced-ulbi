import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { NotificationList } from './NotificationList';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
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
type Story = StoryObj<typeof NotificationList>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        className: 'NotificationList',
    },
    decorators: [
        (Story) => (
            <div className={`app ${Theme.LIGHT}`}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '2',
                        title: 'Уведомление 2',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                    {
                        id: '3',
                        title: 'Уведомление 3',
                        description: 'Поставь лайк и оставь комментарий под Ulbi TV',
                    },
                ],
            },
        ],
    },
};
