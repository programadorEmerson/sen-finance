import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import ProvidersApp from '@/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ProvidersApp>
      <App />
    </ProvidersApp>
  </BrowserRouter>,
);
