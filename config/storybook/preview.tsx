import type {Preview} from '@storybook/react';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import {Theme, ThemeProvider} from "../../src/app/providers/ThemeProvider";

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
                    <div className={`app ${Theme.LIGHT}`}>
                        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                        <Story />
                    </div>
                </ThemeProvider>
            </BrowserRouter>
        ),
    ],
};

export default preview;
