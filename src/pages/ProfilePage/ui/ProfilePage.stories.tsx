import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import ProfilePage from './ProfilePage';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { profileReducer } from '@/features/editableProfileCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
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
type Story = StoryObj<typeof ProfilePage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
    args: {},
    decorators: [
        (Story) => {
            const state: DeepPartial<StateSchema> = {
                profile: {
                    form: {
                        username: 'admin',
                        age: 22,
                        country: Country.Ukraine,
                        lastname: 'ulbi tv',
                        first: 'asd',
                        city: 'asf',
                        currency: Currency.USD,
                        avatar,
                    },
                    isLoading: false,
                    readonly: true,
                },
            };
            const defaultAsyncReducers: ReducersList = {
                profile: profileReducer,
            };
            return (
                <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
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
                profile: {
                    form: {
                        username: 'admin',
                        age: 22,
                        country: Country.Ukraine,
                        lastname: 'ulbi tv',
                        first: 'asd',
                        city: 'asf',
                        currency: Currency.USD,
                        avatar,
                    },
                    isLoading: false,
                    readonly: true,
                },
            };
            const defaultAsyncReducers: ReducersList = {
                profile: profileReducer,
            };
            return (
                <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers }}>
                    <div className={`app ${Theme.DARK}`}>
                        <Story />
                    </div>
                </StoreProvider>
            );
        },
    ],
};
