import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { action } from '@storybook/addon-actions';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AddCommentForm> = {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
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
type Story = StoryObj<typeof AddCommentForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        onSendComment: action('onSendComment'),
    },
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                loginForm: { username: 'admin', password: '123', isLoading: false },
            };
            return (
                <StoreProvider initialState={state}>
                    <Story />
                </StoreProvider>
            );
        },
    ],
};

export const WithError: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                loginForm: {
                    username: 'admin',
                    password: 'wrong',
                    isLoading: false,
                    error: 'ERROR',
                },
            };
            return (
                <StoreProvider initialState={state}>
                    <Story />
                </StoreProvider>
            );
        },
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                loginForm: { username: 'admin', password: '123', isLoading: true },
            };
            return (
                <StoreProvider initialState={state}>
                    <Story />
                </StoreProvider>
            );
        },
    ],
};
