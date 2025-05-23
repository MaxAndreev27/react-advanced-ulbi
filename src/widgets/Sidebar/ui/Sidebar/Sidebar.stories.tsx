import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Sidebar> = {
    title: 'widget/Sidebar',
    component: Sidebar,
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
type Story = StoryObj<typeof Sidebar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Light: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                user: {
                    authData: { id: '1', username: 'admin' },
                    _inited: true,
                },
            };
            return (
                <StoreProvider initialState={state}>
                    <div className={`app ${Theme.LIGHT}`}>
                        <Story />
                    </div>
                </StoreProvider>
            );
        },
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                user: {
                    authData: { id: '1', username: 'admin' },
                    _inited: true,
                },
            };
            return (
                <StoreProvider initialState={state}>
                    <div className={`app ${Theme.DARK}`}>
                        <Story />
                    </div>
                </StoreProvider>
            );
        },
    ],
};

export const NoAuthSidebar: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                user: { _inited: false },
            };
            return (
                <StoreProvider initialState={state}>
                    <div className={`app ${Theme.LIGHT}`}>
                        <Story />
                    </div>
                </StoreProvider>
            );
        },
    ],
};
