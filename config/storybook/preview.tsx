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
    ],
};

export default preview;
