import App from '@/app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { store } from './app/store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './shared/theme/GlobalStyle';
import { theme } from './shared/theme/theme';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);
