import React from 'react';
import {ProvideAuth} from './hooks/useAuth';
import Routes from './routes';

function App() {
  return (
    <ProvideAuth >
      <Routes />
    </ProvideAuth>
  );
}

export default App;
