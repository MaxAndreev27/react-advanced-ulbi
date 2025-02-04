import type { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../src/app/providers/ThemeProvider';

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
        (Story) => (
            <BrowserRouter>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </BrowserRouter>
        ),
    ],
};

export default preview;
