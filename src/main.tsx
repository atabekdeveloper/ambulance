import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'src/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { App } from './App';

import './assets/styles/base/_reset.scss';
import 'antd/dist/reset.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <Router>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </Router>
    </QueryClientProvider>
  </Provider>,
);
