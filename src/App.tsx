import { Route, Routes } from 'react-router-dom';

import Signin from '@/pages/signin';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  );
}

export default App;
