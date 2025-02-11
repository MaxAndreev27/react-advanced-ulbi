import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './shared/config/i18n/i18n';
import App from './app/App';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/StoreProvider';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
);
