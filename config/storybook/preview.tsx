import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';
import { StoreProvider } from '../../src/app/providers/StoreProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'fullscreen',
        backgrounds: {
            values: [
                { name: 'dark', value: '#000000' },
                { name: 'light', value: '#ffffff' },
                { name: 'orange', value: '#ffb005' },
                { name: 'twitter', value: '#00aced' },
                { name: 'facebook', value: '#3b5998' },
            ],
            default: 'light',
        },
    },
    decorators: [
        (Story) => {
            return (
                <BrowserRouter>
                    <StoreProvider>
                        <ThemeProvider>
                            <Story />
                        </ThemeProvider>
                    </StoreProvider>
                </BrowserRouter>
            );
        },
    ],
};

export default preview;
