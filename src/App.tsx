import { Route, Routes } from 'react-router-dom';

import RoutesEnum from './enums/routes.enum';

import Dashboard from '@/pages/dashboard';
import Layout from '@/pages/layout';
import Signin from '@/pages/signin';

function App() {

  return (
    <Routes>
      <Route path={RoutesEnum.SIGNIN} Component={Signin} />
      <Route path="/" Component={ Layout }>
        <Route path={RoutesEnum.DASHBOARD} Component={Dashboard} />
        <Route element={ <h1>NotFound</h1> } />
      </Route>
    </Routes>
  );
}

export default App;
