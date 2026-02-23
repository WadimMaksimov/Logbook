import App from '@/app';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { store } from './app/store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
