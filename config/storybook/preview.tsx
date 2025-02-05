import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';
import { StateSchema, StoreProvider } from '../../src/app/providers/StoreProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => {
            return (
                <StoreProvider>
                    <BrowserRouter>
                        <ThemeProvider>
                            <Story />
                        </ThemeProvider>
                    </BrowserRouter>
                </StoreProvider>
            );
        },
        // (Story) => {
        //     const state: Partial<StateSchema> = {
        //         loginForm: { username: '123', password: 'asd', isLoading: false },
        //     };
        //
        //     return (
        //         <StoreProvider initialState={state}>
        //             <Story />
        //         </StoreProvider>
        //     );
        // },
    ],
};

export default preview;

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
