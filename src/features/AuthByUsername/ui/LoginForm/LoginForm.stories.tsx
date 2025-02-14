import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
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
type Story = StoryObj<typeof LoginForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: Partial<StateSchema> = {
                loginForm: { username: 'admin', password: '123', isLoading: false },
            };
            const defaultAsyncReducers: ReducersList = {
                loginForm: loginReducer,
            };
            return (
                <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
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
            const state: Partial<StateSchema> = {
                loginForm: {
                    username: 'admin',
                    password: 'wrong',
                    isLoading: false,
                    error: 'ERROR',
                },
            };
            const defaultAsyncReducers: ReducersList = {
                loginForm: loginReducer,
            };
            return (
                <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
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
            const state: Partial<StateSchema> = {
                loginForm: { username: 'admin', password: '123', isLoading: true },
            };
            const defaultAsyncReducers: ReducersList = {
                loginForm: loginReducer,
            };
            return (
                <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
                    <Story />
                </StoreProvider>
            );
        },
    ],
};
